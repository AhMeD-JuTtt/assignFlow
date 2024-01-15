import React from 'react'

export default function DownloadBtnExpert(props) {
  console.log(props.status);
  return (
    <button className='btnDownloadCard' disabled={props.status === "finished" || props.status === "cancelled"}> Upload Files
    </button>
  )
}
