import React from 'react'
import { Inter } from 'next/font/google'
import { PortableText } from "@portabletext/react";
import { About } from '@/types/about-type';
import { aboutMySlef } from '@/sanity/sanity-queries';
import { Roboto } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { PiReadCvLogoBold } from "react-icons/pi";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const AboutSection = async() => {
    const AboutDocs: About[] = await aboutMySlef()
  return (
    <>
        <div className='max-w-[770px] flex flex-col lg:gap-[16px] gap-[4px]'>
            <h1 className={`${inter.className} font-semibold leading-[28px] text-[20px] lg:text-[24px] dark:text-[#F2F3F3] text-[#06030B]`}>About Me</h1>
            <span className={`${roboto.className}text-[14px] dark:text-[#C4C4C4] text-[#494E52] lg:leading-[27px] leading-[8px] text-pretty antialiased text-ellipsis font-medium`}>
                {AboutDocs.map((data, i) => (
                    <span key={i} className='prose dark:prose-invert lg:text-[17.5px] text-[14px] break-words text-wrap list-none'>
                        <PortableText value={data.bio}/>
                    </span>
                ))}
            </span>
            <Link href="/sayantanpaul-resume.pdf" passHref legacyBehavior>
                <a target="_blank" rel="noref">
                <Button
                    size='default'
                    variant='default'
                    className=' flex-initial inline-flex px-4 lg:w-auto md:w-auto font-semibold  rounded-sm lg:my-2 my-4 w-full'>
                    Download CV
                    <PiReadCvLogoBold size={20} className='ml-2 h-[16px] w-[16px]'/>
                </Button>
                </a>
            </Link>
        </div>
    </>
)}

export default AboutSection