import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
    const articleLink =
        "break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted";

    return (
        <SiteShell active="about">
            <h1 className="mb-7 font-semibold text-balance text-rurikon-600">
                Shu Ding
            </h1>
            <p className="mt-7">
                I am a designer and developer at{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://vercel.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Vercel
                </a>
                . My interests span a broad spectrum of subjects, encompassing web
                development, creative coding, game design, and human-computer
                interaction.
            </p>
            <p className="mt-7">
                Since high school, I&apos;ve spent years on algorithm competitions, web
                design and development. In 2017, I earned my BSc degree in Computer
                Science from Fudan University in Shanghai, and joined as a software
                engineer at Microsoft. In 2018, I joined Vercel (ZEIT) to help build
                the next generation of developer tools including the platform, Next.js,
                AI SDK, v0, and more.
            </p>
            <p className="mt-7">
                You can gain further insights into my background and interests through
                my{" "}
                <Link className={articleLink} draggable={false} href="/thoughts">
                    thoughts
                </Link>
                ,{" "}
                <Link className={articleLink} draggable={false} href="/projects">
                    projects
                </Link>
                , find me on{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://github.com/shuding"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GitHub
                </a>
                ,{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://x.com/shuding"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    X/Twitter
                </a>
                , and{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://www.linkedin.com/in/shuding"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    LinkedIn
                </a>
                .
            </p>
        </SiteShell>
    );
}
