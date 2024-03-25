import LinktreeSection from '@/app/sections/linktree-section'
import FooterComp from '@/components/FooterComp'
import React from 'react'

const LinkTree = () => {
  return (
    <>
    <div className='flex flex-col mx-auto'>
      <div className='max-w-[540px] h-full pb-6'>
        <LinktreeSection />
      </div>
      <footer className='py-4 lg:max-w-[540px] max-w-[340px] mx-auto w-full'> 
        <FooterComp/>
      </footer>
    </div>
    </>
  )
}

export default LinkTree
