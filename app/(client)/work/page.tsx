import PageWrapper from '@/app/page-wrapper'
import WorkSection from '@/app/sections/work-section'
import StickyBar from '@/components/StickyBar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Experiences",
    description: "I have experience working with a few companies, small… big… but I loved what I able to contribute there and learn from there!"
}
const Work = () => {
    return (
        <>
            <div className='mx-auto max-w-full lg:max-w-[1018px] flex lg:flex-row flex-col lg:gap-16 gap-3 lg:pt-[64px] md:pt-[24px] pt-4 px-4 lg:px-0 md:px-4 lg:pl-0'>
                <div className="min-w-[196px]">
                    <StickyBar />
                </div>
                <PageWrapper>
                    <div>
                        <WorkSection />
                    </div>
                </PageWrapper>
            </div>
        </>
    )
}

export default Work
