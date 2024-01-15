"use client"

import { useState } from "react"

export default function TaskSizeProg(props) {

    const [active, setActive] = useState(props.taskSize)

    const clickHandler = (task) => {
        if (task === "Extra small") {
            setActive(task)
            props.setTaskSize(task)
        }
        if (task === "Small") {
            setActive(task)
            props.setTaskSize(task)
        }
        if (task === "Medium") {
            setActive(task)
            props.setTaskSize(task)
        }
        if (task === "Large") {
            setActive(task)
            props.setTaskSize(task)
        }
    }

  return (
    <table className="taskSizeContainer">
        <tr className="taskSizeTabs">
            <td className={active == "Extra small" ? "taskSizeTabItems taskSizeTabItemsActive" : "taskSizeTabItems"} onClick={()=>{clickHandler("Extra small")}}>Extra small</td>
            <td className={active == "Small" ? "taskSizeTabItems taskSizeTabItemsActive" : "taskSizeTabItems"} onClick={()=>{clickHandler("Small")}}>Small</td>
            <td className={active == "Medium" ? "taskSizeTabItems taskSizeTabItemsActive" : "taskSizeTabItems"} onClick={()=>{clickHandler("Medium")}}>Medium</td>
            <td className={active == "Large" ? "taskSizeTabItems taskSizeTabItemsActive" : "taskSizeTabItems"} onClick={()=>{clickHandler("Large")}}>Large</td>
        </tr>
        <tr className="taskSizeDes">

            {active === "Extra small" &&
                <td className="taskSizeDesCol">
                    <div className="taskSizeExample">
                        <h2>Example:</h2>
                        <ul>
                            <li>3 functions/outputs</li>
                            <li>class {"(OOP)"} with 1-3 simple methods</li>
                            <li>simple binary tree</li>
                            <li>set of short practice tasks</li>
                        </ul>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/code.svg"/>
                                Source code
                            </div>
                            <div className="delvsItem">
                                <img src="/sc.svg"/>
                                Screenshots of outputs
                            </div>
                            <div className="delvsItem">
                                <img src="/quesAns.svg"/>
                                Short answers to questions
                            </div>
                        </div>
                    </div>
                </td>
            }
            
            {active === "Small" &&
                <td className="taskSizeDesCol">
                    <div className="taskSizeExample">
                        <h2>Example:</h2>
                        <ul>
                            <li>small user interface</li>
                            <li>data visualization with 3-4 plots</li>
                            <li>simple decoder/encode</li>
                            <li>set of short practice tasks</li>
                        </ul>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                        <div className="delvsItem">
                                <img src="/code.svg"/>
                                Source code
                            </div>
                            <div className="delvsItem">
                                <img src="/sc.svg"/>
                                Screenshots of outputs
                            </div>
                            <div className="delvsItem">
                                <img src="/quesAns.svg"/>
                                Short answers to questions
                            </div>
                        </div>
                    </div>
                </td>
            }

            {active === "Medium" &&
                <td className="taskSizeDesCol">
                    <div className="taskSizeExample">
                        <h2>Example:</h2>
                        <ul>
                            <li>data visualization up to 7 plots</li>
                            <li>small lab report</li>
                            <li>compiler prototype for a simple language</li>
                            <li>database with up to 7 tables</li>
                            <li>simple console game</li>
                            <li>simple algorithm for 1 scenario</li>
                            <li>simple model converted from a drawing</li>
                            <li>simple data analysis project on 1 dataset</li>
                        </ul>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/code.svg"/>
                                Source code
                            </div>
                            <div className="delvsItem">
                                <img src="/sc.svg"/>
                                Screenshots of outputs
                            </div>
                            <div className="delvsItem">
                                <img src="/report.svg"/>
                                Brief report
                            </div>
                        </div>
                    </div>
                </td>
            }
           
            {active === "Large" &&
                <td className="taskSizeDesCol">
                    <div className="taskSizeExample">
                        <h2>Example:</h2>
                        <ul>
                            <li>extensive lab report</li>
                            <li>simple game with UI</li>
                            <li>web-based product with 1-2 scenarios</li>
                            <li>application with 1-2 scenarios</li>
                            <li>API</li>
                            <li>responsive website of 2-5 pages</li>
                            <li>model development from scratch</li>
                            <li>data analysis project for a business problem based on 2-3 datasets</li>
                        </ul>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/code.svg"/>
                                Source code
                            </div>
                            <div className="delvsItem">
                                <img src="/sc.svg"/>
                                Screenshots of outputs
                            </div>
                            <div className="delvsItem">
                                <img src="/docs.svg"/>
                                Documentation
                            </div>
                            <div className="delvsItem">
                                <img src="/report2.svg"/>
                                Detailed report
                            </div>
                            <div className="delvsItem">
                                <img src="/presentation.svg"/>
                                Presentation
                            </div>
                        </div>
                    </div>
                </td>
            }

        </tr>
    </table>
  )
}
