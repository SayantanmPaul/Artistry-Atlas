import { Experience } from '@/types/experience-type'
import { PortableText } from '@portabletext/react';
import moment from 'moment';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import { TiLocation } from 'react-icons/ti';

const interbold = Inter({ weight: '700', subsets: ['latin'] })

const ExperienceCard = ({ data }: { data: Experience }) => {
    const startDate = moment(data.startDate).format("MMM-YYYY");
    const endDate = moment(data.endDate).format("MMM-YYYY");

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
                <div className="flex flex-col gap-[4px]">
                    <div className="flex items-center justify-between lg:gap-[186px] md:w-[576px] gap-5">
                        <p className={`${interbold.className} font-semibold md:text-xl`}>{data.company}</p>
                        <p className="whitespace-nowrap text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-400">
                            {startDate} - {data?.currentjob? 'present': endDate}
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
                    <span className='prose dark:prose-invert text-wrap text-[14px] leading-[27px]'>
                        <PortableText value={data?.description} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard
