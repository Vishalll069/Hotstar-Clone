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
import Footer from './components/Subscription/Footer'


function App() {

  return (
    <div className="App" style={{backgroundColor:"#0F1014"}}>
      {/* <Navbar/> */}
      <Allroute/>
      <Footer/>
      {/* <Videoplayer/> */}
      
      {/* <Home/> */}
      
       Disney + HotStar......
       {/* <SearchPage /> */}
    </div>
  )
}

export default App
