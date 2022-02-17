import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { 
  HomePage,
  Restaurants
} from '../pages';
import React from 'react'

function router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants/:id" element={<Restaurants/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default router