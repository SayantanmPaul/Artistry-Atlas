'use client'
import React from 'react'
import LoaderAtlus from '@/public/assets/atlus.gif'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Loading = () => {
  return (
    <>
    <AnimatePresence>
      <section className='w-full lg:h-[88vh] md:h-[88vh] h-[76vh] mx-auto flex items-center justify-center ease-in-out duration-500'>
      <motion.div
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ delay: 0.1 }}
        className=''>
              <Image
                  src={LoaderAtlus}
                  alt='Loader Atlus' 
                  width={116}
                  height={116}
                  style={{height: "176px",width: '176px' }}
                  className='animate-pulse object-contain'
                  unoptimized={true}
              />
          </motion.div>
      </section>
    </AnimatePresence>
    </>
  )
}

export default Loading
