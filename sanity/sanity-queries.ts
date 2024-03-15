import { About } from "@/types/about-type";
import { client } from "./lib/client";
import { Tool } from "@/types/tools-type";
//about myself data
export const aboutMySlef = async():Promise<About[]>=> {
    const query = 
        `*[_type=='about']{
            adminimage,
            bannerimage,
            metadescription,
            bio
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