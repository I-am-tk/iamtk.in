ARG NODE_VERSION=24-bookworm-slim
ARG NODE_MAJOR=24
ARG NEXT_PUBLIC_GA_ID

FROM node:${NODE_VERSION} AS base
ENV PNPM_HOME="/pnpm" \
    NEXT_TELEMETRY_DISABLED="1" \
    PATH="/pnpm:$PATH"
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

FROM deps AS builder
ARG NEXT_PUBLIC_GA_ID
ENV NODE_ENV="production"
ENV NEXT_PUBLIC_GA_ID="${NEXT_PUBLIC_GA_ID}"
COPY . .
RUN pnpm build \
    && mkdir -p .next/cache  # ← moved here, before distroless stage

FROM gcr.io/distroless/nodejs${NODE_MAJOR}-debian13:nonroot AS runner
ENV NODE_ENV="production" \
    NEXT_TELEMETRY_DISABLED="1" \
    HOSTNAME="0.0.0.0" \
    PORT="3000"
WORKDIR /app

# nonroot user in distroless is uid/gid 65532
COPY --from=builder --chown=65532:65532 /app/.next/standalone ./
COPY --from=builder --chown=65532:65532 /app/.next/static ./.next/static
COPY --from=builder --chown=65532:65532 /app/public ./public
COPY --from=builder --chown=65532:65532 /app/.next/cache ./.next/cache

# USER nonroot is already set by the :nonroot tag

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD ["node", "-e", "require('node:http').get('http://127.0.0.1:' + (process.env.PORT || 3000) + '/', (res) => process.exit(res.statusCode >= 200 && res.statusCode < 400 ? 0 : 1)).on('error', () => process.exit(1))"]
CMD ["server.js"]
# ↑ distroless ENTRYPOINT is already `node`, so just pass the file
