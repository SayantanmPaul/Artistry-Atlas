import { defineField, defineType } from "sanity"
const about = {
    name: "about",
    title: "Admin Details",
    type: "document",

    fields: [
        defineField({
            name: "adminimage",
            title: "Admin Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),

        defineField({
            name: "bannerimage",
            title: "Banner Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        
        defineField({
            name: "metadescription",
            title: "Meta-description",
            type: "string",
        }),
        
        defineField({
            name: 'bio',
            title: 'Bi0',
            type: 'array',
            of: [{type: 'block'}]
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {source: "metadescription" }
        }),
    ]
}

export default about