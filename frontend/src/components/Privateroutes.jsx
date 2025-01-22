import React from 'react'
import { Outlet } from 'react-router-dom';

const Privateroutes = () => {
    const token=sessionStorage.getItem('logintoken');
    let verifyUser=false;
    if(token){
        verifyUser=true;
    }
  return (
    verifyUser?<Outlet/>:<Navigate to={'/'}/>
  )
}

export default Privateroutes