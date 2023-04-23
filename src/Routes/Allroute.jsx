import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Videoplayer } from '../components/Home/Videoplayer'
import { Singlevideo } from '../components/Home/Singlevideo'
import SearchPage from '../components/Search/SearchPage'
import { Genre } from '../components/Genre'
import { Subscribe } from '../components/Subscription/Subscribe'
import { Privateroute } from './Privateroute'
import Login from '../components/Subscription/Login'
import Payment2 from '../components/Payment/Payment'
import Otp from '../components/Payment/Otp'

export const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/video' element={<Videoplayer/>}/>
            <Route path='/singleplayer/:movie' element={<Privateroute><Singlevideo/></Privateroute>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/genre/:gname/:id' element={<Genre/>}/>
            <Route path='/subscribepage' element={<Subscribe/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/payment' element={<Payment2/>}/>
            <Route path='/Payment_Otp' element={<Otp/>}/>

        </Routes>
    </div>
  )
}
