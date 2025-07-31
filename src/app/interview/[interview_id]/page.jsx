"use client"

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Clock, Info, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import { supabase } from '../../../../services/supabaseClient'
import { toast } from 'sonner'
import { InterviewDataContext } from '../../../../context/InterviewDataContext'
import { useRouter } from 'next/navigation'

const Interview = () => {
    const router = useRouter();
    const { interview_id } = useParams();
    // console.log(interview_id);

    const [interviewData, setInterviewData] = useState();
    const [userName, setUserName] = useState();
    const [loading, setLoading] = useState(false);
    const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);


    useEffect(() => {
        interview_id && GetInterviewDetails();
    }, [interview_id])

    const GetInterviewDetails = async () => {
        try {
            setLoading(true);
            let { data: Interviews, error } = await supabase.from('Interviews')
                .select('jobPosition ,jobDescription, duration, type')
                .eq('interview_id', interview_id)

            setInterviewData(Interviews[0]);
            setLoading(false);

            if (Interviews?.length == 0) {
                toast.error('No Interviews Found');
                return
            }
            // console.log(Interviews[0]);
        } catch (error) {
            setLoading(false);
            toast.error('Server Error. Try Again.');
        }
    }

    const onJoinInterview = async () => {
        setLoading(true);
        let { data: Interviews, error } = await supabase.from('Interviews')
            .select("*")
            .eq('interview_id', interview_id)

        console.log(Interviews[0]);
        setInterviewInfo({
            userName: userName,
            interviewData: Interviews[0]
        });
        router.push(`/interview/${interview_id}/start`);
        setLoading(false);
    }

    return (
        <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-7'>
            <div className='flex flex-col items-center justify-center rounded-lg bg-gray-100 p-7 lg:px-32 xl:px-52  mb-20'>
                <Image src="/logo.png" width={200} height={100} alt="logo" className='w-[140px]' />

                <h2 className='mt-3'>Ai-Generated Interviews</h2>

                <Image src="/interview.jpg" width={500} height={500} alt="interview" className='w-[280px] my-6' />

                <h2 className='font-bold text-xl mt-1'>
                    {interviewData?.jobPosition}
                </h2>

                <h2 className='flex gap-2 items-center text-gray-500 mt-3
                '><Clock className='h-4 w-4' />{interviewData?.duration}</h2>

                <div className='w-full'>
                    <h2 className=''>Enter full name</h2>
                    <Input placeholder="e.g. Jhon Smith" onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className='p-3 bg-blue-100 flex gap-4 rounded-lg mt-5'>
                    <Info className='' />
                    <div>
                        <h2>Before you start</h2>

                        <ul className='list-disc pl-3'>
                            <li className='text-sm'>Test your camera and microphone</li>
                            <li className='text-sm'>Check your internet connection</li>
                            <li className='text-sm'>Find a quiet place</li>
                        </ul>
                    </div>
                </div>

                <Button className="mt-5"
                    disabled={loading || !userName}
                    onClick={() => onJoinInterview()}
                ><Video /> {loading ? 'Joining...' : 'Start'} Join Interview</Button>
            </div>
        </div>
    )
}

export default Interview
