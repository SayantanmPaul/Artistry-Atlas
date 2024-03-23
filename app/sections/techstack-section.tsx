import React from 'react'
import SectionHead from '@/components/SectionHead';
import TechToolBadge from '@/components/TechToolBadge';
import { TechTools } from '@/sanity/sanity-queries';

const TechStackSection = async () => {
  const categories = ['Languages', 'Web Technologies', 'Frameworks and Libraries', 'Tools', 'OS'];
  const ToolsData = await TechTools()
  
  return (
    <div className='max-w-[775px] flex flex-col gap-[16px] overflow-hidden'>
      <SectionHead title='Tech Stack & skills' />
      <div className=' flex flex-col w-full lg:gap-[16px] md:gap-[16px] gap-[8px] flex-wrap'> 
      {categories.map((i) => (
          <div key={i} className='flex flex-row lg:gap-[16px] md:gap-[16px] gap-[8px] flex-wrap'>
            {ToolsData.map((tool) => {
              if (tool.category.title === i) {
                return <TechToolBadge data={tool} key={tool._id}/>
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackSection