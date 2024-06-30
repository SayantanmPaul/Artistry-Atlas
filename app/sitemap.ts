import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `https://www.sayantanpaul.com/`,
            priority: 1
        },
        {
            url: `https://www.sayantanpaul.com/projects`,
            priority: 0.8
        },
        {
            url: `https://www.sayantanpaul.com/work`,
            priority: 0.6
        },
        {
            url: `https://www.sayantanpaul.com/linktree`,
            priority: 0.5
        },
    ]
}