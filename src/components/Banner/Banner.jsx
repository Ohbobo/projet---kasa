import React from "react";

import "./Banner.scss";

const Banner = ({img, text}) => {

    return (
        <div className="banner">
            <div className="banner-content">
            <span className="banner-content__title">{text}</span>
            <div className="banner-content__bg"></div>
            <img className="banner-content__img" src={img} alt="Photo de falaise" />
            </div>
        </div>
    )

}

export default Banner;