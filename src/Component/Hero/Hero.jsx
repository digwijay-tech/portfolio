/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../Hero/Hero.css";
import img from "../../assets/hero 1.png";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { yellow } from "@mui/material/colors";
import { Col, Container, Row } from "react-bootstrap";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  const [LoopNum,setLoopNum]= useState(0);
  const [isDeleting,setIsDeleting]= useState(false);
  const toRotate=["Web Developer","Angular Developer","UI/UX Developer"];
  const [text,setText]= useState('');
  const [delta,setDelta]=useState(300-Math.random()*100);
  const period=2000;

  useEffect(()=>{
    let ticker=setInterval(()=>{
      tick();


    },delta)

    return()=>{clearInterval(ticker)};
  },[text])

  const tick=()=>{
    let i=LoopNum%toRotate.length;
    let fullText=toRotate[i];
    let updatedText=isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

    setText(updatedText);
    
    if(isDeleting){
      setDelta(preDelta=>preDelta/2)
    }

    if(!isDeleting&&updatedText===fullText){
      setIsDeleting(true)
      setDelta(period);

    }else if(isDeleting && updatedText===''){
      setIsDeleting(false);
      setLoopNum(LoopNum+1);
      setDelta(500);

    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
          <span className="tagline"> Welcome to my portfolio</span>
          <h1>Hey <WavingHandIcon sx={{ fontSize: 40 , color:yellow[500]}} />,</h1>
          <h2>_<span className="wrap">{text}</span></h2>
          <br/>
          <p> I&apos;m Digwijay, a dedicated Full Stack Web Developer focused on Angular development.
             I specialize in crafting seamless web applications with dynamic, user-friendly interfaces. 
             </p>
             
             
          <button onClick={()=>{console.log("connect")}}> Lets connect <ArrowForwardIcon/> </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <img src={img} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;




    // <div className="Hero-main">
    //   <div className="text-grid">
    //     <div>
    //       <h1 className="h1">Hello <WavingHandIcon sx={{ fontSize: 40 , color:yellow[500]}} /></h1>
    //       <h2>I am <span>Digiwjay</span></h2>
    //       <p>A FULL STACK DEVELOPER</p>
    //     </div>
    //   </div>
    //   <div className="img-grid">
    //     <img src={img} className="img" alt="img" />
    //   </div>
    // </div>