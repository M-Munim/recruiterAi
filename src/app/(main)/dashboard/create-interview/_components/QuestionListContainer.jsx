import React from 'react'

const QuestionListContainer = ({ questionList }) => {
    return (
        <div>
            <h2 className='font-semibold text-lg mb-2'>Generated Interview Questions</h2>
            <div className='p-5 border border-gray-300 rounded-xl space-y-3'>
                {questionList.map((item, index) => (
                    <div key={index} className='p-3 border border-gray-200 rounded-xl bg-white shadow-sm'>
                        <h2 className='font-medium   mb-1'>{item.question}</h2>
                        <p className='text-sm text-gray-600'>Type: <span className='font-semibold'>{item.type}</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionListContainer
