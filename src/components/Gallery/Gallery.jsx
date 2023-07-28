import Card from "../Card/Card";
import data from "../../data/data.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LinkContext } from "../LinkContext/linkContext";

import "./Gallery.scss"

const Gallery = () => {
    const { resetUnderlineLink } = useContext(LinkContext)

    return (
        <div className="store-container">
            {data.map((item) => (
                <Link className="card-container" key={item.id} to={`/logement/${item.id}`} onClick={resetUnderlineLink}>
                    <Card 
                        cover={item.cover} 
                        title={item.title} 
                    />
                </Link>
            ))}
        </div>
    )
}

export default Gallery;
