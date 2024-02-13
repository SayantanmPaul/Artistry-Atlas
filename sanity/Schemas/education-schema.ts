import { defineField } from "sanity";

const education = defineField({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'institution',
            title: 'Institution Name',
            type: 'string'
        },
        {
            name: 'institutionlogo',
            title: 'Institution Logo',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'field',
            title: 'Field of Study',
            type: 'string'
        },
        {
            name: 'courses',
            title: 'Courses',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'score',
            title: 'Score',
            type: 'string'
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY'
            }
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY'
            }
        },

    ]
})

export default education