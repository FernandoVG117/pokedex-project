import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Pokeheader from '../components/shared/Pokeheader';

const ProtectedRoutes = () => {

  const trainer = useSelector((store) => store.trainer);
  
  if (trainer.length >= 3) {
    return (
      <>
        <Pokeheader />
        <Outlet />
      </>
    )
  } else {
    return (
      <>
        <Navigate to={'/'} />
      </>
    )
  }

}

export default ProtectedRoutes