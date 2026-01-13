import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import AddBlog from './pages/AddBlog'
import ManageBlog from './pages/ManageBlog'
import BlogDetails from "./pages/BlogDetails";
import DeleteBlog from './components/DeleteBlog'
import Footer from './components/Footer'
import UpdateBlog from './components/UpdateBlog'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/addblog' element={<AddBlog/>}></Route>
          <Route path='/manageblog' element={<ManageBlog/>}></Route>
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/delete/:id" element={<DeleteBlog />} />
          <Route path="/update/:id" element={<UpdateBlog />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
