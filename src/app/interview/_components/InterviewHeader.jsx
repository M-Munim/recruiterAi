import Image from 'next/image'
import React from 'react'

const InterviewHeader = () => {
    return (
        <div className='p-4 shadow-sm'>
            <Image src="/logo.png" width={200} height={100} alt="logo" className='w-[140px]' />
        </div>
    )
}

export default InterviewHeader
