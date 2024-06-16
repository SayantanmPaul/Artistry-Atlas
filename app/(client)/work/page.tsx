import PageWrapper from '@/app/page-wrapper'
import WorkSection from '@/app/sections/work-section'
import StickyBar from '@/components/StickyBar'
import React from 'react'

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
