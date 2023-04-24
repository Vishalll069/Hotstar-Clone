import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const Privateroute = ({children}) => {
    let {isSubs} = useSelector((state)=>state.LoginReducer)
  if(isSubs){
    return children

  }
  return <Navigate to={'/subscribepage'}/>
}
