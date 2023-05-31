import React, { useContext } from 'react'
import { PrimaryContext } from '../../components/contexts/PrimaryContext'
import { Navigate } from 'react-router-dom'


function LoggedInRoute({ Component, ...rest }) {

    const {user} = useContext(PrimaryContext)
  return (
    <>{user ? <Component/> : <Navigate to="/" />}</>
  )
}

export default LoggedInRoute