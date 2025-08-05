import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const CandidateFeedbackDialog = ({ candidate }) => {

    const feedback = candidate?.feedback?.feedback
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}>View Report</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogDescription asChild>
                        <div className='mt-5'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-5'>
                                    <h2 className='rounded-full p-3 font-bold text-white px-4.5 bg-blue-600'>{candidate?.userName[0]}</h2>

                                    <div>
                                        <h2 className='font-bold'>{candidate?.userName}</h2>
                                        <h2 className='text-gray-500 text-sm'>{candidate?.userEmail}</h2>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <h2 className='text-blue-600 text-2xl font-bold'>6/10</h2>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h2 className='font-bold'>Skills Assessment</h2>

                                <div className='mt-3 grid grid-cols-2 gap-10'>
                                    <div>
                                        <h2 className='flex justify-between'>Technical Skills <span>{feedback?.rating?.technicalSkills}/10</span></h2>

                                        <Progress className='mt-1' value={feedback?.rating?.technicalSkills * 10} />
                                    </div>

                                    <div>
                                        <h2 className='flex justify-between'>Communication  <span>{feedback?.rating?.communication}/10</span></h2>

                                        <Progress className='mt-1' value={feedback?.rating?.communication * 10} />
                                    </div>

                                    <div>
                                        <h2 className='flex justify-between'>Problem Solving  <span>{feedback?.rating?.problemSolving}/10</span></h2>

                                        <Progress className='mt-1' value={feedback?.rating?.problemSolving * 10} />
                                    </div>

                                    <div>
                                        <h2 className='flex justify-between'>Experience <span>{feedback?.rating?.experience}/10</span></h2>

                                        <Progress className='mt-1' value={feedback?.rating?.experience * 10} />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <h2 className='font-bold'>
                                    Performance Summary
                                </h2>

                                <div className='p-5 bg-gray-100 rounded-md my-3'>
                                    {feedback?.summary?.map((summary, index) => (
                                        <p key={index}>{summary}</p>
                                    ))}
                                </div>
                            </div>

                            <div className={`mt-5 p-5 flex items-center justify-between rounded-md ${feedback?.Recommendation == "No" ? "bg-red-200" : "bg-green-200"}`}>
                                <div>
                                    <h2 className={`font-bold ${feedback?.Recommendation == "No" ? "text-red-700" : "text-green-700"}`}>Recommendation Message:</h2>
                                    <p className={`${feedback?.Recommendation == "No" ? "text-red-500" : "text-green-500"}`}>{feedback?.RecommendationMsg}</p>
                                </div>

                                <Button className={`text-white ${feedback?.Recommendation == "No" ? "bg-red-600" : "bg-green-600"}`}>Inform Candidate</Button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CandidateFeedbackDialog
