"use client"

import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const initialValuesLogin = {
    email: "",
    password: "",
}
const initialValuesSignup = {
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    confPassword: "",
    role: "user",
}

export default function Authorization() {

    const router = useRouter()

    const [active, setActive] = useState("1")
    const [valuesLogin, setValuesLogin] = useState(initialValuesLogin)
    const [valuesSignup, setValuesSignup] = useState(initialValuesSignup)
    const [errorLogin, setErrorLogin] = useState(false)
    const [errorSignUp, setErrorSignUp] = useState(false)
    const [errorPass, setErrorPass] = useState(false)

    const isDisabledLogin = valuesLogin.email === "" || valuesLogin.password === "";
    const isDisabledSignUp = valuesSignup.firstName === "" || valuesSignup.email === "" ||
                            valuesSignup.password === "" || valuesSignup.confPassword === ""

    const createAccount = async (values) => {
        if (valuesSignup.password === valuesSignup.confPassword) {
            setErrorPass(false)
            const valuesToLogin = {email: values.email, password: values.password}
            let resp = await fetch("/api/register", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body:JSON.stringify({
                    name:values.name,
                    email:values.email,
                    password:values.password,
                    role:initialValuesSignup.role,
                })})
            resp = resp.json()
            if (!resp.ok) {
                setErrorSignUp(true)
            } else {
                setErrorSignUp(false)
                signIn("credentials", {
                    ...valuesToLogin,
                    redirect: false,
                })
                if (login.ok) {
                    router.push("/dashboard")
                } else {
                    setErrorLogin(true)
                }
            }
        } else {
            setErrorPass(true)
        }
    }

    const changeHandlerLogin = (e) => {
        setValuesLogin({...valuesLogin, [e.target.name]: e.target.value})
    }
    
    const changeHandlerSignup = (e) => {
        setValuesSignup({...valuesSignup, [e.target.name]: e.target.value})
    }

    const submitHandlerLogin = async (e) => {
        e.preventDefault()
        const login = await signIn("credentials", {
            ...valuesLogin,
            redirect: false,
        })
        if (login.ok) {
            setErrorLogin(false)
            router.push("/dashboard")
        } else {
            setErrorLogin(true)
        }
    }
    
    const submitHandlerSignup = async (e) => {
        e.preventDefault()
        let valuesDB = {name: valuesSignup.firstName + ` ${valuesSignup.lastName}`, email: valuesSignup.email, password: valuesSignup.password}
        await createAccount(valuesDB)
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
                <h1>SIGN IN TO YOUR ACCOUNT</h1>
                <div className="authTabs">
                    <div className={active === "1" ? "authTabItem authTabItemActive" : "authTabItem"} onClick={() => {setActive("1")}}>Login</div>
                    <div className={active === "2" ? "authTabItem authTabItemActive" : "authTabItem"} onClick={() => {setActive("2")}}>Register</div>
                </div>
                {active === "1"? (
                <div style={{justifyContent:"center", alignItems:"center"}}>
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
                    <Link href={"/expertAuth"} className="linkTag" style={{color:"blue"}}>
                        Or are you an Expert?
                    </Link>
                    <div className="controls">
                        <button className="btn btn-outline-primary" onClick={submitHandlerLogin} disabled={isDisabledLogin}>Sign In</button>
                        {/* <button className="btn btn-outline-danger" onClick={submitHandlerLogout}>Sign Out</button> */}
                    </div>
                </div>
                ) : (
                <div>
                    <div>
                        <div className="field">
                            <label>First Name</label>
                            <input className="form-control" type="text" name="firstName" onChange={changeHandlerSignup} value={valuesSignup.firstName}/>
                        </div>
                        <div className="field">
                            <label>Last Name {"(optional)"}</label>
                            <input className="form-control" type="text" name="lastName" onChange={changeHandlerSignup} value={valuesSignup.lastName}/>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" onChange={changeHandlerSignup} value={valuesSignup.email}/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" onChange={changeHandlerSignup} value={valuesSignup.password}/>
                        </div>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input className="form-control" type="password" name="confPassword" onChange={changeHandlerSignup} value={valuesSignup.confPassword}/>
                        </div>
                    </div>
                    {errorPass && <div style={{color:"red", marginBottom:"2vh"}}>Passwords do not match!</div>}
                    {errorSignUp && <div style={{color:"red", marginBottom:"2vh"}}>Email already Exists!</div>}
                    <div className="controls">
                        <button className="btn btn-outline-primary" onClick={submitHandlerSignup} disabled={isDisabledSignUp}>Create an Account</button>
                    </div>
                </div>
                )
                }
            </div>
        </div>
    </>
  )
}
