import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { DependenciesProvider } from '../../main';
import Collapse from "../../components/Collapse/Collapse";
import Slider from "../../components/Slider/Slider";
import RatingBar from "../../components/Rate/Rate";
import Tags from "../../components/Tags/Tags";
import Error from "../Error/Error";

import "./AccommodationDetailSheet.scss"

const AccommodationDetailSheet = () => {
    const { api } = useContext(DependenciesProvider);
    const { id } = useParams();

    const [flat, setFlat] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchData = async () => {
        try {
            const flatList = await api.retrieveFlats();

            const findFlat = flatList.find((item) => item.id === id);
            if (findFlat) {
                findFlat.ratings = parseInt(findFlat.ratings)
                setFlat(findFlat);
                setLoading(false);
            } else {
                setError("Données non trouvées");
                setLoading(false);
            }
        } catch (err) {
            setError("Erreur lors du chargement des données");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>
    }

    if(error) {
        return <Error />
    }

    const allCarrouselPictures = flat && flat.pictures;
    const allTags = flat && flat.tags;
    const allEquipments = flat && flat.equipments;

    return (
        <div className="article-container">
            <div className="article">
                <Slider images = {allCarrouselPictures} />
                <div className="article-content">
                    <div className="article-left">
                        <h2 className="article-left__title">{flat.title}</h2>
                        <p className="article-left__location">{flat.location}</p>
                        <Tags tags={allTags} />
                    </div>

                    <div className="article-right">
                        <div className="host-container">
                            <p className="host-container__name">{flat.host.name}</p>
                            <img className="host-container__img" src={flat.host.picture} alt="photo propietaire de l'annonce" />
                        </div>
                        <RatingBar stars={flat.rating} />
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