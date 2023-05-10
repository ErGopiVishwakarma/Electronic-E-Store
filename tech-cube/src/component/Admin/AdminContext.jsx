import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminContext = ({children}) => {
    const auth = JSON.parse(localStorage.getItem('adminAuth')) || false
  return !auth? <Navigate to='/adminlogin' /> : children
}

export default AdminContext