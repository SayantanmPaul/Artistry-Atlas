import EducationComp from '@/components/EducationComp'
import ExperienceCard from '@/components/ExperienceCard'
import SectionHead from '@/components/SectionHead'
import { EducationData, ExperienceData } from '@/sanity/sanity-queries'
import React from 'react'

const LearningSection = async() => {
  const educationInfo = await EducationData()
  const experienceInfo = await ExperienceData()
  
  return (
    <div className='flex flex-col gap-[20px] lg:gap-[28px] justify-start w-full'   >
      <SectionHead title='Academic Learning' />
      <div className='flex flex-col gap-[36px] ml-4 border-l-[2px] border-dotted dark:border-[#FFFFFF]/30 border-[#413A6F]/40 pl-8 dark:border-neutral-800'>
        {educationInfo.map((info, i) =>(
          <EducationComp data={info} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default LearningSection
