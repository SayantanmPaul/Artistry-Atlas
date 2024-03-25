import React from 'react'
import LoaderAtlus from '@/public/assets/atlus.gif'
import Image from 'next/image'

const Loading = () => {
  return (
      <section className='w-full h-[72vh] mx-auto flex items-center justify-center ease-in-out duration-500'>
          <div className=''>
              <Image
                  src={LoaderAtlus}
                  alt='Loader Atlus' 
                  width={116}
                  height={116}
                  className='animate-pulse w-[116px] h-auto object-contain'
              />
          </div>
    </section>
  )
}

export default Loading
