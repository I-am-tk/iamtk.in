import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { MDXContent } from "mdx/types";
import { notFound } from "next/navigation";

const thoughtsDirectory = path.join(process.cwd(), "app", "thoughts", "_articles");

export type ThoughtMetadata = {
    title: string;
    publishedAt: string;
    summary: string;
    draft?: boolean;
    image?: string;
};

export type Thought = ThoughtMetadata & {
    slug: string;
    Content: MDXContent;
};

function getThoughtPath(slug: string) {
    return path.join(thoughtsDirectory, `${slug}.mdx`);
}

function getThoughtSource(slug: string) {
    const thoughtPath = getThoughtPath(slug);

    if (!fs.existsSync(thoughtPath)) {
        notFound();
    }

    return fs.readFileSync(thoughtPath, "utf8");
}

function parseMetadata(slug: string): ThoughtMetadata {
    const { data } = matter(getThoughtSource(slug));

    return {
        title: String(data.title ?? slug),
        publishedAt: String(data.publishedAt ?? ""),
        summary: String(data.summary ?? ""),
        draft: Boolean(data.draft),
        image: data.image ? String(data.image) : undefined,
    };
}

function sortDate(value: string) {
    return Number(value.replace(/\D/g, "") || 0);
}

export function getThoughtSlugs() {
    return fs
        .readdirSync(thoughtsDirectory)
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => fileName.replace(/\.mdx$/, ""))
        .sort();
}

export function getAllThoughts() {
    return getThoughtSlugs()
        .map((slug) => ({
            slug,
            ...parseMetadata(slug),
        }))
        .filter((thought) => !thought.draft)
        .sort((a, b) => sortDate(b.publishedAt) - sortDate(a.publishedAt));
}

export async function getThoughtBySlug(slug: string): Promise<Thought> {
    if (!getThoughtSlugs().includes(slug)) {
        notFound();
    }

    const metadata = parseMetadata(slug);
    const { default: Content } = (await import(
        `@/app/thoughts/_articles/${slug}.mdx`
    )) as {
        default: MDXContent;
    };

    return {
        slug,
        ...metadata,
        Content,
    };
}
