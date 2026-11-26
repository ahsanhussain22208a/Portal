
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CrimeResponse from './Pages/CrimeResponse'
import CrimeReport from './Pages/CrimeReport'
import Register from './Pages/Register'
import Login from './Pages/Login'

const App = () => {

  const Token = localStorage.getItem("Token")

  return (
    <BrowserRouter>
 
      <Routes>

        {/* Public Routes */}

        <Route
          path='/login'
          element={
            Token ? <Navigate to='/' replace /> : <Login />
          }
        />

        <Route
          path='/register'
          element={
            Token ? <Navigate to='/' replace /> : <Register />
          }
        />


        {/* Protected Routes */}

        <Route
          path='/'
          element={
            Token ? <Home /> : <Navigate to='/login' replace />
          }
        />

        <Route
          path='/about'
          element={
            Token ? <About /> : <Navigate to='/login' replace />
          }
        />

        <Route
          path='/contact'
          element={
            Token ? <Contact /> : <Navigate to='/login' replace />
          }
        />

        <Route
          path='/crimeresponse'
          element={
            Token ? <CrimeResponse /> : <Navigate to='/login' replace />
          }
        />

        <Route
          path='/crimereport'
          element={
            Token ? <CrimeReport /> : <Navigate to='/login' replace />
          }
        />

        {/* Unknown Routes */}

        <Route
          path='*'
          element={
            <Navigate to={Token ? '/' : '/login'} replace />
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
