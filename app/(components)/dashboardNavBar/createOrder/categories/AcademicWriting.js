"use client"

import ThankYou from "@/app/(components)/dashboardComps/ThankYou"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

let id

export default function AcademicWriting(props) {
    const router = useRouter()
    const {data: session, status} = useSession()
    id = session?.user.id
    const [paperType, setPaperType] = useState("Essay")
    const [discipline, setDiscipline] = useState("History")
    const [instructions, setInstructions] = useState("")
    const [file, setFile] = useState()
    const [active, setActive] = useState(props.active)
    const [edu, setEdu] = useState("Undergraduate (1-2)")
    const [paperLvl, setPaperLvl] = useState("BasicPaper")
    const [pages, setPages] = useState(2)

    const incHandler = () => {
        setPages(pages + 1)
    }
    
    const decHandler = () => {
        if (pages !== 1) {
            setPages(pages - 1)
        } else {
            return
        }
    }

    const submitHandler = async () => {
        const order = {...props.order, edu, paperType, discipline, pages, instructions, file, paperLvl, userId:id}
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
                        edu:order.edu,
                        paperType:order.paperType,
                        discipline:order.discipline,
                        pages:order.pages,
                        instructions:order.instructions,
                        paperLvl:order.paperLvl,
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
                        <div className="backBtn" onClick={()=>{props.setMainActive(1)}}>Back {"<"}</div>
                    </div>
                </>
                }
                
                {active === 3 && 
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
                        <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                    </div>
                </>
                }

                {active === 4 && 
                <>
                    <div className="desSection">
                        <p>Step {active}/{props.steps}</p>
                        <h1>Basic paper details</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Provide general requirements
                        </div>
                        <div className="assigmentDetailsOptions">
                            <label>Type of paper</label>
                            <select className="form-select form-select-lg mb-3" onChange={(e)=>{setPaperType(e.target.value)}} value={paperType}>
                                <option value="Creative Writing">Creative Writing</option>
                                <option value="Essay">Essay {"(any type)"}</option>
                                <option value="Speech">Speech</option>
                                <option value="Research proposal">Research proposal</option>
                            </select>
                            <label>Subject or discipline</label>
                            <select className="form-select form-select-lg mb-3" onChange={(e)=>{setDiscipline(e.target.value)}} value={discipline}>
                                <option value="Sociology">Sociology</option>
                                <option value="History">History</option>
                                <option value="Ethics">Ethics</option>
                                <option value="Tourism">Tourism</option>
                            </select>
                            <label for="floatingTextarea2">Pages</label>
                            <div className="pagesCounter">
                                <div className="pagesCounter form-control">
                                    <div className="counterBtn" onClick={decHandler}>-</div>
                                    <div className="counterNumber">{pages}</div>
                                    <div className="counterBtn" onClick={incHandler}>+</div>
                                </div>
                                <div className="wordsQuant">{275 * pages} words</div>
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
                        <p>Step {active}/{props.steps}</p>
                        <h1>Detailed requirements</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Specify additional instructions
                        </div>
                        <div className="assigmentDetailsOptions">
                            <label for="floatingTextarea2">Instructions</label>
                            <div className="form-floating assigmentDetailsOptionsInst">
                                <textarea className="form-control" style={{height:"20vh"}} value={instructions} onChange={(e)=>{setInstructions(e.target.value)}}></textarea>
                            </div>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>{setFile(e.target.files)}}/>
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
                        <p>Step {active}/{props.steps}</p>
                        <h1>What do you expect?</h1>
                    </div>
                    <div className="optionsSection">
                        <div className="optionTitle">
                            Choose the paper level you prefer
                        </div>

                        <div className={paperLvl === "BasicPaper" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setPaperLvl("BasicPaper")}}>
                            <h2>Basic paper</h2>
                            <p>For everday homework</p>
                        </div>
                        <div className={paperLvl === "AdvancedPaper" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setPaperLvl("AdvancedPaper")}}>
                            <h2>Advanced Paper</h2>
                            <p>For essential assignments</p>
                        </div>
                        <div className={paperLvl === "TopLevelPaper" ? "taskCategory taskCategoryActive" : "taskCategory"} onClick={()=>{setPaperLvl("TopLevelPaper")}}>
                            <h2>Top-level paper</h2>
                            <p>For tasks that matter the most</p>
                        </div>

                        {/* <div className="nextBtn" onClick={()=>{setActive(active + 1)}}> */}
                        <div className="nextBtn" onClick={submitHandler}>
                            Summary {">"}
                        </div>
                        <div className="backBtn" onClick={()=>{setActive(active - 1)}}>Back {"<"}</div>
                    </div>
                </>
                }
                
                {/* {active === 7 && 
                <> 
                    <div className="optionsSection">
                    </div>
                    <ThankYou/>
                </>
                } */}
            </div>
            {active === 7 && <ThankYou/>}
    </>
  )
}
