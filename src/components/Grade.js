import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';

function Grade() {
  return (
    <Router>
      <Routes>
      <Route exact path='/Grade' element={Grade}/>
      </Routes>
    <h2>This is the grade</h2>
    </Router>
  )
}

export default Grade;