"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminDashboardNavBar() {

    const pathName = usePathname()
    const {data: session, status} = useSession()
    const fname = session?.user.name.split(" ")[0]

  return (
    <>
        <div className="dashboardHeader">
            <Link href={"/"}>
                <img src={pathName === "/admin" || pathName === "/admin/orderDetails" ? "../logo2.svg" : "./logo2.svg"}/>
            </Link>
            {session &&
                <div className="dashNavBarProfileSection">
                    <Link href={"/dashboard/profile"} className="profileImage">
                        <img src={pathName === "/admin" || pathName === "/admin/orderDetails" ? "../profile_img.svg" : "./profile_img.svg"} width={"70%"}/>
                    </Link>
                    Welcome Back! Sir
                    <div className="btn btn-danger" onClick={signOut}>Log Out</div>
                </div>
            }
        </div>
        <div className="dashNavBar">
            <div className="dashNavBarItems">
                <div className={pathName === "/admin"? "dashNavBarItem dashNavBarItemActive" : "dashNavBarItem"}>
                    <Link href={"/admin"} className={pathName === "/dashboard"? "dashNavBarItem dashNavBarItemActive" : "dashNavBarItem"}>
                        <img src={pathName === "/admin" || pathName === "/admin/orderDetails" ? "../order_logo.svg" : "./order_logo.svg"} width={"20vh"}/>
                        All Orders
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}
