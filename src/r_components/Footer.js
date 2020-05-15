import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

import logoFb from '../images/logo-facebook 1.svg'
import Saled from '../images/SALED.svg'
import ig from '../images/ig.svg'
import Mail  from '../images/mail.svg'
import tec from '../images/TECF.svg'

class Footer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <footer className="main-footer">
                <div className="footer-img1">
                    <img src={tec} alt="logoTec"/>
                </div>
                <div className="footer-img2">
                    <img src={Saled} alt="saledLogo"/>
                </div>
                <p className="quejas">¿Tienes alguna queja o sugerencia?</p>
                <div className="footer-fb">
                    <img src={logoFb} alt="fb"/>    
                </div>
                <div className="footer-ig">
                    <img src={ig} alt="ig"/>
                </div>
                <div className="footer-m">
                    <img src={Mail} alt="m"/>
                </div>
            </footer>
        )
    }
    
}

export default Footer