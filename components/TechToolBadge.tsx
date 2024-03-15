import React from 'react'
import { Tool } from '@/types/tools-type'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { ImArrowUpRight2 } from "react-icons/im";

const robotoMedium = Roboto({ subsets: ['latin'], weight: '500' })

const TechToolBadge = ({ data }: { data: Tool }) => {
  return (
    <span className='hover:bg-gradient-to-r hover:from-[#1798FF] hover:to-[#D65DFE] dark:bg-[#413A6F]/20 bg-[#D0CADF] p-[1px] rounded-[6px] lg:rounded-[4px] md:rounded-[4px] overflow-hidden group'>
      <span className='inline-flex flex-row lg:gap-[12px] md:gap-[12px] gap-[8px] items-center justify-center py-[4px] px-[12px] dark:bg-[#0F0B17] bg-[#FFFFFF] lg:rounded-[4px] md:rounded-[4px] rounded-[6px] border cursor-pointer shadow-sm  duration-300 ease-in-out '>
        <div className=' w-[16px]'>
            <Image src={data.icon} alt={data.slug} width={100} height={100} className='lg:w-[16px] md:w-[16px] w-[14px] max-h-[18px]'/>
        </div>
        <span className={`${robotoMedium.className} text-[#191825] dark:text-[#F2F3F3] font-medium lg:text-[14px] text-[12px] leading-[22px]`}>{data.name}</span>
        <ImArrowUpRight2 size={12} className='text-[#D0CADF] dark:text-[#F2F3F3]/40 group-hover:text-[#1798FF] duration-300 ease-in-out lg:block hidden'/>
      </span>
    </span>
  )
}

export default TechToolBadge
