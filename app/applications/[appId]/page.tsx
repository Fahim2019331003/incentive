import { useRouter } from 'next/navigation';
import React from 'react'

const applicationDetails = ({params}) => {
    
  return (
    <main className="flex flex-col">
      <div className="m-16">
        <div className="mt-20 min-h-screen">
        <div>applicationDetails of {params.appId}</div>
        </div>
      </div>
    </main>
    
  )
}

export default applicationDetails