import React from 'react'
import { Navigate } from 'react-router-dom';

export const Privateroute = ({children}) => {
    let sub = true;
  if(sub){
    return children

  }
  return <Navigate to={'/subscribepage'}/>
}
