import Link from "next/link";
import CreateOrder from "../(components)/dashboardNavBar/createOrder/CreateOrder";

export default function NewOrder() {
  return (
    <>
        <div className="dashboardHeader">
            <Link href={"/"}>
                <img src={"./logo2.svg"}/>
            </Link>
        </div>
        <CreateOrder/>
    </>
  )
}
