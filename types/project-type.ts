import { PortableTextBlock } from "sanity"

export type Project={
    _id: string,
    title: string,
    metadescription: string,
    slug: string,
    mockup: string,
    catagory: string,
    isFeatured: boolean,
    icon: string,
    carousleImages: string[],
    githubLink: string,
    projectdemoLink: string,
    DescType: string,
    casestudy: PortableTextBlock[],
    projectstatus: string,
    tools: string[]
}