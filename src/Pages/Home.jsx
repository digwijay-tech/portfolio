/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Component/Hero/Hero'
import Footer from '../Component/Footer/Footer'
import Project from '../Component/Project/Project'
import Navbar1 from '../Component/Navbar/Navbar1'
import Skill from '../Component/Skill/Skill'

const Home = () => {
  return (
    <div className="App">
    <Navbar1/>
    <Hero/>
    <Skill/>
    <Project/>
    <Footer/>
    </div>
  )
}

export default Home