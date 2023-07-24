import React from "react";
import Banner from "../../components/Banner/Banner";
import Store from "../../components/Store/Store";

import banner from "../../assets/banner.png"



const HomePage =  () => {

    return (
        <div>
            <Banner text="Chez vous, partout et ailleurs" img={banner}/>
            <Store />
        </div>
    )
}

export default HomePage;
