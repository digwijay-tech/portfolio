/* eslint-disable no-unused-vars */
import React from "react";
import "../Hero/Hero.css";
import img from "../../assets/hero 1.png";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { yellow } from "@mui/material/colors";
const Hero = () => {
  return (
    <div className="Hero-main">
      <div className="text-grid">
        <div>
          <h1 className="h1">Hello <WavingHandIcon sx={{ fontSize: 40 , color:yellow[500]}} /></h1>
          <h2>I am <span>Digiwjay</span></h2>
          <p>A FULL STACK DEVELOPER</p>
        </div>
      </div>
      <div className="img-grid">
        <img src={img} className="img" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
