import { About } from "@/types/about-type";
import { client } from "./lib/client";
import { Tool } from "@/types/tools-type";
import { Project } from "@/types/project-type";

//about myself data
export const aboutMySlef = async():Promise<About>=> {
    const query = 
        `*[_type=='about'][0]{
            _id,
            adminimage,
            bannerimage,
            metadescription,
            bio_desktopview,
            bio_mobileview,
            slug,

        }`
    const getAdminData=await client.fetch(query)
    return getAdminData
}

//tech stack data
export const TechTools = async (): Promise<Tool[]> => {
    const toolQuery = await client.fetch(
        `*[_type=='tool'] | order(orderRank){
            _id,
            name,
            "slug":slug.current,
            "icon": icon.asset->url,
            category->{
                title
            }
        }`
    )
    return toolQuery
}

//projects data

export const projectList = async(): Promise<Project[]>=> {
    const projectQuery = await client.fetch(
        `*[_type=='project'] | order(orderRank){
            _id,
            title,
            metadescription,
            "slug":slug.current,
            "mockup": mockup.asset->url,
            isFeatured,
            catagory,
            "logo":icon.asset->url
        }`
    )
    return projectQuery
}

//project's detailed information

export const projectDetails = async(slug:string): Promise<Project>=> {
    const projecDatatQuery = await client.fetch(
        `*[_type=='project' && slug.current == $slug][0]{
            _id,
            title,
            metadescription,
            "slug":slug.current,
            "mockup": mockup.asset->url,
            isFeatured,
            catagory,
            "carousleImages": bannerimages[].asset->url,
            githubLink,
            projectdemoLink,
            DescType,
            casestudy,
            projectstatus,
            tools[]
        }`,
        { slug: slug },
    )
    return projecDatatQuery
}
