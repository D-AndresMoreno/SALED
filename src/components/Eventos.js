import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import Footer from '../r_components/Footer'
import Navbar from '../r_components/Navbar'
import Evento from '../r_components/Evento'

class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <Navbar></Navbar>
                <div className = "eventoMainBox">
                    
                    <Evento>

                    </Evento>
                </div>
            </div>
            
        )
    }
    
}

export default Home