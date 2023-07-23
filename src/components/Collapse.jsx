import { useState } from "react"
import "../style/Collapse.scss"
import chevron from "../assets/chevron.png"

const Collapse = ({title, text}) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="collapse-container">

            <div className="collapse-content" onClick={handleClick}>
            <p className="collapse-content__title">{title}</p>
            <img className={`collapse-content__img ${open ? "active" : ""}`} src={chevron} alt="chevron" />
            </div>

            {open && <p className="collapse-content__text">{text}</p>}
        </div>
    )


}

export default Collapse; 