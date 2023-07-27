import React from "react";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Store/Gallery";

import banner from "../../assets/banner.png"



const HomePage =  () => {

    return (
        <div>
            <Banner text="Chez vous, partout et ailleurs" img={banner}/>
            <Gallery />
        </div>
    )
}

export default HomePage;
