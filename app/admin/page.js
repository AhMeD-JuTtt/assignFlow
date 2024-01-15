"use client"

import { useSession } from "next-auth/react"
import AdminDashboardNavBar from "../(components)/adminDashboardComps/AdminDashboardNavBar"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import OrderCardAdmin from "../(components)/adminDashboardComps/orderCardAdmin"

export default function AdminDashboard() {
  
  const {data: session, status} = useSession()
  const id = session?.user.id
  const role = session?.user.role
  const router = useRouter()
  const [active, setActive] = useState("1")
  const [orders, setOrders] = useState([])
  const [users, setUsers] = useState([])
  const [cancelledOrders, setCancelledOrders] = useState([])
  const [finishedOrders, setFinishedOrders] = useState([])
  const [pendingOrders, setPendingOrders] = useState([])
  const [expAssignedOrders, setExpAssigned] = useState([])
  const [loader, setLoader] = useState(true)

  const chkCancelled = (order) => {
    if (order.status === "cancelled") {
      return order
    } else{
      return
    }
  }
 
  const chkFinished = (order) => {
    if (order.status === "finished") {
      return order
    } else{
      return
    }
  }

  const chkPending = (order) => {
    if (order.status === "pending") {
      return order
    } else{
      return
    }
  }
 
  const chkAssigned = (order) => {
    if (order.status === "Expert Assigned") {
      return order
    } else{
      return
    }
  }

  const getOrders = async () => {
    try {
    //   let data = await fetch(`/api/createOrder?userId=${id}`)
      let data = await fetch("/api/allOrders")
      data = await data.json()
      const ordersData = [...data.orders].reverse()
      const usersData = [...data.users]
    //   console.log(usersData);
      setCancelledOrders(ordersData.filter(chkCancelled))
      setFinishedOrders(ordersData.filter(chkFinished))
      setPendingOrders(ordersData.filter(chkPending))
      setExpAssigned(ordersData.filter(chkAssigned))
      setOrders(ordersData)
      setUsers(usersData)
      setLoader(true)
    } catch (error) {
      setOrders([])
      setLoader(true)
      console.log("error", error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getOrders()
    }, 1000);

    return () => clearTimeout(timeout);
  }, [session])
  

  const clickHandler = () => {
    router.push("/dashboard/newOrder")
  }

  return (
    <>
        <AdminDashboardNavBar/>
        {role !== "admin" ? <h1 className="orderHistoryContainer orderHistoryBodyEmpty">You are not Authorized to view this page.</h1> : 
        <>
          <div className="orderHistoryContainer">
          <div className="orderHistoryTabsContainer">
            <div className={active === "1"? "orderHistoryTab orderHistoryTabActive" : "orderHistoryTab"} onClick={() => setActive("1")}>All {`(${orders.length})`}</div>
            <div className={active === "2"? "orderHistoryTab orderHistoryTabActive" : "orderHistoryTab"} onClick={() => setActive("2")}>Experts Assigned {`(${expAssignedOrders.length})`}</div>
            <div className={active === "3"? "orderHistoryTab orderHistoryTabActive" : "orderHistoryTab"} onClick={() => setActive("3")}>Pending {`(${pendingOrders.length})`}</div>
            <div className={active === "4"? "orderHistoryTab orderHistoryTabActive" : "orderHistoryTab"} onClick={() => setActive("4")}>Finished {`(${finishedOrders.length})`}</div>
            <div className={active === "5"? "orderHistoryTab orderHistoryTabActive" : "orderHistoryTab"} onClick={() => setActive("5")}>Canceled {`(${cancelledOrders.length})`}</div>
          </div>
          {active === "1" &&
            <div className="orderHistoryBodyEmpty">
              {orders && orders.length > 0 ? orders.map((order)=>{
                return (<div className={order.assignmentCategory === "Academic Writing" && "card cardAcad" || 
                                      order.assignmentCategory === "Programming Assignment" && "card cardProg" ||
                                      order.assignmentCategory === "Calculations Assignment" && "card cardCalc"
                                      } key={order._id}>
                  <OrderCardAdmin order={order} user={users.find((user)=>{
                      if (user._id === order.userId) {
                          return user
                      } else {
                          return null
                      }
                      })}/>
                </div>)
              }) : 
              <>
                {loader ? <div className="custom-loader"></div> : 
                <>
                  <img src="./empty_logo.svg" width={"20%"}/>
                  <h2>THERE ARE NO ORDERS YET.</h2>
                  <div className="btn btn-primary btn-lg" onClick={clickHandler}>New Order</div>
                </>
                }
              </>}
            </div>
          }
          
          {active === "2" &&
            <div className="orderHistoryBodyEmpty">
              {expAssignedOrders && expAssignedOrders.length > 0 ? expAssignedOrders.map((order)=>{
                return (<div className={order.assignmentCategory === "Academic Writing" && "card cardAcad" || 
                                        order.assignmentCategory === "Programming Assignment" && "card cardProg" ||
                                        order.assignmentCategory === "Calculations Assignment" && "card cardCalc"
                                        } key={order._id}>
                  <OrderCardAdmin order={order} user={users.find((user)=>{
                      if (user._id === order.userId) {
                          return user
                      } else {
                          return null
                      }
                      })}/>
                </div>)
              }) : 
              <>
                {loader ? <div className="custom-loader"></div> : 
                <>
                  <img src="./empty_logo.svg" width={"20%"}/>
                  <h2>THERE ARE NO ORDERS YET.</h2>
                  <div className="btn btn-primary btn-lg" onClick={clickHandler}>New Order</div>
                </>
                }
              </>}
            </div>
          }
          
          {active === "3" &&
            <div className="orderHistoryBodyEmpty">
              {pendingOrders && pendingOrders.length > 0 ? pendingOrders.map((order)=>{
                return (<div className={order.assignmentCategory === "Academic Writing" && "card cardAcad" || 
                                        order.assignmentCategory === "Programming Assignment" && "card cardProg" ||
                                        order.assignmentCategory === "Calculations Assignment" && "card cardCalc"
                                        } key={order._id}>
                  <OrderCardAdmin order={order} user={users.find((user)=>{
                      if (user._id === order.userId) {
                          return user
                      } else {
                          return null
                      }
                      })}/>
                </div>)
              }) : 
              <>
                {loader ? <div className="custom-loader"></div> : 
                <>
                  <img src="./empty_logo.svg" width={"20%"}/>
                  <h2>THERE ARE NO ORDERS YET.</h2>
                  <div className="btn btn-primary btn-lg" onClick={clickHandler}>New Order</div>
                </>
                }
              </>}
            </div>
          }

          {active === "4" &&
            <div className="orderHistoryBodyEmpty">
              {finishedOrders && finishedOrders.length > 0 ? finishedOrders.map((order)=>{
                return (<div className={order.assignmentCategory === "Academic Writing" && "card cardAcad" || 
                                        order.assignmentCategory === "Programming Assignment" && "card cardProg" ||
                                        order.assignmentCategory === "Calculations Assignment" && "card cardCalc"
                                        } key={order._id}>
                  <OrderCardAdmin order={order} user={users.find((user)=>{
                      if (user._id === order.userId) {
                          return user
                      } else {
                          return null
                      }
                      })}/>
                </div>)
              }) : 
              <>
                {loader ? <div className="custom-loader"></div> : 
                <>
                  <img src="./empty_logo.svg" width={"20%"}/>
                  <h2>THERE ARE NO ORDERS YET.</h2>
                  <div className="btn btn-primary btn-lg" onClick={clickHandler}>New Order</div>
                </>
                }
              </>}
            </div>
          }
          
          {active === "5" &&
            <div className="orderHistoryBodyEmpty">
              {cancelledOrders && cancelledOrders.length > 0 ? cancelledOrders.map((order)=>{
                return (<div className={order.assignmentCategory === "Academic Writing" && "card cardAcad" || 
                                        order.assignmentCategory === "Programming Assignment" && "card cardProg" ||
                                        order.assignmentCategory === "Calculations Assignment" && "card cardCalc"
                                        } key={order._id}>
                  <OrderCardAdmin order={order} user={users.find((user)=>{
                      if (user._id === order.userId) {
                          return user
                      } else {
                          return null
                      }
                      })}/>
                </div>)
              }) : 
              <>
                {loader ? <div className="custom-loader"></div> : 
                <>
                  <img src="./empty_logo.svg" width={"20%"}/>
                  <h2>THERE ARE NO ORDERS YET.</h2>
                  <div className="btn btn-primary btn-lg" onClick={clickHandler}>New Order</div>
                </>
                }
              </>}
            </div>
          }

        </div>
        
        </>
        }
    </>
  )
}
