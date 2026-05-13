import createMDX from "@next/mdx";
import { NextConfig } from "next";
import { createCssVariablesTheme } from "shiki/core";

const shikiTheme = createCssVariablesTheme({
    name: "css-variables",
    variablePrefix: "--shiki-",
    variableDefaults: {},
    fontStyle: true,
});

const nextConfig: NextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    output: "standalone",
    outputFileTracingRoot: process.cwd(),
    turbopack: {
        root: process.cwd(),
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: ["remark-frontmatter", "remark-gfm", "remark-math"],
        rehypePlugins: [
            "@microflash/rehype-figure",
            ["rehype-katex", { strict: false, throwOnError: false }],
            [
                "@shikijs/rehype",
                {
                    theme: shikiTheme,
                    langs: [
                        "bash",
                        "csharp",
                        "css",
                        "html",
                        "javascript",
                        "json",
                        "jsx",
                        "markdown",
                        "mdx",
                        "shell",
                        "shellscript",
                        "tsx",
                        "typescript",
                    ],
                    addLanguageClass: true,
                    defaultLanguage: "text",
                    fallbackLanguage: "text",
                },
            ],
        ],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
