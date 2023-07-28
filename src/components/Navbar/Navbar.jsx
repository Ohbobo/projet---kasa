import { Link } from "react-router-dom";
import { useContext } from "react";
import { LinkContext } from "../LinkContext/linkContext";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const NavBar = () => {
    const {underlineLink, resetUnderlineLink} = useContext(LinkContext);

    const handleClick = (link) => {
        setUnderlineLink(link);
    };

    return (
        <div className="navbar">

            <Link to="/">
                <img 
                    src={logo} 
                    className="navbar__logo" 
                    alt="Logo kasa" 
                    onClick={() => resetUnderlineLink}
                    />
            </Link>

            <div className="navbar-menu">

                <Link
                    className={`navbar-menu__link ${
                        underlineLink === "/" ? "navbar-menu__link-active" : ""
                    }`}
                    to="/"
                    onClick={() => handleClick("/")}
                >
                    Accueil
                </Link>

                <Link
                    className={`navbar-menu__link ${
                        underlineLink === "/about" ? "navbar-menu__link-active" : ""
                    }`}
                    to="/about"
                    onClick={() => handleClick("/about")}
                >
                    A propos
                </Link>
                
            </div>
        </div>
    );
};

export default NavBar;