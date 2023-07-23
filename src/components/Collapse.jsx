import { useState } from "react"
import "../style/Collapse.scss"

const Collapse = ({title, text}) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="collapse-content">
            <button className="collapse-content__title" onClick={handleClick}>{title}</button>
            {open && <p className="collapse-content__text">{text}</p>}
        </div>
    )


}

export default Collapse; 