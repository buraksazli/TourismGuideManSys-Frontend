import React from 'react'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import TouristsPage from './pages/TouristsPage'
import ProfilePage from './pages/ProfilePage'
import EditProfilePage from './pages/EditProfilePage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import HomePage from './pages/HomePage'
import GuidePage from './pages/GuidePage'
import GuideConfirmPage from './pages/GuideConfirmPage'
import TourListPage from './pages/TourListPage'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ReportedRatingsPage from './pages/ReportedRatingsPage'


function App() {    

  return (    
    
                <BrowserRouter>
                  <Routes>
                    <Route exact path='/' element={ <Navigate to="/login"/> }/>
                      
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/home' element={<HomePage />}/>
                    <Route path='/admins' element={<AdminPage />}/>
                    <Route path='/tourists' element={<TouristsPage />}/>
                    <Route path='/guide' element={<GuidePage />}/>
                    <Route path='/confirmGuide' element={<GuideConfirmPage />}/>
                    <Route path='/tours' element={<TourListPage />}/>
                    <Route path='/reportedRatings' element={<ReportedRatingsPage />}/>
                    <Route path='/profile' element={<ProfilePage />}/>
                    <Route path='/editProfile' element={<EditProfilePage />}/>
                    <Route path='/changePassword' element={<ChangePasswordPage />}/>
                  </Routes> 
                 </BrowserRouter>
              
      )
    }

export default App