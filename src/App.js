import React from 'react'

import LoginPage from './pages/LoginPage'

import TouristsPage from './pages/TouristsPage'

import HomePage from './pages/HomePage'

import GuideConfirmPage from './pages/GuideConfirmPage'

import TourListPage from './pages/TourListPage'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {    

  
  
  return (    
    

                <BrowserRouter>
                  <Routes>
                    <Route exact path='/' element={ <Navigate to="/login"/> }/>
                      
                    
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/home' element={<HomePage />}/>
                    <Route path='/tourists' element={<TouristsPage />}/>
                    <Route path='/confirmGuide' element={<GuideConfirmPage />}/>
                    <Route path='/tours' element={<TourListPage />}/>
                  </Routes> 
                 </BrowserRouter>
              
      )
    }

export default App