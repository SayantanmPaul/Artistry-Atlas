import EducationComp from '@/components/EducationComp'
import SectionHead from '@/components/SectionHead'
import { EducationData } from '@/sanity/sanity-queries'
import React from 'react'

const CareerSection = async() => {
  const educationInfo=await EducationData()
  return (
    <div className='flex flex-col gap-[20px] lg:gap-[28px] justify-start w-full'   >
      <SectionHead title='Education and Work' />
      <div className='flex flex-col gap-[36px] ml-4 border-l-[2px] border-dotted dark:border-[#FFFFFF]/30 border-[#413A6F]/40 pl-8 dark:border-neutral-800'>
        {educationInfo.map((info, i) =>(
          <EducationComp data={info} key={i}/>
        ))}
      </div>
      <div className='py-4'></div>      
    </div>
  )
}

export default CareerSection
