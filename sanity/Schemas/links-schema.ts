import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"

const links = defineField({
    name: 'links',
    title: 'Project links and other socials',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        orderRankField({ type: 'links' }),
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        },
        {
            name: 'type',
            title: 'Link Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Project Link', value:'projectLink'},
                    {title: 'Other Social Link', value:'socialLink'},
                ],
                layout: 'dropdown'
            }
        },
        {
            name: 'url',
            title: 'Link/Url',
            type: 'url'
        },
    ]
})

export default links