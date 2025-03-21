import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './assets/pages/Header'
import Home from './assets/pages/Home'
import Showdata from './assets/pages/Showdata'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/showdata' element={<Showdata/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
