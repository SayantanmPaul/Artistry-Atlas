import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity"
import { Rule } from "sanity";

const project = defineField({
    name: "project",
    title: "Project",
    type: "document",
    orderings: [orderRankOrdering],

    fields: [
        {
            name: 'title',
            title: "Title",
            type: "string"
        },
        {
            name: 'metadescription',
            title: "Meta Description",
            type: "string",
            validation: (Rule: Rule)=>Rule.max(120).error('max 120 character')
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
        },
        {
            name: 'mockup',
            title: 'Mockup Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: "bannerimages",
            title: "Banner Images",
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        },
        {
            name: "githubLink",
            title: "Github Link",
            type: "url",
        },
        {
            name: "projectdemoLink",
            title: "Project Demo Link",
            type: "url",
        },
        {
            name: 'casestudy',
            title: 'Case Study',
            type: "array",
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    fields: [{type: 'text', name: 'alt', title: 'Alt'}]
                }
            ]
        },
        orderRankField({ type: "project" }),
        {
            name: 'projectstatus',
            title: 'Project Status',
            type: "string",
            options: {
                list: [
                    {title: 'Completed', value: 'completed'},
                    {title: 'Ongoing', value: 'ongoing'},
                    {title: 'Pending', value: 'pending'},
                ],
                layout: 'radio'
            }
        },
        {
            name: 'tools',
            title: 'Tools',
            type: "array",
            of: [
                { type: 'string' }
            ]
        }

    ]
})

export default project