/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Component/Hero/Hero'
import Footer from '../Component/Footer/Footer'
import Project from '../Component/Project/Project'
import Navbar1 from '../Component/Navbar/Navbar1'
import Skill from '../Component/Skill/Skill'
import Contact from '../Component/Contact_Me/Contact'

const Home = () => {
  return (
    <div className="App">
    <Navbar1/>
    <Hero/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home