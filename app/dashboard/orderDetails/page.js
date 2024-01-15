"use client"

// import AdminDashboardNavBar from '@/app/(components)/adminDashboardComps/AdminDashboardNavBar'
import DashboardNavBar from '@/app/(components)/dashboardNavBar/dashboardNavBar';

export default function OrderDetails({
    searchParams
}) {
    const data = searchParams;
  return (
    <>
        <DashboardNavBar/>
        <div className='orderDetails2'>
            {/* <h1>{data.name}</h1> */}
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
