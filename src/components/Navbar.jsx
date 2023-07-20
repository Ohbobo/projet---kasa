import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "../style/Navbar.scss"

function NavBar() {


    return (
        <div className="navbar">
            <Link><img src={logo} className="navbar__logo" alt="Logo kasa" /></Link>
            <div className="navbar_links">
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </div>
    )
}

export default NavBar;