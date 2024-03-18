import { PortableTextBlock } from "sanity"

export type Project={
    _id: string,
    title: string,
    metadescription: string,
    slug: string,
    catagory: string,
    icon: string,
    mockup: string,
    bannerimages: string[],
    githubLink: string,
    projectdemoLink: string,
    DescType: string,
    casestudy: PortableTextBlock[],
    projectstatus: string,
    isFeatured: boolean,
    tools: string[]
}