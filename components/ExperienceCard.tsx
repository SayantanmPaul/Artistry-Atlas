"use client"
import { Experience } from '@/types/experience-type'
import { PortableText } from '@portabletext/react';
import moment from 'moment';
import { Inter, Poppins } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';

const interbold = Inter({ weight: '700', subsets: ['latin'] })
const poppinsbold= Poppins({weight: '700', subsets: ['latin']})

const ExperienceCard = ({ data }: { data: Experience }) => {
    const startDate = moment(data.startDate).format("MMM-YYYY");
    const endDate = moment(data.endDate).format("MMM-YYYY");
    const [learnMore, setLearnMore] = useState(true)

    return (
        <>
            <div className="group flex flex-row w-full relative">
                <span className="absolute -left-12 top-0 overflow-hidden rounded-full bg-neutral-900">
                    <Image
                        src={data.company_logo}
                        height={32}
                        width={32}
                        alt={data.company}
                    />
                </span>
                <div className="flex flex-col gap-1 w-full items-start">
                    <div className="flex items-center justify-between lg:gap-[186px] md:w-[576px] gap-5">
                        <p className={`${interbold.className} font-semibold md:text-xl`}>{data.company}</p>
                        <p className="whitespace-nowrap text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-400">
                            {startDate} - {data?.currentjob ? 'present' : endDate}
                        </p>
                    </div>
                    <p className="gradient-text text-sm font-medium">{data.position}</p>
                    <p className="flex items-center gap-1 text-xs text-neutral-700 dark:text-neutral-400">
                        <TiLocation /> {data.location}
                    </p>
                    <div className="mt-1 text-[12px] inline-flex flex-row">
                        <span className='flex flex-row flex-wrap max-w-[364px] gap-[2px]'>
                            <p className="font-bold">{data.stack ? 'Tech:' : null}</p>
                            <p>{data.stack}</p>
                        </span>
                    </div>
                    <button
                        className={` pt-2 flex flex-row justify-between items-center w-full group`}
                        onClick={() => setLearnMore(!learnMore)}
                    >
                        <p className={`group-hover:underline text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FB] to-[#005BEA] font-bold text-xs ${poppinsbold.className}`}>
                            {learnMore ? "read less" : "know more about it"}
                        </p>
                        <FaCaretRight
                            className={`${learnMore ? 'rotate-90' : 'rotate-0'} text-[#0082F0] duration-300 ease-in-out w-3 h-3`}
                        />
                    </button>
                    <span className={`prose dark:prose-invert w-full text-sm leading-6 ${learnMore ? 'open' : 'closed'}`}>
                        <PortableText value={data?.description} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard;

