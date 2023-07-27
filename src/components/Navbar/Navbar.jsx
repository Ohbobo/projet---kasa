import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

import "./Navbar.scss"


const NavBar = () => {

    return (
        <div className="navbar">
            <Link to="/"><img src={logo} className="navbar__logo" alt="Logo kasa" /></Link>
            <div className="navbar-menu">
                <Link className="navbar-menu__link" to="/">Accueil</Link>
                <Link className="navbar-menu__link" to="/about">A propos</Link>
            </div>
        </div>
    )
}

export default NavBar;