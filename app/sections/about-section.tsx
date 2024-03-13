import React from 'react'
import { Inter } from 'next/font/google'
import { PortableText } from "@portabletext/react";
import { About } from '@/types/about-type';
import { aboutMySlef } from '@/sanity/sanity-queries';
import { Roboto } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const AboutSection = async() => {
    const AboutDocs: About[] = await aboutMySlef()
  return (
    <>
        <div className='max-w-[770px] flex flex-col lg:gap-[16px] gap-[4px]'>
            <h1 className={`${inter.className} font-bold leading-[28px] text-[20px] lg:text-[24px] dark:text-[#F2F3F3] text-[#06030B]`}>About Me</h1>
            <span className={`  text-[14px] dark:text-[#C4C4C4] text-[#494E52] lg:text-[16px] lg:leading-[27px] leading-[22px] text-pretty antialiased text-ellipsis font-medium`}>
                {AboutDocs.map((data, i) => (
                    <span key={i} className='prose dark:prose-invert lg:text-[16px] break-words text-wrap'>
                        <PortableText value={data.bio}/>
                    </span>
                ))}
            </span>
        </div>
    </>
)}

export default AboutSection