"use client"

import { useState } from "react"
import AcademicWriting from "./categories/AcademicWriting"


export default function CreateOrder3() {

    const [active, setActive] = useState(1)
    const [categActive, setCategActive] = useState("Academic writing")
    const [edu, setEdu] = useState("Undergraduate (1-2)")

  return (
    <>
        <div className="createOrderContainer">
            {active === 1 && 
            <>
                <div className="desSection">
                    <p>Step {active}/6</p>
                    <h1>What do you need help with?</h1>
                </div>
                <div className="optionsSection">
                    <div className="optionTitle">
                        Choose the task you want to delegate
                    </div>
                    <div className="optionData">
                        <div className={categActive === "Academic writing" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setCategActive("Academic writing")}}>
                            <h2>Academic writing</h2>
                            <p>E.g. essay, research paper, coursework in any subject</p>
                        </div>
                        <div className={categActive === "Programming Assignment" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setCategActive("Programming Assignment")}}>
                            <h2>Programming Assignment</h2>
                            <p>E.g. programming, database optimisation, modeling, design</p>
                        </div>
                        <div className={categActive === "Calculations Assignment" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setCategActive("Calculations Assignment")}}>
                            <h2>Calculations Assignment</h2>
                            <p>E.g. math problems, engineering computations, finance balance sheets</p>
                        </div>
                    </div>
                    <div className="nextBtn" onClick={()=>{setActive(active + 1)}}>
                        Next Step {">"}
                    </div>
                </div>
            </>
            }
            {active === 2 && 
            <>
                <div className="desSection">
                    <p>Step {active}/6</p>
                    <h1>Which year are you in?</h1>
                </div>
                <div className="optionsSection">
                    <div className="optionTitle">
                        Choose what best describes your education level
                    </div>
                    <div className="optionData">
                        <div className={edu === "High School" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("High School")}}>
                            <h2>Senior in high school</h2>
                        </div>
                        <div className={edu === "Undergraduate (1-2)" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Undergraduate (1-2)")}}>
                            <h2>Undergraduate student {"(years 1-2)"}</h2>
                        </div>
                        <div className={edu === "Undergraduate (3-4)" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Undergraduate (3-4)")}}>
                            <h2>Undergraduate student {"(years 3-4)"}</h2>
                        </div>
                        <div className={edu === "Graduate" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Graduate")}}>
                            <h2>Graduate student</h2>
                        </div>
                        <div className={edu === "PhD" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("PhD")}}>
                            <h2>PhD student</h2>
                        </div>
                    </div>
                    <div className="nextBtn" onClick={()=>{setActive(active + 1)}}>
                        Next Step {">"}
                    </div>
                    <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                </div>
            </>
            }
            {active === 3 && 
            <>
                <div className="desSection">
                    <p>Step {active}/6</p>
                    <h1>When is your paper due?</h1>
                </div>
                <div className="optionsSection">
                    <div className="optionTitle">
                        Pick the date when you need your assignment ready
                    </div>
                    <div>Date Picker...</div>

                    {/* <div className="optionTitle">
                        Pick the delivery option
                    </div>
                    <div className="optionData">
                        <div className={edu === "High School" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("High School")}}>
                            <h2>Senior in high school</h2>
                        </div>
                        <div className={edu === "Undergraduate (1-2)" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Undergraduate (1-2)")}}>
                            <h2>Undergraduate student {"(years 1-2)"}</h2>
                        </div>
                    </div> */}
                    <div className="nextBtn" onClick={()=>{setActive(active + 1)}}>
                        Next Step {">"}
                    </div>
                    <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                </div>
            </>
            }
            {active === 4 && 
            <>
                <div className="desSection">
                    <p>Step {active}/6</p>
                    <h1>Basic paper details</h1>
                </div>
                <div className="optionsSection">
                    <div className="optionTitle">
                        Provide general requirements
                    </div>
                    <div>Date Picker...</div>

                    <div className="optionTitle">
                        Pick the delivery option
                    </div>
                    <div className="optionData">
                        <div className={edu === "High School" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("High School")}}>
                            <h2>Senior in high school</h2>
                        </div>
                        <div className={edu === "Undergraduate (1-2)" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Undergraduate (1-2)")}}>
                            <h2>Undergraduate student {"(years 1-2)"}</h2>
                        </div>
                    </div>
                    <div className="nextBtn" onClick={()=>{setActive(active + 1)}}>
                        Next Step {">"}
                    </div>
                    <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                </div>
            </>
            }
            {active === 5 && 
            <>
                <div className="desSection">
                    <p>Step {active}/6</p>
                    <h1>Detailed requirements</h1>
                </div>
                <div className="optionsSection">
                    <div className="optionTitle">
                        Specify additional instructions
                    </div>
                    <div>Date Picker...</div>

                    <div className="optionTitle">
                        Pick the delivery option
                    </div>
                    <div className="optionData">
                        <div className={edu === "High School" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("High School")}}>
                            <h2>Senior in high school</h2>
                        </div>
                        <div className={edu === "Undergraduate (1-2)" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Undergraduate (1-2)")}}>
                            <h2>Undergraduate student {"(years 1-2)"}</h2>
                        </div>
                    </div>
                    <div className="nextBtn" onClick={()=>{setActive(active + 1)}}>
                        Next Step {">"}
                    </div>
                    <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                </div>
            </>
            }
            {active === 6 && 
            <>
                <div className="desSection">
                    <p>Step {active}/6</p>
                    <h1>What do you expect?</h1>
                </div>
                <div className="optionsSection">
                    <div className="optionTitle">
                        Choose the paper level you prefer
                    </div>
                    <div>Date Picker...</div>

                    <div className="optionTitle">
                        Pick the delivery option
                    </div>
                    <div className="optionData">
                        <div className={edu === "High School" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("High School")}}>
                            <h2>Senior in high school</h2>
                        </div>
                        <div className={edu === "Undergraduate (1-2)" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setEdu("Undergraduate (1-2)")}}>
                            <h2>Undergraduate student {"(years 1-2)"}</h2>
                        </div>
                    </div>
                    {/* <div className="nextBtn" onClick={()=>{setActive(active + 1)}}> */}
                    <div className="nextBtn">
                        Summary {">"}
                    </div>
                    <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                </div>
            </>
            }
        </div>
    </>
  )
}
