import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
    metadataBase: new URL("https://iamtk.in"),
    title: "i_am_TK",
    description: "I am TK",
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
                className={`${sans.variable} ${serif.variable} ${mono.variable} min-h-full flex flex-col antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
