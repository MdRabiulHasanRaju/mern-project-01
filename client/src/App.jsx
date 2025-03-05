import React from 'react'

import { BrowserRouter , Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Services } from "./pages/Services";
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

