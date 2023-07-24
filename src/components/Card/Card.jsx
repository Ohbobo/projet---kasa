import "./Card.scss"

const Card = ({cover, title}) => {
    return (
        <article className="card">
            <div className="card__content">
                <h3 className="card__title">{title}</h3>
            </div>
            <div className="card__bg"></div>
            <img src={cover} alt={title} className="card__img" />
        </article>
    );
}

export default Card;