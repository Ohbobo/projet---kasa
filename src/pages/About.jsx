import React from "react";
import Collapse from "../components/Collapse";
import aboutData from "../data/aboutData.json";
import Banner from "../components/Banner";
import "../style/About.scss"
import aboutImage from "../assets/about.png"


function About () {

    return (
        <>
        <Banner text="" img={aboutImage} />
        <div className="faq-container">
          {aboutData.map((item, id) => (
            <Collapse key={id} title={item.title} text={item.text} />
          ))}
        </div>
        </>
      );
}

export default About;
