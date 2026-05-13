import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { clsx } from "clsx";

function cx(...classes: Array<string | undefined>) {
    return clsx(classes);
}

function Card({
    desc,
    image,
    link,
    title,
}: {
    desc: string;
    image: string;
    link: string;
    title: string;
}) {
    return (
        <a
            className="group my-7 block select-none overflow-clip rounded-lg border border-rurikon-border transition-colors hover:bg-white"
            draggable={false}
            href={link}
            rel="noreferrer"
            target="_blank"
        >
            {/* eslint-disable-next-line @next/next/no-img-element -- Card images can be remote metadata images. */}
            <img
                alt=""
                className="m-0 aspect-[1.9/1] w-full border-b border-rurikon-border object-cover"
                src={image}
            />
            <p className="m-4 mb-1 mt-3 font-semibold">{title}</p>
            <p className="m-4 mb-2 mt-1 text-sm opacity-80">{desc}</p>
            <p className="m-4 mb-3 mt-1 text-sm text-rurikon-200 transition-colors group-hover:text-rurikon-300">
                {link}
            </p>
        </a>
    );
}

function BlockSideTitle({
    children,
    title,
}: {
    children: ReactNode;
    title: ReactNode;
}) {
    return (
        <figure>
            <span className="inline-block w-full">
                <span className="sidenote-content float-left w-full">
                    {children}
                </span>
            </span>
            <span className="sidenote mx-auto mb-7 mt-3.5 block w-[80%] text-pretty text-left text-xs leading-5 text-rurikon-400 sm:text-sm sm:leading-6 text:inline text:float-right text:clear-right text:mr-[-50%] text:mt-0 text:w-[50%] text:pl-7">
                <span className="sr-only">Sidenote: </span>
                {title}
            </span>
        </figure>
    );
}

const components = {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
        <h1
            className={cx(
                "mb-7 font-semibold text-balance text-rurikon-600",
                className,
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
        <h2
            className={cx(
                "mb-7 mt-14 font-semibold text-balance text-rurikon-600",
                className,
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
        <h3
            className={cx(
                "mb-7 mt-14 font-semibold text-balance text-rurikon-600",
                className,
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
        <h4
            className={cx(
                "mb-7 mt-14 font-semibold text-balance text-rurikon-600",
                className,
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: ComponentPropsWithoutRef<"h5">) => (
        <h5
            className={cx(
                "mb-7 mt-14 font-semibold text-balance text-rurikon-600",
                className,
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: ComponentPropsWithoutRef<"h6">) => (
        <h6
            className={cx(
                "mb-7 mt-14 font-semibold uppercase text-balance text-rurikon-600",
                className,
            )}
            {...props}
        />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
        <p className={cx("mt-7", className)} {...props} />
    ),
    a: ({ className, href, ...props }: ComponentPropsWithoutRef<"a">) => {
        const linkClass = cx(
            "break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted",
            className,
        );

        if (href?.startsWith("/") || href?.startsWith("#")) {
            return (
                <Link
                    className={linkClass}
                    draggable={false}
                    href={href}
                    {...props}
                />
            );
        }

        return (
            <a
                className={linkClass}
                draggable={false}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
                {...props}
            />
        );
    },
    strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
        <strong className={cx("font-bold", className)} {...props} />
    ),
    em: ({ className, ...props }: ComponentPropsWithoutRef<"em">) => (
        <em className={className} {...props} />
    ),
    del: ({ className, ...props }: ComponentPropsWithoutRef<"del">) => (
        <del className={className} {...props} />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
        <ul
            className={cx(
                "mt-7 list-outside list-disc pl-5 marker:text-rurikon-200",
                className,
            )}
            {...props}
        />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
        <ol
            className={cx(
                "mt-7 list-outside list-decimal pl-5 marker:text-rurikon-200",
                className,
            )}
            {...props}
        />
    ),
    li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
        <li className={cx("pl-1.5", className)} {...props} />
    ),
    blockquote: ({
        className,
        ...props
    }: ComponentPropsWithoutRef<"blockquote">) => (
        <blockquote
            className={cx(
                "-ml-6 pl-6 not-mobile:text-rurikon-400 sm:-ml-10 sm:pl-10 md:-ml-14 md:pl-14",
                className,
            )}
            {...props}
        />
    ),
    hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
        <hr
            className={cx("my-14 w-24 border-rurikon-border", className)}
            {...props}
        />
    ),
    pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
        <pre
            className={cx(
                "mt-7 py-3.5 px-4 whitespace-pre md:whitespace-pre-wrap",
                className,
            )}
            {...props}
        />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
        <code
            className={cx(
                "font-mono text-[0.805rem] sm:text-[13.8px] md:text-[0.92rem]",
                className,
            )}
            {...props}
        />
    ),
    table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
        <div className="mt-7 overflow-x-auto">
            <table
                className={cx(
                    "w-full border-collapse text-left text-sm leading-6 text-rurikon-500",
                    className,
                )}
                {...props}
            />
        </div>
    ),
    thead: ({ className, ...props }: ComponentPropsWithoutRef<"thead">) => (
        <thead
            className={cx("border-b border-rurikon-border", className)}
            {...props}
        />
    ),
    tbody: ({ className, ...props }: ComponentPropsWithoutRef<"tbody">) => (
        <tbody
            className={cx("divide-y divide-rurikon-border", className)}
            {...props}
        />
    ),
    tr: ({ className, ...props }: ComponentPropsWithoutRef<"tr">) => (
        <tr className={cx("align-baseline", className)} {...props} />
    ),
    th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
        <th
            className={cx(
                "px-3 py-2 font-semibold text-rurikon-600 first:pl-0 last:pr-0",
                className,
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
        <td
            className={cx("px-3 py-2 first:pl-0 last:pr-0", className)}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        src,
        ...props
    }: ComponentPropsWithoutRef<"img">) => {
        const resolvedSrc =
            typeof src === "string" &&
            !src.startsWith("/") &&
            !src.startsWith("http")
                ? `/thoughts/${src}`
                : src;

        return (
            // eslint-disable-next-line @next/next/no-img-element -- MDX image nodes do not reliably provide dimensions for next/image.
            <img
                className={cx("mt-7", className)}
                alt={alt ?? ""}
                src={resolvedSrc}
                {...props}
            />
        );
    },
    figure: ({ className, ...props }: ComponentPropsWithoutRef<"figure">) => (
        <figure className={cx("mt-7", className)} {...props} />
    ),
    figcaption: ({
        className,
        ...props
    }: ComponentPropsWithoutRef<"figcaption">) => (
        <figcaption
            className={cx(
                "mt-3 text-center text-sm text-rurikon-400",
                className,
            )}
            {...props}
        />
    ),
    input: ({ className, ...props }: ComponentPropsWithoutRef<"input">) => (
        <input
            className={cx(
                "mr-2 align-middle accent-foreground disabled:opacity-60",
                className,
            )}
            {...props}
        />
    ),
    kbd: ({ className, ...props }: ComponentPropsWithoutRef<"kbd">) => (
        <kbd
            className={cx(
                "rounded border border-rurikon-border bg-rurikon-50 px-1.5 py-0.5 font-mono text-[0.8em]",
                className,
            )}
            {...props}
        />
    ),
    mark: ({ className, ...props }: ComponentPropsWithoutRef<"mark">) => (
        <mark
            className={cx(
                "rounded bg-yellow-200 px-1 text-neutral-950",
                className,
            )}
            {...props}
        />
    ),
    sup: ({ className, ...props }: ComponentPropsWithoutRef<"sup">) => (
        <sup
            className={cx("text-[0.75em] leading-none", className)}
            {...props}
        />
    ),
    sub: ({ className, ...props }: ComponentPropsWithoutRef<"sub">) => (
        <sub
            className={cx("text-[0.75em] leading-none", className)}
            {...props}
        />
    ),
    BlockSideTitle,
    Card,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
    return components;
}
