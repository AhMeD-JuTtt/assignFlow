import React from 'react'

export default function DownloadBtn(props) {
  return (
    <button className='btnDownloadCard' disabled={props.status !== "finished"}> Download Files
    </button>
  )
}
