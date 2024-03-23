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
            name: 'bio_desktopview',
            title: 'Bio for Desktop',
            type: 'array',
            of: [{type: 'block'}]
        }),
        
        defineField({
            name: 'bio_mobileview',
            title: 'Bio for Mobile',
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