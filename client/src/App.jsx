import React from 'react'

import { BrowserRouter , Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { Services } from "./pages/Services";
import Dashboard from './pages/Dashboard';
import { Error } from "./pages/Error";
import Logout from './pages/Logout';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"


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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

