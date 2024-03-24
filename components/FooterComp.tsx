import { Ibarra_Real_Nova } from 'next/font/google'
import React from 'react'

const Ibarra = Ibarra_Real_Nova({ weight: '500', style: 'normal', subsets: ['latin'] })

const FooterComp = () => {
  return (
    <div className={` text-[12px] dark:text-[#C4C4C4] text-[#494E52] text-center inline-flex flex-row gap-2 justify-center w-full`}>
        <p>Designed and Handcrafted by Sayantan Paul</p>
        <p>© 2024, All rights reserved.</p>
    </div>
  )
}

export default FooterComp
