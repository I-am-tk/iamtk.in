import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
    const articleLink =
        "break-words decoration-from-font underline underline-offset-2 decoration-rurikon-300 hover:decoration-rurikon-600 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-offset-1 focus-visible:outline-dotted";

    return (
        <SiteShell active="about">
            <h1 className="mb-7 font-semibold text-balance text-rurikon-600">
                TK
            </h1>
            <p className="mt-7">
                I am a software engineer with more than three years of
                experience building for the web. My interests include web
                development, solving competitive programming problems, and
                continually learning new ideas in the web development field.
            </p>
            <p className="mt-7">
                I have always been interested in building things for the web,
                but I started working professionally in 2021, right after my
                graduation. I joined{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://www.quanteon.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Quanteon
                </a>
                , where I have been working on practical software, product
                engineering, and the everyday craft of making interfaces reliable,
                usable, and maintainable.
            </p>
            <p className="mt-7">
                Outside work, I like playing games like PUBG PC, Valorant, and
                CS. I also enjoy following news related to geopolitics, because
                I find the way countries, economies, and people shape each other
                genuinely fascinating.
            </p>
            <p className="mt-7">
                You can read more through my{" "}
                <Link className={articleLink} draggable={false} href="/thoughts">
                    thoughts
                </Link>
                , find me on{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://x.com/ntikeswar83"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    X/Twitter
                </a>
                ,{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://github.com/I-am-tk"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GitHub
                </a>
                , and{" "}
                <a
                    className={articleLink}
                    draggable={false}
                    href="https://www.linkedin.com/in/tk-naik/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    LinkedIn
                </a>
                .
            </p>
            <Image
                alt="i_am_TK"
                className="ml-auto mt-10 h-auto w-28"
                height={42}
                src="/i_am_logo.svg"
                unoptimized
                width={81}
            />
        </SiteShell>
    );
}
