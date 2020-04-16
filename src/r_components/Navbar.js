import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Navbar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
          <nav className="nav1">
              <ul>
                <li><a href="/Nosotros">Home</a></li>
                <li><a href="/Contacto">Eventos</a></li>
                <li><a href="/Anuncios">Anuncios</a></li>
                <li><a href="/Nosotros">Nosotros</a></li>
                <li><a href="/Contacto">Apoyo Academico</a></li>
                <li><a href="/Anuncios">Apoyo Estudiantil</a></li>
              </ul>
          </nav>
        )
    }

}

/*
<a  href = "https://tec.mx/es">
<img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" className="brand-logo-tec"></img>
</a>*/

export default Navbar