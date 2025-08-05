import { Button } from '@/components/ui/button'
import moment from 'moment'
import React from 'react'
import CandidateFeedbackDialog from './CandidateFeedbackDialog'

const CandidateList = ({ candidateList }) => {
    return (
        <div className=''>
            <h2 className='font-bold my-5'>Candidates ({candidateList?.length})</h2>

            {candidateList?.map((candidate, index) => (
                <div className='p-5 flex gap-3 items-center justify-between bg-gray-100 rounded-lg' key={index}>

                    <div className='flex items-center gap-5'>
                        <h2 className='rounded-full p-3 font-bold text-white px-4.5 bg-blue-600'>{candidate?.userName[0]}</h2>

                        <div>
                            <h2 className='font-bold'>{candidate?.userName}</h2>
                            <h2 className='text-gray-500 text-sm'>Completed on: {moment(candidate?.created_at).format('DD-MM-YYYY')}</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-green-600'>6/10</h2>
                        <CandidateFeedbackDialog candidate={candidate} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CandidateList
