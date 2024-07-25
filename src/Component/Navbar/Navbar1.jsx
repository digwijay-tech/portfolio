/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Navbar/navbar1.css'
import nav1 from '../../assets/img/nav-icon1.svg'
import nav2 from '../../assets/img/nav-icon2.svg'
import nav3 from '../../assets/img/nav-icon3.svg'
const Navbar1 = () => {
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50)
            {
                setScrolled(true);
            }else{
                setScrolled(false);

            }
        }
        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);

    }

    
       const scrollTo=(id)=>{
        const element = document.getElementById(id);
        if (element){
          element.scrollIntoView({behavior:'smooth' })
        }
       }
  
    

  return (
    <div>
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src="vite.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
           
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-Link':'navbar-Link'} onClick={()=>onUpdateActiveLink('home')} >HOME</Nav.Link>
            <Nav.Link href="#skill" className={activeLink==='skill'?'active navbar-Link':'navbar-Link'} onClick={()=>onUpdateActiveLink('skill')} >SKILL</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='project'?'active navbar-Link':'navbar-Link'} onClick={()=>onUpdateActiveLink('project')} >PROJECTS</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href=""><img src={nav1} alt="" /></a>
                <a href=""><img src={nav2} alt="" /></a>
                <a href=""><img src={nav3} alt="" /></a>
            </div>
            <button className="vvd" onClick={()=>scrollTo('connect')} ><span>Lets connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar1