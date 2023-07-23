import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import Banner from "../components/Banner";
import Store from "../components/Store";

import banner from "../assets/banner.png"



const HomePage =  () => {

    return (
        <div>
            <Banner text="Chez vous, partout et ailleurs" img={banner}/>
            <Store />
        </div>
    )
}

export default HomePage;
