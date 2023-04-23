import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home/Home'
import { Videoplayer } from '../components/Home/Videoplayer'
import { Singlevideo } from '../components/Home/Singlevideo'
import SearchPage from '../components/Search/SearchPage'
import { Genre } from '../components/Genre'
import { Subscribe } from '../components/Subscription/Subscribe'
import { Privateroute } from './Privateroute'

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
        </Routes>
    </div>
  )
}
