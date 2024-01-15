"use client"
import { useEffect, useState } from "react";
import OrderNowBtn from "./OrderNowBtn";
import { usePathname } from "next/navigation";
import Link from "next/link";

// const isTokenAvailable = t

export default function NavBar() {
    const [navBar, setNavBar] = useState(false)
    // const [token, setToken] = useState("")
    const pathname = usePathname()

    const changeBG = () => {
        if (window.scrollY > 50) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBG);
        // const LoginToken = document.cookie
        // setToken(LoginToken)
        // const token = getCookie("Login Token")?.value || ""
        // console.log("Token: ", token)
    
        return () => {
          window.removeEventListener('scroll', changeBG);
        };
      }, []);
    
    return (
        <div className="header">
            <div className={!navBar? "navBarContainer" : "navBarContainer navBarContainerActive"}>
                <div className={!navBar ? "navBarContainerMain" : "navBarContainerMain navBarContainerMainScrolled"}>
                    {!navBar? 
                    <Link href={"/"}>
                        <img src="/logo.svg" className="logo"/>
                    </Link>
                    :
                    <Link href={"/"}>
                        <img src="/logo2.svg" className="logo"/>
                    </Link>
                    }
                    <div className="navLinks">
                        <ul>
                            {/* <li><Link className={pathname === "/howWeWork" ? "navLinkTag navLinkTagActive" : "navLinkTag"} href={"/howWeWork"}>How We Work</Link></li> */}
                            <li><Link className={`${pathname === "/howWeWork" ? "navLinkTag navLinkTagActive" : "navLinkTag"} ${navBar && "navLinkTagScrolled"}`} href={"/howWeWork"}>How We Work</Link></li>
                            <li><Link className={`${pathname === "/samples" ? "navLinkTag navLinkTagActive" : "navLinkTag"} ${navBar && "navLinkTagScrolled"}`} href={"/samples"}>Samples</Link></li>
                            <li><Link className={`${pathname === "/reviews" ? "navLinkTag navLinkTagActive" : "navLinkTag"} ${navBar && "navLinkTagScrolled"}`} href={"/reviews"}>Reviews</Link></li>
                            <li><Link className={`${pathname === "/services" ? "navLinkTag navLinkTagActive" : "navLinkTag"} ${navBar && "navLinkTagScrolled"}`} href={"/services"}>Services</Link></li>
                            <li><Link className={`${pathname === "/contactUs" ? "navLinkTag navLinkTagActive" : "navLinkTag"} ${navBar && "navLinkTagScrolled"}`} href={"/contactUs"}>Contact Us</Link></li>
                            <li style={{display:"flex", justifyContent:"space-between", width:"19%", alignItems:"center"}}>
                                <img src="/ico_manage-orders.svg"/> 
                                <Link className={navBar ? "navLinkTag navLinkTagScrolled" : "navLinkTag"} href={"/dashboard"}>
                                    {/* {!token? "Manage Orders" : "Log In/Sign Up"} */}
                                    Manage Orders
                                </Link>
                            </li>
                            <li><OrderNowBtn/></li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  )
}
