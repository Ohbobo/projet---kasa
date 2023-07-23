import logoFooter from '../assets/logoFooter.png';
import '../style/Footer.scss';

const Footer = () => {

    return (
        <footer className='footer'>
            <img className='footer__img' src={logoFooter} alt="logo kasa" />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )

}

export default Footer;