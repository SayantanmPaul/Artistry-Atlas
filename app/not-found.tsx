import React from 'react'
import error from '@/public/assets/404.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className='flex flex-col w-full items-center gap-[36px] h-[76vh] justify-center duration-300 ease-in-out'>
        <Image src={error} alt='404' width={340} height={340} className='lg:w-[340px] w-[236px]' />
        <Link href={'/'}>
            <Button className=' bg-rose-600 rounded-none font-bold'>Go back to Home</Button>
        </Link>
        <div className='w-full text-center'>
            <p className=' text-[#494E52] dark:text-[#C4C4C4] text-[14px]'>This developer sometimes make dumb mistakes</p>
            <a className=' text-[14px] font-semibold hover:underline text-rose-400' href="mailto:iampaulsayantan06@gamil.com">report this issue!</a>
        </div>
    </div>
  )
}

export default NotFound
