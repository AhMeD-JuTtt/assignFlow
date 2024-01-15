"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DashboardNavBar() {

    const pathName = usePathname()
    const {data: session, status} = useSession()
    // console.log("session:", session)
    // const id = session?.user.id
    // const email = session?.user.email
    const fname = session?.user.name.split(" ")[0]

  return (
    <>
        <div className="dashboardHeader">
            <Link href={"/"}>
                <img src={pathName === "/dashboard/newOrder" || pathName === "/dashboard/profile" || pathName === "/dashboard/orderDetails" ? "../logo2.svg" : "./logo2.svg"}/>
            </Link>
            {session &&
                <div className="dashNavBarProfileSection">
                    <Link href={"/dashboard/profile"} className="profileImage">
                        <img src={pathName === "/dashboard/newOrder" || pathName === "/dashboard/profile" || pathName === "/dashboard/orderDetails"  ? "../profile_img.svg" : "./profile_img.svg"} width={"70%"}/>
                    </Link>
                    Welcome, {fname}
                    <div className="btn btn-danger" onClick={signOut}>Log Out</div>
                    {/* <img src="./dropdown.svg"/> */}
                </div>

            }
        </div>
        <div className="dashNavBar">
            <div className="dashNavBarItems">
                <div className={pathName === "/dashboard"? "dashNavBarItem dashNavBarItemActive" : "dashNavBarItem"}>
                    <Link href={"/dashboard"} className={pathName === "/dashboard"? "dashNavBarItem dashNavBarItemActive" : "dashNavBarItem"}>
                        <img src={pathName === "/dashboard/newOrder" || pathName === "/dashboard/profile" || pathName === "/dashboard/orderDetails"  ? "../order_logo.svg" : "./order_logo.svg"} width={"20vh"}/>
                        My Orders
                    </Link>
                </div>
                <div className={pathName === "/dashboard/newOrder"? "dashNavBarItem dashNavBarItemActive" : "dashNavBarItem"}>
                    <Link href={"/dashboard/newOrder"} className={pathName === "/dashboard/newOrder"? "dashNavBarItem dashNavBarItemActive" : "dashNavBarItem"}>
                        <img src={pathName === "/dashboard/newOrder" || pathName === "/dashboard/profile" || pathName === "/dashboard/orderDetails"  ? "../new_order_logo.svg" : "./new_order_logo.svg"} width={"20vh"}/>
                        New Order
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
