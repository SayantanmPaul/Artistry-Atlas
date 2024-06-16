import { About } from "@/types/about-type";
import { client } from "./lib/client";
import { Tool } from "@/types/tools-type";
import { Project } from "@/types/project-type";
import { Links } from "@/types/link-type";
import { Education } from "@/types/education-type";
import { Experience } from "@/types/experience-type";
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

//other links data

export const linkList = async(): Promise<Links[]>=> {
    const linkQuery = await client.fetch(
        `*[_type=='links'] | order(orderRank){
            _id,
            title,
            type,
            url,
            "logo":logo.asset->url
        }`
    )
    return linkQuery
}

// // fetch delay testing purpose
// export async function ConstWait(ms: number) {
//     return new Promise(res=>setTimeout(res,ms))
// }

//Education Data
export const EducationData = async (): Promise<Education[]> => {
    const educationQuery = await client.fetch(
        `*[_type=='education'] | order(orderRank){
            _id,
            institution,
            field,
            courses,
            location,
            score,
            startDate,
            endDate,
            "institutionlogo": institutionlogo.asset->url,
        }`
    )
    return educationQuery
}

//experience data
export const ExperienceData = async(): Promise<Experience[]> => {
    const experienceQuery = await client.fetch(
        `*[_type=='experience'] | order(orderRank){
            _id,
            _createdAt,
            company,
            "company_logo":company_logo.asset->url,
            position,
            location,
            startDate,
            endDate,
            currentjob,
            stack,
            description
        }`
    )
    return experienceQuery
}