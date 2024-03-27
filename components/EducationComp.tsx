import React from 'react'
import { Education } from '@/types/education-type'
import moment from 'moment'
import Image from 'next/image'
import { TiLocation } from "react-icons/ti";
import { Inter, Roboto } from 'next/font/google'

const interbold = Inter({ weight: '700', subsets: ['latin'] })
const robotosemiBold = Roboto({ weight: '500', subsets: ['latin'] })

const EducationComp = ({ data }: { data: Education }) => {
  const startDate = moment(data.startDate).format("YYYY");
  const endDate = moment(data.endDate).format("YYYY");

  return (
    <>
      <div className="group flex flex-row w-full relative">
        <span className="absolute -left-12 top-0 overflow-hidden rounded-full bg-neutral-900">
          <Image
            src={data.institutionlogo}
            height={32}
            width={32}
            alt={data.institution}
          />
        </span>
      <div className="flex flex-col gap-[4px]">
        <div className="flex items-center justify-between lg:gap-[186px] md:w-[576px] gap-5">
          <p className={`${interbold.className} font-semibold md:text-xl`}>{data.institution}</p>
          <p className="whitespace-nowrap text-xs font-medium tracking-tight text-neutral-700 dark:text-neutral-400">
            {startDate} - {endDate}
          </p>
        </div>
        <p className="gradient-text text-sm font-medium">{data.field}</p>
        <p className="flex items-center gap-1 text-xs text-neutral-700 dark:text-neutral-400">
          <TiLocation /> {data.location}
        </p>
        <div className="mt-1 text-[12px] inline-flex flex-row">
            <span className='flex flex-row flex-wrap max-w-[364px] gap-[2px]'>
            <p className="font-bold">{data.courses ? 'Courses:' : null}</p>
              {data.courses? data.courses.map((course, i) => (
                <p key={i}>{course}</p>
              )): null}
            </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default EducationComp
