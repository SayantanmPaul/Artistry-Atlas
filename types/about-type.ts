import { PortableTextBlock } from "sanity"

export type About = {
    _id: string,
    adminimage:string,
    bannerimage: string,
    metadescription: string,
    bio_desktopview: PortableTextBlock[],
    bio_mobileview: PortableTextBlock[],
    slug: string
}

