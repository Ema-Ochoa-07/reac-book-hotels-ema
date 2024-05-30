import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/HomePages'
import HotelIdPage from './pages/HotelIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GeneralHeader from './share/GeneralHeader'
import ReservationPage from './pages/ReservationPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

const App = () => {
  return (
    <div>
      <GeneralHeader/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/hotel/:id' element={<HotelIdPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/reservation' element={<ReservationPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App