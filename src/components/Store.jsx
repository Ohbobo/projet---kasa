import Card from "./Card";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import "../style/Store.scss"

const Store = () => {

    return (
        <div className="store-container">
            {data.map((item, id) => (
                <Link key={id} to={`/logement/${item.id}`}>
                    <Card 
                        cover={item.cover} 
                        title={item.title} 
                    />
                </Link>
            ))}
        </div>
    )
}

export default Store;