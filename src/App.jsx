import { useState } from 'react'
import './App.css'
import { Home } from './components/Home/Home'
import SearchPage from './components/Search/SearchPage'
import { Videoplayer } from './components/Home/Videoplayer'
import { Navbar } from './components/Navbar'
import { Genre } from './components/Genre'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
       Disney + HotStar......
       {/* <SearchPage /> */}
       {/* <Genre/> */}
    </div>
  )
}

export default App
