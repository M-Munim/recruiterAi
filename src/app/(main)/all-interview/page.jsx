"use client"

import React, { useEffect, useState } from 'react'
import InterviewCard from '../dashboard/_components/InterviewCard';
import { useUser } from '@/app/provider';
import { supabase } from '../../../../services/supabaseClient';
import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AllInterview = () => {

    const [interviewList, setInterviewList] = useState([])
    const { user } = useUser();

    useEffect(() => {
        user && getInterviewList()
    }, [user])

    const getInterviewList = async () => {
        let { data: Interviews, error } = await supabase
            .from('Interviews')
            .select('*')
            .eq('userEmail', user?.email)
            .order('id', { ascending: false })

        // console.log(Interviews);
        setInterviewList(Interviews)
    }
    return (
        <div className='my-5'>
            <h2 className='font-bold text-2xl'>Previously Scheduled Interviews</h2>

            {interviewList?.length === 0 &&
                <div className='p-5 flex flex-col gap-3 items-center bg-gray-100 mt-5'>
                    <Video className='h-10 w-10 text-primary' />
                    <h2 className=''>No Interviews Scheduled</h2>
                    <Button>+ Create New Interview</Button>
                </div>}

            {interviewList &&
                <div className='grid grid-cols-2 xl:grid-cols-3 gap-5'>
                    {interviewList.map((interview, index) => (
                        <InterviewCard interview={interview} key={index} />
                    ))}
                </div>

            }
        </div>
    )
}

export default AllInterview
