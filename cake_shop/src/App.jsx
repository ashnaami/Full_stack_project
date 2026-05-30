import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AddCake from './components/AddCake'
import EditPro from './components/EditPro'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/addcake"
          element={<AddCake />}
        />

        <Route path='/editpro' element={<EditPro />} />


      </Routes>

    </BrowserRouter>

  )

}

export default App