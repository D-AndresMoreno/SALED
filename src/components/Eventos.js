import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import LogoSaled from  '../images/LogoSaled.png'

class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "homeContactBox">
                <img className= "homeContact" src="https://tec.mx/sites/default/files/styles/header_full/public/2018-01/bibliotecacover.jpg?itok=QDIzgwe5"/>
                <img className= "logoSaled" src={LogoSaled}/>
            </div>
        )
    }
    
}

export default Home