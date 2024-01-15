"use client"

import AdminDashboardNavBar from '@/app/(components)/adminDashboardComps/AdminDashboardNavBar'
import AssignExpertBtn from '@/app/(components)/expertDashboardComps/AssignExpertBtn';
import { useEffect, useState } from 'react';


export default function OrderDetails({
  searchParams
}) {
  
  const data = searchParams;
  
  const initialSelectValues = {
    expertId: "empty", 
    name: "",
  }

  const disabled = data.status === "cancelled" || data.status === "Expert Assigned" ? true : false

  const [fetchedExperts, setFetchedExperts] = useState([])
  const [expertAssigned, setExpertAssigned] = useState(initialSelectValues)
  const [error, setError] = useState("")

  const fetchExperts = async () => {
    let experts = await fetch("/api/allExperts")
    experts = await experts.json()
    setFetchedExperts(experts)
    if (data.expertId !== "empty") {
      let expertAlreadyAssigned = experts.find((expert)=> {
        return expert._id === data.expertId
      })
      setExpertAssigned({...expertAssigned, expertId: expertAlreadyAssigned._id, name: expertAlreadyAssigned.name})
    }
  }

    useEffect(() => {
      fetchExperts()
    }, [])
    
  return (
    <>
        <AdminDashboardNavBar/>
        <div className='orderDetails2'>
            <h1>{data.name}</h1>
            <h2>{data.assignmentCategory}</h2>
            <h2>{data.date}</h2>
            <h2>{data.time}</h2>
            <h2>{data.progLang}</h2>
        </div>
        <div className='orderDetails2'>
          <h1>Assign Expert</h1>
          <select className="form-select form-select-lg w-50 mx-2" 
          onChange={(e)=>{setExpertAssigned(JSON.parse(e.target.value))}} 
          value={expertAssigned.id === "empty" ? expertAssigned.name : JSON.stringify(expertAssigned)}
          disabled={disabled}
          >
            <option value={JSON.stringify(initialSelectValues)}>None</option>
            {fetchedExperts?.map((expert) => {
              return (
                <option key={expert._id} 
                value={JSON.stringify({ expertId: expert._id, name: expert.name })}
                >{expert.name}</option>
              )
            })}
          </select>
          <AssignExpertBtn expert={{...expertAssigned, orderId: data._id}} setError={setError} disabled={disabled}/>
        </div>
          {error === "Already Assigned to someone" && <h1 style={{color:"red"}}>{error}</h1>}
    </>
  )
}
