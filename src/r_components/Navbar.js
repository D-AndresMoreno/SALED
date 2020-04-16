import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Navbar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
          <nav>
            <div class="nav-wrapper">
              <a href="https://tec.mx/en/monterrey">
                <img className = "brand-logo-tec" src = "https://lh3.googleusercontent.com/proxy/Jw7gQYKLv_Sv6-3-A4Nf0q21GZxMAw2mg6tdRjj_tihotcqSA2chwii_O8F_Sk2unG6T3e5nVwrYfCRylZjugBGkmN2nKnreZYQq13wFi9ke5qM8l8Cc9b9BnH-GXBtEE3TsL5TdfQ" alt="" style={{marginTop:-5}}></img>
              </a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                <li><a href="/Eventos">Eventos</a></li>
                <li><a href="/Anuncios">Anuncios</a></li>
                <li><a href="/Nosotros">Nosotros</a></li>
                <li><a href="/ApoyoAcademico">Apoyo Academico</a></li>
                <li><a href="/ApoyoEstudiantil">Apoyo Estudiantil</a></li>
              </ul>
            </div>
          </nav>
        )
    }

}

/*
<a  href = "https://tec.mx/es">
<img src="https://queretaro.itesm.mx/wp-content/uploads/2015/06/LogoTecPeque%C3%B1o.png" className="brand-logo-tec"></img>
</a>*/

export default Navbar