import React, { useState } from 'react'

export default function CancelBtnExpert(props) {

  // const [disabled, setDisabled] = useState(false)

  return (
    <button className='btnCancelCard' onClick={() => props.cancelHandler(props.id)} disabled={props.status === "cancelled" || props.status === "finished"}> Cancel
    </button>
  )
}
