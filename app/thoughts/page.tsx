import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { getAllThoughts } from "@/lib/thoughts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thoughts",
};

export default function Page() {
    const thoughts = getAllThoughts();

    return (
        <SiteShell active="thoughts">
            <ul>
                {thoughts.map((thought) => (
                    <li className="font-medium" key={thought.slug}>
                        <Link
                            className="group -mx-2 flex items-center justify-between gap-1 px-2 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted focus-visible:text-rurikon-600"
                            draggable={false}
                            href={`/thoughts/${thought.slug}`}
                        >
                            <span className="block text-rurikon-500 group-hover:text-rurikon-700 group-focus-visible:text-rurikon-700">
                                {thought.title}
                            </span>
                            <span className="dot-leaders flex-1 text-rurikon-100 transition-colors group-hover:text-rurikon-500 group-hover:transition-none group-focus-visible:text-rurikon-500" />
                            <time className="block self-start text-rurikon-200 tabular-nums tracking-tighter transition-colors group-hover:text-rurikon-500 group-hover:transition-none group-focus-visible:text-rurikon-500">
                                {thought.publishedAt}
                            </time>
                        </Link>
                    </li>
                ))}
            </ul>
        </SiteShell>
    );
}
