import React, { useState } from 'react'
import Cookies from "js-cookies"
import { Outlet, Navigate } from "react-router-dom"
const PrivateRoute = () => {
    const [token, setToken] = useState(Cookies.getItem("token"))
    return (
        <>
            {token != null ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoute