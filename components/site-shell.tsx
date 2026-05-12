import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/logo";

type SiteShellProps = {
    active: "about" | "thoughts";
    children: ReactNode;
};

const navLink =
    "inline-block w-full px-2 focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted focus-visible:text-rurikon-600";

function NavItem({
    active,
    children,
    href,
}: {
    active: boolean;
    children: ReactNode;
    href: string;
}) {
    return (
        <li
            className={
                active
                    ? "-mx-2 text-rurikon-800 transition-colors hover:transform-none"
                    : "-mx-2 text-rurikon-300 transition-colors hover:text-rurikon-600 hover:transform-none"
            }
        >
            <Link className={navLink} draggable={false} href={href}>
                {children}
            </Link>
        </li>
    );
}

export function SiteShell({ active, children }: SiteShellProps) {
    return (
        <div className="w-full p-6 text-sm leading-6 text-rurikon-500 antialiased sm:p-10 sm:text-[15px] sm:leading-7 md:p-14 md:text-base md:leading-7">
            <div className="content-fade-out pointer-events-none fixed left-0 top-0 z-30 h-6 w-full sm:hidden sm:h-10 md:h-14" />
            <div className="flex flex-col mobile:flex-row">
                <nav className="w-full mobile:mr-6 mobile:w-20 sm:mr-10 md:mr-14">
                    <div className="mb-6 flex items-start justify-between gap-6 mobile:sticky mobile:top-6 mobile:mb-0 mobile:block sm:top-10 md:top-14">
                        <Link
                            aria-label="i_am_TK home"
                            className="group flex w-16 justify-end text-rurikon-500 transition-colors hover:text-[#0048cf] focus-visible:outline focus-visible:outline-rurikon-400 focus-visible:rounded-xs focus-visible:outline-dotted mobile:mb-7 mobile:ml-auto mobile:w-full"
                            draggable={false}
                            href="/"
                        >
                            <Logo
                                aria-hidden="true"
                                className="h-auto w-8 [--logo-gradient-end:currentColor] [--logo-gradient-start:var(--background)] [--logo-mark:var(--background)] group-hover:[--logo-gradient-end:#0048cf] group-hover:[--logo-gradient-start:white] group-hover:[--logo-mark:white]"
                            />
                        </Link>
                        <ul className="flex justify-end gap-2 text-right lowercase mobile:block">
                            <NavItem active={active === "about"} href="/">
                                About
                            </NavItem>
                            <NavItem
                                active={active === "thoughts"}
                                href="/thoughts"
                            >
                                Thoughts
                            </NavItem>
                        </ul>
                    </div>
                </nav>
                <main className="relative max-w-2xl flex-1 contain-[inline-size]">
                    <div className="absolute right-0 h-px w-full bg-rurikon-border opacity-50 mix-blend-multiply mobile:left-0 mobile:right-auto mobile:h-full mobile:w-px mobile:opacity-100" />
                    <article className="pl-0 pt-6 mobile:pl-6 mobile:pt-0 sm:pl-10 md:pl-14">
                        {children}
                    </article>
                </main>
            </div>
        </div>
    );
}
