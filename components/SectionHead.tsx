import React from 'react'
import { Poppins } from 'next/font/google'
import { Roboto } from 'next/font/google';

type Props = {
    title: string;
    metadesc ?: string;
};
const robotoSemibold = Roboto({ subsets: ['latin'], weight: '700' })
const PoppinsBold = Poppins({ subsets: ['latin'], weight: '600' })

const SectionHead = ({ title, metadesc }: Props) => {
    return (
      <div className='inline-flex flex-col items-start justify-center lg:gap-[2px]'>
        <h1 className={`${PoppinsBold.className} font-bold lg:leading-[28px] leading-[22px] text-[20px] lg:text-[24px] dark:text-[#F2F3F3] text-[#06030B]`}>{title}</h1>
        {metadesc ? <h3 className={`${robotoSemibold.className} font-semibold text-transparent  lg:text-[14px] text-[12px] bg-clip-text bg-gradient-to-r from-[#bb86ff] to-[#ff3f65] leading-[22px] tracking-wide`}>{metadesc}</h3> : null}
      </div>
    )
  }
  

export default SectionHead
