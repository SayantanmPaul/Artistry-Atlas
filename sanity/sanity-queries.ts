import { About } from "@/types/about-type";
import { client } from "./lib/client";

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