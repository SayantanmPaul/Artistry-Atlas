import React from 'react'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ["latin"] });

const TechStackSection = () => {
  return (
    <div className='max-w-[770px] flex flex-col lg:gap-[16px] gap-[4px]'>
      <h1 className={`${inter.className} font-semibold leading-[28px] text-[20px] lg:text-[24px] dark:text-[#F2F3F3] text-[#06030B]`}>Technologies</h1>
    </div>
  )
}

export default TechStackSection