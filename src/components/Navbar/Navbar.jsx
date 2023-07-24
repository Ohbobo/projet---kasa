import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

import "./Navbar.scss"


function NavBar() {

    return (
        <div className="navbar">
            <Link to="/"><img src={logo} className="navbar__logo" alt="Logo kasa" /></Link>
            <div className="navbar_links">

                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </div>
    )
}

export default NavBar;