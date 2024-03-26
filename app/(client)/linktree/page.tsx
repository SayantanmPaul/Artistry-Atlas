'use client'
import PageWrapper from '@/app/page-wrapper'
import LinktreeSection from '@/app/sections/linktree-section'
import FooterComp from '@/components/FooterComp'
import React from 'react'

const LinkTree = () => {
  return (
    <>
    <PageWrapper>
    <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
      <div className='flex flex-col mx-auto'>
        <div className='max-w-[540px] h-full pb-6'>
          <LinktreeSection />
        </div>
        <footer className='py-4 lg:max-w-[540px] max-w-full mx-auto w-full'> 
          <FooterComp/>
        </footer>
      </div>
    </div>
    </PageWrapper>
    </>
  )
}

export default LinkTree
