"use client"
import React from 'react'
import { useAlertContext } from '../utils/AlertContext';

const page = () => {
 const {showAlert} = useAlertContext();
 const handleClick = () =>{
    showAlert('success', 'Action Successful');
 }
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default page
