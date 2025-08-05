"use client"

import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import FormContainer from './_components/FormContainer';
import QuestionList from './_components/QuestionList';
import { toast } from 'sonner';
import InterviewLink from './_components/InterviewLink';

const CreateInterview = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState();
    const [interviewId, setInterviewId] = useState();
    const { user } = useUser();

    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }
    // console.log(formData);

    const onGoToNext = () => {
        if (user?.credits <= 0) {
            toast.error('You have no credits to create an interview. Please buy credits to continue.');
            return
        }
        if (!formData?.jobPosition || !formData?.jobDescription || !formData?.duration || !formData?.type) {
            toast.error('Please fill all fields to continue')
            return;
        }

        setStep(prev => prev + 1)
    }

    const onCreateLink = (interview_id) => {
        setInterviewId(interview_id)
        setStep(step + 1)
    }

    return (
        <div className='mt-8 px-8  lg:px-10 xl:px-40'>
            <div className='flex gap-5 items-center'>
                <ArrowLeft className='cursor-pointer' onClick={() => router.back()} />
                <h2 className='font-bold text-2xl'>Create New Interview</h2>
            </div>
            <Progress value={step * 33.33} className='my-5' />
            {step === 1 ? <FormContainer onHandleInputChange={onHandleInputChange}
                GoToNext={() => onGoToNext()}
            /> :
                step === 2 ? <QuestionList formData={formData} onCreateLink={(interview_id) => onCreateLink(interview_id)} /> : step === 3 ? <InterviewLink interviewId={interviewId} formData={formData} /> : null
            }
        </div>
    )
}

export default CreateInterview