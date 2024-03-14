import React from 'react'
import { Inter } from 'next/font/google'
import SectionHead from '@/components/SectionHead';


const inter = Inter({ subsets: ["latin"] });

const TechStackSection = () => {
  return (
    <div className='max-w-[770px] flex flex-col lg:gap-[16px] gap-[4px]'>
      <SectionHead title='Tech Stack' metadesc='These are my go-to technologies and skills' />
    </div>
  )
}

export default TechStackSection