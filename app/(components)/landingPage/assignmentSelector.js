"use client"

import { useState } from "react"
import SubmitBtn from "./submitBtn/SubmitBtn"

export default function AssignmentSelector() {

    const [active, setActive] = useState("1")

    // const activeHandler = () 

  return (
    <div className="contentHeader shadow" style={{flexDirection:"column", alignItems:"flex-start", position:"relative", bottom:"70vh"}}>
        <div className="topBar">
            <div className={active === "1"? `topBarItem` : "topBarItem" + " " + "topBarItemInactive"} onClick={() => setActive("1")}>Academic Writing</div>
            <div className={active === "2"? `topBarItem` : "topBarItem" + " " + "topBarItemInactive"} onClick={() => setActive("2")}>Stem Assignment</div>
        </div>
        <div className="selectorBody">
            <div className="bodyForm">
                <h2>We write any type of assignment in any discipline</h2>
                {active === "1" ? 
                <>
                    <div className="selectorDropDown">
                        <label>Type of paper</label>
                        <select>
                            <option>Essay</option>
                            <option>Assignment</option>
                            <option>Case Study</option>
                            <option>HomeWork</option>
                        </select>
                    </div>
                    <div className="selectorDropDown">
                        <label>Academic level</label>
                        <select>
                            <option>High School</option>
                            <option>Undergraduate</option>
                            <option>Postgraduate</option>
                            <option>PhD</option>
                        </select>
                    </div>
                </>
                :
                <>
                    <div className="selectorDropDown">
                        <label>Type of service</label>
                        <select>
                            <option>Programming</option>
                            <option>Calculations</option>
                        </select>
                    </div>
                    <div className="selectorDropDown">
                        <label>Discipline</label>
                        <select>
                            <option>Web Programming</option>
                            <option>Mobile Application</option>
                        </select>
                    </div>
                </>
                }
                <SubmitBtn/>
            </div>
            <div className="bodyInstructions">
                <h2>How you can get you paper done super fast</h2>
                <ol type="1">
                    <li>Fill out the order form.</li>
                    <li>Pay for your assignment.</li>
                    <li>Stay in touch with your expert.</li>
                    <li>Download the finished work.</li>
                </ol>
            </div>
        </div>
    </div>
  )
}
