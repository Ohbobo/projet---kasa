import emptyStar from "../../assets/empty_star.png";
import fullStar from "../../assets/full_star.png";

import "./Rate.scss";


const ratingBar = ( {stars} ) => {

    const totalStars = [1,2,3,4,5];

        return (
            <div className="rate">
                {totalStars.map((score, index) => 
                    stars >= score ? (
                        <img className="rate__star" key={index} src={fullStar} alt="stars" />
                    ) :
                    (
                        <img className="rate__star" key={index} src={emptyStar} alt="stars" />
                    )
                )}
            </div>
        )
    }

export default ratingBar;
