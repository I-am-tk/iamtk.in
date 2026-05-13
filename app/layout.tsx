import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";

const sans = localFont({
    src: "./fonts/InterVariable.woff2",
    preload: true,
    variable: "--sans",
});

const serif = localFont({
    src: "./fonts/LoraItalicVariable.woff2",
    preload: true,
    variable: "--serif",
});

const mono = localFont({
    src: "./fonts/IosevkaFixedCurly-ExtendedMedium.woff2",
    preload: true,
    variable: "--mono",
});

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;
const shouldRenderAnalytics =
    process.env.NODE_ENV !== "development" && Boolean(googleAnalyticsId);

export const metadata: Metadata = {
    metadataBase: new URL("https://iamtk.in"),
    title: "i_am_TK",
    description:
        "Software engineer with 3+ years of experience building for the web.",
    openGraph: {
        type: "website",
        url: "https://iamtk.in/",
        title: "i_am_TK",
        description:
            "Software engineer with 3+ years of experience building for the web.",
        images: [
            {
                url: "/open-graph-image.jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "i_am_TK",
        description:
            "Software engineer with 3+ years of experience building for the web.",
        images: ["/open-graph-image.jpeg"],
    },
};

export const viewport: Viewport = {
    themeColor: "#fcfcfc",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("h-full", "font-mono")}>
            <head>
                <style>{`:root {
  --sans: ${sans.style.fontFamily};
  --serif: ${serif.style.fontFamily};
  --mono: ${mono.style.fontFamily};
}`}</style>
            </head>
            <body
                id="top"
                className={`${sans.variable} ${serif.variable} ${mono.variable} min-h-full flex flex-col antialiased`}
            >
                {children}
                {shouldRenderAnalytics ? (
                    <GoogleAnalytics gaId={googleAnalyticsId as string} />
                ) : null}
            </body>
        </html>
    );
}
