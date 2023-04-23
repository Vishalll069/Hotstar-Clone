import { useState } from 'react'
import './App.css'
import Payment from './components/Payment/Payment'
import { Home } from './components/Home/Home'
import SearchPage from './components/Search/SearchPage'
import { Videoplayer } from './components/Home/Videoplayer'
import { Navbar } from './components/Navbar'
import { Subscribe } from './components/Subscription/Subscribe'
import { Genre } from './components/Genre'
import { Allroute } from './Routes/Allroute'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Allroute/>
      {/* <Videoplayer/> */}
      
      {/* <Home/> */}
      
       Disney + HotStar......
    </div>
  )
}

export default App
