import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import banner from "../../assets/banner.png"

import "./Homepage.scss"



const HomePage =  () => {

    return (
        <div>
            <div className="home-banner">
            <Banner text="Chez vous, partout et ailleurs" img={banner}/>
            </div>
            <Gallery />
        </div>
    )
}

export default HomePage;
