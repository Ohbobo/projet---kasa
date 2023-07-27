import { useState } from "react";

import backArrow from "../../assets/back_arrow.png";
import nextArrow from "../../assets/next_arrow.png";

import "./Slider.scss";

const Slider = ({images}) => {

    const imagesLength = images.length;
    const [sliderIndex, setSliderIndex] = useState(0);

    const previousImage = () => {
        const newIndex = sliderIndex - 1;
        setSliderIndex(newIndex < 0 ? imagesLength -1 : newIndex);

    }
    const nextImage = () => {
        const newIndex = sliderIndex + 1;
        setSliderIndex(newIndex >= imagesLength ? 0 : newIndex);
    }

    return (
        <div className="slider">
           
            <img className="slider__back slider__arrow" 
            src={backArrow} 
            alt="fléche précedente carrousel" 
            onClick={previousImage}/>

            <img className="slider__next slider__arrow" 
            src={nextArrow} 
            alt="fléche suivante carrousel" 
            onClick={nextImage}/>

            <img className="slider__img" 
            src={images[sliderIndex]}
             alt="photo appartement en location" />
             
            <p className="slider__counter">{ sliderIndex + 1 }/{ imagesLength }</p>
       
        </div>
    )
}

export default Slider;