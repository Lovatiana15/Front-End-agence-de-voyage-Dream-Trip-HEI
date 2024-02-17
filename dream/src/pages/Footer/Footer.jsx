import React from 'react';
import './Footer.css';
import logo from '../../assets/logo-removebg-preview.jpg';
import logo1 from '../../assets/1.jpg';
import logo2 from '../../assets/2.jpg';
import logo3 from '../../assets/3.jpg';




function Footer (){
    return (
        <div className='app-container'>
            <div className='left-section'>
                <img className='logo00' src={logo} />
            </div>

            <section className='right-section'>
                <div  className='right'>
                    <div><img className='logo1' src={logo1} /></div>
                    <div><img className='logo1' src={logo2} /></div>
                    <div><img className='logo1' src={logo3} /></div>
                </div>
                <div  className='right'>
                    <div className='footer-container'>
                        <div  className="information-section">
                            <i className="icon">📍</i>Adresse : 123 Rue de la Rue, Ville
                        </div>
                        <div  className="information-section">
                            <i className="icon">☎️</i>Numéro de téléphone : +123 456 789
                        </div>
                        <div  className="information-section">
                            <i className="icon">🌐</i>Lieu : <a className="footer-link" href="https://www.Madagascar.com">www.Madagascar.com</a>
                        </div>
                    </div>
                </div>
                <div  className='right_logo'>
                    <div  className="social-icons">
                        <div> <i className="fab fa-facebook"></i></div>
                        <div> <i className="fab fa-instagram"></i></div>
                        <div>  <i className="fab fa-linkedin"></i></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Footer;