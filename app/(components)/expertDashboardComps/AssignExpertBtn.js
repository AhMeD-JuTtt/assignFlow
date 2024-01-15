"use client"

import React, { useState } from 'react'

export default function AssignExpertBtn( props ) {

    const assignHandler = async () => {
        try {
            let resp = await fetch("/api/assignExpert", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body:JSON.stringify({
                    expertId: props.expert.expertId,
                    orderId: props.expert.orderId,
                })})
            resp = await resp.json()
            props.setError(resp.message)
        } catch (error) {
            return
        }
    }

  return (
    <button className='btnDownloadCard' disabled={props.disabled || props.expert.expertId === "empty" && true} onClick={assignHandler}> Assign Expert
    </button>
  )
}
