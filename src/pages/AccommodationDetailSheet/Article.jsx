import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { DependenciesProvider } from '../../main';
import Collapse from "../../components/Collapse/Collapse"
import Slider from "../../components/Slider/Slider"
import Error from "../Error/Error";

import "./Article.scss"

const AccommodationDetailSheet = () => {
    const { api } = useContext(DependenciesProvider);
    const { id } = useParams();

    const [flat, setFlat] = useState();
    const fetchData = async () => {
        const flatList = await api.retrieveFlats();
        const findFlat = flatList.find((item) => item.id === id);
        if (findFlat) {
            setFlat(findFlat);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    if (!flat) {
        return <div>Loading...</div>
    }

    const allCarrouselPictures = flat && flat.pictures;
    const allTags = flat && flat.tags;
    const allEquipments = flat && flat.equipments;

    return (
        <div>
            <div className="article">
                <Slider images = {allCarrouselPictures} />
                <div className="article-content">
                    <div className="article-left">
                        <h2 className="article-left__title">{flat.title}</h2>
                        <p className="article-left__location">{flat.location}</p>
                        <div className="article-left__tags">
                            {allTags.map((tag, index) => (
                                <p className="article-left__tag" key={index}>{tag}</p>
                            ))}
                        </div>
                    </div>

                    <div className="article-right">
                        <p className="article-right__name">{flat.host.name}</p>
                        <img className="article-right__img" src={flat.host.picture} alt="photo propietaire de l'annonce" />
                    </div>
                </div>
                <div className="article-collapse">
                    <Collapse title="Description" text={flat.description} />
                    <Collapse title="Équipements" text={allEquipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))} />
                </div>
            </div>
        </div>
    )
}

export default AccommodationDetailSheet;