"use client"

import { Button } from '@/components/ui/button'
import { Video } from 'lucide-react'
import React, { useState } from 'react'

const LatestInterviewsList = () => {
    const [interviewList, setInterviewList] = useState([])
    return (
        <div className='my-5'>
            <h2 className='font-bold text-2xl'>Previously Scheduled Interviews</h2>

            {interviewList?.length === 0 &&
                <div className='p-5 flex flex-col gap-3 items-center bg-gray-100 mt-5'>
                    <Video className='h-10 w-10 text-primary' />
                    <h2 className=''>No Interviews Scheduled</h2>
                    <Button>+ Create New Interview</Button>
                </div>
            }
        </div>
    )
}

export default LatestInterviewsList
