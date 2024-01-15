"use client"

import { useState } from "react"

export default function TaskSizeCalc(props) {

    const [active, setActive] = useState("Small")

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
                        <p>up to 3 short practice problems or theoretical questions</p>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/computations.svg"/>
                                Simple computations
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
                        <p>up to 7 short practice problems or theoretical questions</p>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/computations.svg"/>
                                Simple computations
                            </div>
                            <div className="delvsItem">
                                <img src="/charts.svg"/>
                                Simple charts and diagrams
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
                        <p>up to 15 practice problems or theoretical questions</p>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/computations2.svg"/>
                                Computations
                            </div>
                            <div className="delvsItem">
                                <img src="/charts2.svg"/>
                                Charts and diagrams
                            </div>
                            <div className="delvsItem">
                                <img src="/report.svg"/>
                                Detailed explanations
                            </div>
                        </div>
                    </div>
                </td>
            }
           
            {active === "Large" &&
                <td className="taskSizeDesCol">
                    <div className="taskSizeExample">
                        <h2>Example:</h2>
                        <p>moderately complex problem analysis project (using applied math methods)</p>
                    </div>
                    <div className="taskSizeDeliv">
                        <h2>Possible deliverables:</h2>
                        <div className="delvs">
                            <div className="delvsItem">
                                <img src="/computations.svg"/>
                                Computations
                            </div>
                            <div className="delvsItem">
                                <img src="/charts.svg"/>
                                Charts and diagrams
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
