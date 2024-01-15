"use client"

import { useRouter } from "next/navigation"

export default function OrderNowBtn() {
  const router = useRouter()

  const clickHandler = () =>{
    router.push("/newOrder")
  }

  return (
    <div className="orderNowBtn" onClick={clickHandler}>
        Order now
    </div>
  )
}
