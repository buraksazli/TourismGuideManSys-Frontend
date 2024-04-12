import React from 'react'

import LoginPage from './pages/LoginPage'

import HomePage from './pages/HomePage'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {    

  
  
  return (    

                <BrowserRouter>
                  <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/home' element={<HomePage />}/>
                  </Routes> 
                 </BrowserRouter>
              
      )
    }

export default App