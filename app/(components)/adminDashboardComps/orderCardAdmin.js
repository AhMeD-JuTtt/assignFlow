import React, { useState } from 'react'
import CancelBtnAdmin from './CancelBtnAdmin'
import DownloadBtnAdmin from './DownloadBtnAdmin'
import moment from 'moment-timezone';
import Link from 'next/link';

export default function OrderCardAdmin(props) {

    const dueDate = "15-Jan-24"
    
    const dateString = props.order.createdAt;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateObject = moment.tz(dateString, timeZone);
    
    const date = dateObject.format('DD-MMM-YYYY');
    const time = dateObject.format('h:mm A');
    
    const [orderDetails, setOrderDetails] = useState({...props.order.orderDetails.details})
    const [order, setOrder] = useState({...props.order, date, time})
    const [user, setUser] = useState({email:props.user.email, name:props.user.name})
    
    const color = order.status === "pending" && "orange" || order.status === "cancelled" && "red" || order.status === "finished" && "green" || order.status === "Expert Assigned" && "yellow"
    
    const dateString2 = moment(dateString)
    const currentDate = moment();

    const futureDate = moment(dueDate, 'DD-MMM-YY');

    const duration = moment.duration(futureDate.diff(currentDate));

    const remainingDays = Math.floor(duration.asDays());
    const remainingHours = duration.hours();
    const remainingMinutes = duration.minutes();

    let remainingDuration = '';

    if (remainingDays > 1) {
        remainingDuration = `${remainingDays} days remaining`;
    } else if (remainingDays === 1) {
        remainingDuration = `1 day and ${remainingHours} hours`;
    } else if (remainingHours > 0) {
        remainingDuration = `${remainingHours} hours and ${remainingMinutes} minutes`;
    } else {
        remainingDuration = `${remainingMinutes} minutes`;
    }

    const cancelHandler = async (id) => {
        try {
            await fetch("/api/createOrder", {
                method: "PUT", 
                headers: {"Content-Type": "application/json"}, 
                body:JSON.stringify({
                    _id: id,
                    status:"cancelled",
                })})
        } catch (error) {
            return
        }
    }

  return (
    <>
        <Link href={{pathname: "/admin/orderDetails", query: {...order, ...user, ...orderDetails}}} className='linkTag'>
            <div className="card1">
                <div className='orderHeading'>
                    <h1>{order.assignmentCategory}</h1>
                    <h2 style={{color:color}}>{order.status === "pending" && "Pending..." || order.status === "cancelled" && "Cancelled" || order.status === "finished" && "Finished" || order.status === "Expert Assigned" && "Expert Assigned"}</h2>
                </div>
                <div className='orderDetails'>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"40vh", flexDirection:"column"}}>
                        Ordered By 
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"40vh", flexDirection:"column"}}>
                        Received on 
                        <p>{order.date} {order.time}</p>
                    </div>
                </div>
                <div className='orderDetails'>
                    <div>By {dueDate}</div>
                    <div>{remainingDuration}</div>
                </div>
            {/* </div>
            <div className="card2"> */}
            </div>
        </Link>
        <div className="card2">
            <DownloadBtnAdmin/>
        </div>
    </>
  )
}
