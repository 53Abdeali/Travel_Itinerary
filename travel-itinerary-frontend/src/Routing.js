import React from 'react'
import { Route, Router,BrowserRouter as Routes } from 'react-router-dom'
import Login from './components/Login'

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
