import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import {
    getAllThoughts,
    getThoughtBySlug,
} from "@/lib/thoughts";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { Content } = await getThoughtBySlug(slug);

    return (
        <SiteShell active="thoughts">
            <Content />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return getAllThoughts().map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const { image, summary, title } = await getThoughtBySlug(slug);

    return {
        title,
        description: summary,
        openGraph: image ? { images: [image] } : undefined,
    };
}
