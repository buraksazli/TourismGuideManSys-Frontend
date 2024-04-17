import React from 'react'

import LoginPage from './pages/LoginPage'

import TouristsPage from './pages/TouristsPage'

import HomePage from './pages/HomePage'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {    

  
  
  return (    
    

                <BrowserRouter>
                  <Routes>
                    <Route exact path='/' element={ <Navigate to="/login"/> }/>
                      
                    
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/home' element={<HomePage />}/>
                    <Route path='/tourists' element={<TouristsPage />}/>
                  </Routes> 
                 </BrowserRouter>
              
      )
    }

export default App