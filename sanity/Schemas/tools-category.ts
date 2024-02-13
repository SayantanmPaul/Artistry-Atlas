import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"

const category = defineField({
    name: 'category',
    title: 'Category Tools',
    type: "document",
    orderings: [orderRankOrdering],

    fields: [
        {
            name: 'title',
            title: 'Title of the category',
            type: 'string'
        },
        orderRankField({ type: 'category' }),
    ]
})

export default category