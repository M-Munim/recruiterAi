"use client"

import React from 'react'
import CreateOptions from './_components/CreateOptions'
import LatestInterviewsList from './_components/LatestInterviewsList'

const Dashboard = () => {
    return (
        <div>
            <h2 className='my-3 font-bold text-2xl'>Dashboard</h2>
            <CreateOptions />
            <LatestInterviewsList />
        </div>
    )
}

export default Dashboard
