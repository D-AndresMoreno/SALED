import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import NavbarH from '../r_components/NavbarH'
import Anuncios from '../r_components/Anuncios'
import Footer from '../r_components/Footer'



class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <NavbarH></NavbarH>
            <Anuncios></Anuncios>
                <div className = "homeMainbox">
                   
                    
                </div>
            </div>
        )
    }
    
}

export default Home