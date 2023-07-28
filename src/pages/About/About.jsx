import React from "react";
import Collapse from "../../components/Collapse/Collapse";
import aboutData from "../../data/aboutData.json";
import Banner from "../../components/Banner/Banner";
import "./About.scss"

import aboutImage from "../../assets/about.png"


function About () {

    return (
        <section className="about">
          <div className="about-banner">
            <Banner text="" img={aboutImage} />
          </div>
        <div className="faq-container">
          {aboutData.map((item, id) => (
            <Collapse key={id} title={item.title} text={item.text} />
          ))}
        </div>
        </section>
      );
}

export default About;
