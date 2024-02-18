import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity"

const experience = defineField({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    orderings: [orderRankOrdering],

    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        orderRankField({ type: "experience" }),
        {
            name: 'company_logo',
            title: 'Company Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
            options: {
                dateFormat: "MMM-YYYY",
            },
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
            options: {
                dateFormat: "MMM-YYYY",
            },
        },
        {
            name: "currentjob",
            title: "Currently Job?",
            type: "boolean",
        },
        {
            name: "stack",
            title: "Stack",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
        },
    ]
})

export default experience