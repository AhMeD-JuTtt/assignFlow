"use client"

import { useState } from "react"
import AcademicWriting from "./categories/AcademicWriting"
import ProgrammingAssignment from "./categories/ProgrammingAssignment"
import CalculationsAssignment from "./categories/CalculationsAssignment"

export default function CreateOrder() {

    const [mainActive, setMainActive] = useState(1)
    const [categActive, setCategActive] = useState("Academic Writing")
    const [order, setOrder] = useState({
        userId: "", 
        expertId: "empty", 
        category: categActive, 
        status: "pending",
    })

    const clickHandler = (categ) => {
        if (categ === "Academic Writing") {
            setCategActive(categ)
            setOrder({...order, category:categ})
        }
        if (categ === "Programming Assignment") {
            setCategActive(categ)
            setOrder({...order, category:categ})
        }
        if (categ === "Calculations Assignment") {
            setCategActive(categ)
            setOrder({...order, category:categ})
        }
    }

  return (
    <>
        {mainActive === 1 && 
            <>
                <div className="createOrderContainer">
                    <div className="desSection">
                        <p>Step {mainActive}/{categActive === "Academic Writing" && "6" ||
                                        categActive === "Programming Assignment" && "4" ||
                                        categActive === "Calculations Assignment" && "4"
                        }</p>
                        <h1>What do you need help with?</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Choose the task you want to delegate
                        </div>
                        <div className="optionData">
                            <div className={categActive === "Academic Writing" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{clickHandler("Academic Writing")}}>
                                <h2>Academic Writing</h2>
                                <p>E.g. essay, research paper, coursework in any subject</p>
                            </div>
                            <div className={categActive === "Programming Assignment" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{clickHandler("Programming Assignment")}}>
                                <h2>Programming Assignment</h2>
                                <p>E.g. programming, database optimisation, modeling, design</p>
                            </div>
                            <div className={categActive === "Calculations Assignment" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{clickHandler("Calculations Assignment")}}>
                                <h2>Calculations Assignment</h2>
                                <p>E.g. math problems, engineering computations, finance balance sheets</p>
                            </div>
                        </div>
                        <div className="nextBtn" onClick={()=>{setMainActive(2)}}>
                            Next Step {">"}
                        </div>
                    </div>
                </div>
            </>
        }

        {categActive === "Academic Writing" && mainActive === 2 && 
            <>
                <AcademicWriting active={mainActive} steps={6} setMainActive={setMainActive} order={order}/>
            </>
        }
        {categActive === "Programming Assignment" && mainActive === 2 && 
            <>
                <ProgrammingAssignment active={mainActive} steps={4} setMainActive={setMainActive} order={order}/>
            </>
        }

        {categActive === "Calculations Assignment" && mainActive === 2 && 
            <>
                <CalculationsAssignment active={mainActive} steps={4} setMainActive={setMainActive} order={order}/>
            </>
        }
        
    </>
  )
}
