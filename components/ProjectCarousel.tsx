'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'

type Props = {
    data: string[],
    id: string
}

export function ProjectCarousel({data, id}:Props) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla overflow-hidden object-cover rounded-[6px] " ref={emblaRef}>
          <div className="embla__container lg:max-w-[770px] max-w-full lg:h-[376px] md:h-[356px] h-[216px] gap-[16px] ">
              {data.map((img, i) => (
                <span key={i} className='hover:bg-gradient-to-r hover:from-[#1798FF] hover:to-[#D65DFE] bg-[#413A6F]/10 p-[2px] overflow-hidden embla__slide lg:rounded-[16px] rounded-[12px] ease-in-out duration-500'>
                  {img ? <Image key={i} src={img} alt={id} width={1080} height={1080} priority className='object-cover w-full h-full lg:rounded-[14px] rounded-[10px] overflow-hidden' /> :
                    <Skeleton className='w-full h-full lg:rounded-[14px] rounded-[10px] overflow-hidden ' />}
                </span>
            ))}
      </div>    
    </div>
  )
}
