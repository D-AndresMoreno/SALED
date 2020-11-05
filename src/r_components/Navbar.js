import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

class Navbar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
  
          <div class="nav-wrapper">
            <nav className="navN">
              <ul>
                <li><a href="/" className = "cool-linkN">Home</a></li>
                <li><a href="/Eventos" className = "cool-linkN">Eventos</a></li>
                <li><a href="/Nosotros" className = "cool-linkN">Nosotros</a></li>
                <li><a href="/ApoyoAcademico" className = "cool-linkN">Apoyo Academico</a></li>
                <li><a href="/ApoyoEstudiantil" className = "cool-linkN">Apoyo Estudiantil</a></li>
                <li><a href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds" className = "cool-linkN">Tienda</a></li>
              </ul>
            </nav>
          </div>
        )
    }

}


export default Navbar