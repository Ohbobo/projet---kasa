import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Collapse from "../../components/Collapse/Collapse"
import datas from "../../data/data.json";
import Error from "../Error/Error";

import "./Article.scss"

const Article = () => {
    const { id } = useParams();
    const [data, setData] = useState(datas);

    useEffect(() => {
        const filteredData = datas.find((item) => item.id === id);

        if(filteredData){
            setData(filteredData);
            console.log(filteredData);
        } else {
            return <Error />
        }
        }, [id]);

    return (   
        <div>
            <img src="" alt="" />
            <div className="article">
                <div className="article-content">
                    <div className="article-left">
                        <h2 className="article-left__title">{data.title}</h2>
                        <p className="article-left__location">{data.location}</p>
                        <div className="article-tags">
 
                        </div>
                    </div>

                    <div className="article-right">
                        <p className="article-right__name"></p>
                    </div>
                </div>
                <div className="article-collapse">
                    <Collapse title="Description" text={data.description} />
                    <Collapse title="Équipements" text={data.equipments} />
                </div>
            </div>
        </div>
    )
}

export default Article;