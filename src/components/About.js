// src/components/About.js
import React from "react";
import { image } from "../data/data"; // Make sure this file exports an image variable

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love building web applications and learning new technologies.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
