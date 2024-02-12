import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"

const tool = defineField({
    name: 'tool',
    title: 'Tools and Tech',
    type: 'document',
    orderings: [orderRankOrdering],
    
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        orderRankField({ type: 'tool' }),
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: "toolurl",
            title: "Tool Official URL",
            type: "url",
        },
    ]
})

export default tool