import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import AddBlog from '../pages/AddBlog'
import ManageBlog from '../pages/ManageBlog'
import Footer from '../components/Footer'
import SinglePost from '../pages/SinglePost'

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Home/>
            <About/>
            <SinglePost/>
            <AddBlog/>
            <ManageBlog/>
        </main>
        <Footer/>
    </div>
  )
}
