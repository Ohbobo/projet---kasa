import React from "react";
import banner from "../assets/banner.png"
import "../style/Banner.scss"

const Banner = () => {

    return (
        <div className="banner">
            <div className="banner-content">
            {/* <img src={banner} className="banner-content__img" alt="Photo de falaise" /> */}
            <p className="banner-content__title">Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )

}

export default Banner;