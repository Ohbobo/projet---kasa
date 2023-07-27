import Card from "../Card/Card";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

import "./Gallery.scss"

const Gallery = () => {
    return (
        <div className="store-container">
            {data.map((item) => (
                <Link className="card-container" key={item.id} to={`/logement/${item.id}`}>
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
