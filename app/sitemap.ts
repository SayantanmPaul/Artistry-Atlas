import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/work`,
            priority: 0.6
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/linktree`,
            priority: 0.5
        },
    ]
}