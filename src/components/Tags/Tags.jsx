import "./Tags.scss";

const Tags = ({tags}) => {

    return (
        <div className="article-left-tags-bar">
        {tags.map((tag, index) => (
            <p className="article-left-tags-bar__tag" key={index}>{tag}</p>
        ))}
    </div>
    )
}

export default Tags;