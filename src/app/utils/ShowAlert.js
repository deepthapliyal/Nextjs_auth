import React from 'react'
import { useAlertContext } from './AlertContext'


const ShowAlert = () => {
  const { alert, hideAlert } = useAlertContext();

  if (!alert) {
    return null
  }
  return (
    <>
      <div className={`alert ${alert.type}`}>
        {alert.message}
      <button onClick={hideAlert}>cancel</button>
      </div>

    </>
  )
}

export default ShowAlert
