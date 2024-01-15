"use client"

import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const initialValuesLogin = {
    email: "",
    password: "",
    isAdmin: true,
}

export default function Authorization() {

    const router = useRouter()

    const [valuesLogin, setValuesLogin] = useState(initialValuesLogin)
    const [errorLogin, setErrorLogin] = useState(false)

    const isDisabled = valuesLogin.email === "" || valuesLogin.password === "";

    const changeHandlerLogin = (e) => {
        setValuesLogin({...valuesLogin, [e.target.name]: e.target.value})
    }
    
    const submitHandlerLogin = async (e) => {
        e.preventDefault()
        const login = await signIn("credentials", {
            ...valuesLogin,
            redirect: false,
        })
        if (login.ok) {
            router.push("/admin")
        } else {
            setErrorLogin(true)
        }
    }
    
  return (
    <>
        <div className="authNavBar">
            <Link href={"/"}>
                <img src="/logo2.svg"/>
            </Link>
        </div>
        <div className="container">
            <div className="authContainer">
                <h1>SIGN IN ADMIN</h1>
                <div>
                    <div>
                        <div className="field">
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" onChange={changeHandlerLogin} value={valuesLogin.email}/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" onChange={changeHandlerLogin} value={valuesLogin.password}/>
                        </div>
                    </div>
                    {errorLogin && <div style={{color:"red", marginBottom:"2vh"}}>Incorrect Email or Password</div>}
                    <div className="controls">
                        <button className="btn btn-primary" onClick={submitHandlerLogin} disabled={isDisabled}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
