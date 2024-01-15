"use client"

import ExpertDashboardNavBar from '@/app/(components)/expertDashboardComps/ExpertDashboardNavBar';

export default function OrderDetails({
    searchParams
}) {
    const data = searchParams;
  return (
    <>
        <ExpertDashboardNavBar/>
        <div className='orderDetails'>
            <h1>{data.name}</h1>
            <h2>{data.assignmentCategory}</h2>
            <h2>{data.date}</h2>
            <h2>{data.time}</h2>
            <h2>{data.progLang}</h2>
            {/* <h1>{data.name}</h1> */}
            {/* <h1>{data.name}</h1> */}

        </div>
    </>
  )
}
