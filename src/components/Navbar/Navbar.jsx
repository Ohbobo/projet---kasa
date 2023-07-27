import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

import "./Navbar.scss"


const NavBar = () => {

    const [underlineLink, setUnderlineLink] = useState("");

    const handleClick = (link) => {
        setUnderlineLink(link);
    }

    return (
        <div className="navbar">
            <Link to="/"><img src={logo} className="navbar__logo" alt="Logo kasa" /></Link>
            <div className="navbar-menu">
                <Link className={`navbar-menu__link ${underlineLink === "/" ? "active" : ""}`} 
                to="/"
                onClick={() => {handleClick("/")}}>Accueil</Link>

                <Link className={`navbar-menu__link ${underlineLink === "/about" ? "active" : ""}`} 
                to="/about"
                onClick={() => {handleClick("/about")}}>A propos</Link>
            </div>
        </div>
    )
}

export default NavBar;

