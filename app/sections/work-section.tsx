import ExperienceCard from '@/components/ExperienceCard'
import SectionHead from '@/components/SectionHead'
import { ExperienceData } from '@/sanity/sanity-queries'
import React from 'react'

const WorkSection = async () => {
    const experienceInfo = await ExperienceData()

    return (
        <div className='flex flex-col gap-[20px] lg:gap-[28px] justify-start w-full'>
            <SectionHead title='Experiences' />
            <div className='flex flex-col gap-[36px] ml-4 border-l-[2px] border-dotted dark:border-[#FFFFFF]/30 border-[#413A6F]/40 pl-8 dark:border-neutral-800'>
                {experienceInfo.map((work, i) => (
                    <ExperienceCard data={work} key={i} />
                ))}
            </div>
        </div>
    )
}

export default WorkSection
