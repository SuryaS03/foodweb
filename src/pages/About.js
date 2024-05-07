import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../Styles/About.css'
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        
KFC, short for Kentucky Fried Chicken, is a renowned fast-food restaurant chain specializing in fried chicken. Founded by Colonel Harland Sanders, KFC's journey began in 1930 in North Corbin, Kentucky, USA. Known for its secret blend of 11 herbs and spices, KFC's original recipe chicken became iconic worldwide.
<br/>
<br/>


Over the years, KFC has expanded globally, establishing thousands of outlets in numerous countries. Its menu typically includes various chicken options such as original recipe, extra crispy, and grilled chicken, along with sides like mashed potatoes, coleslaw, biscuits, and more. Additionally, KFC often introduces limited-time offerings and promotions to keep its menu fresh and enticing to customers.
<br/>
<br/>

KFC's branding and marketing strategies have contributed to its widespread recognition. The company's logo, featuring Colonel Sanders' image, is instantly recognizable, symbolizing its heritage and commitment to quality.
        </p>
      </div>
    </div>
  );
}

export default About;