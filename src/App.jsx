import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './assets/pages/Header'
import Home from './assets/pages/Home'
import Showdata from './assets/pages/Showdata'
import Update from './assets/pages/Update'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/showdata' element={<Showdata/>}/>
      <Route path='/Updatedata/:index' element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
