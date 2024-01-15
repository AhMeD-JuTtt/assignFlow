"use client"

import ThankYou from "@/app/(components)/dashboardComps/ThankYou"
import TaskSizeProg from "@/app/(components)/taskSizeProg"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

let id
let session

export default function ProgrammingAssignment(props) {
    const router = useRouter()
    const {data: session, status} = useSession()
    id = session?.user.id
    const [progLang, setProgLang] = useState("JavaScript")
    const [field, setField] = useState("Web programming")
    const [instructions, setInstructions] = useState("")
    const [file, setFile] = useState()
    const [taskSize, setTaskSize] = useState("Small")
    const [active, setActive] = useState(props.active)

    const submitHandler = async () => {
        const order = {...props.order, progLang, field, instructions, file, taskSize, userId:id}
        try {
            if (session) {
                await fetch("/api/createOrder", {
                    method: "POST", 
                    headers: {"Content-Type": "application/json"}, 
                    body:JSON.stringify({
                        userId: order.userId,
                        expertId: order.expertId,
                        assignmentCategory:order.category,
                        status:order.status,
                        progLang:order.progLang,
                        field:order.field,
                        instructions:order.instructions,
                        taskSize:order.taskSize,
                    })})
                setActive(active + 1)
            } else {
                router.push("/authorization")
            }
            
        } catch (error) {
            return
        }
      };

  return (
    <>
        <div className="createOrderContainer">
                {active === 2 && 
                <>
                    <div className="desSection">
                        <p>Step {active}/{props.steps}</p>
                        <h1>When is your paper due?</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Pick the date when you need your assignment ready
                        </div>
                        <div>Date Picker...</div>

                        <div className="nextBtn" onClick={()=>{setActive(active + 1)}}>
                            Next Step {">"}
                        </div>
                        <div className="backBtn" onClick={()=>{props.setMainActive(1)}}>Back {"<"}</div>
                    </div>
                </>
                }
                {active === 3 && 
                <>
                    <div className="desSection">
                        <p>Step {active}/{props.steps}</p>
                        <h1>Basic Assignment details</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Assignment details
                        </div>
                        <div className="assigmentDetailsOptions">
                            <label>Programming language</label>
                            <select className="form-select form-select-lg mb-3" onChange={(e)=>{setProgLang(e.target.value)}} value={progLang}>
                                <option value="Java">Java</option>
                                <option value="JavaScript">JavaScript</option>
                                <option value="Python">Python</option>
                                <option value="C++">C++</option>
                            </select>
                            <label>Category</label>
                            <select className="form-select form-select-lg mb-3" onChange={(e)=>{setField(e.target.value)}} value={field}>
                                <option value="Web programming">Web programming</option>
                                <option value="Mobile application programming">Mobile application programming</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="AI">AI</option>
                            </select>
                            <label>Instructions</label>
                            <div className="form-floating assigmentDetailsOptionsInst">
                                <textarea className="form-control" style={{height:"20vh"}} value={instructions} onChange={(e)=>{setInstructions(e.target.value)}}></textarea>
                            </div>
                            <input class="form-control form-control-lg" type="file" onChange={(e)=>{setFile(e.target.files)}}/>
                        </div>

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
                        <p>Step {active}/{props.steps}</p>
                        <h1>Task Size</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Task size
                        </div>

                        <TaskSizeProg taskSize={taskSize} setTaskSize={setTaskSize}/>

                        {/* <div className="nextBtn" onClick={()=>{setActive(active + 1)}}> */}
                        <div className="nextBtn" onClick={submitHandler}>
                            Summary {">"}
                        </div>
                        <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                    </div>
                </>
                }
            </div>
            {active === 5 && <ThankYou/>}
    </>
  )
}
