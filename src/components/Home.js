import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import FotoHome from  '../images/Artboard 1.svg'

import Anuncios from '../r_components/Anuncios'

import Slider from '../r_components/Slider'


import apoyo1 from '../images/apoyo1.jpeg'
import apoyo2 from '../images/apoyo2.jpg'
import apoyo3 from '../images/apoyo3.jpeg'

import CardA from '../r_components/CardA'

//Fotos Merch
import merc1 from "../images/merc1.png"
import merc2 from "../images/merc2.png"
import merc3 from "../images/merc3.jpg"
import merc4 from "../images/merc4.jpg"
import merc5 from "../images/merc5.png"
import merc6 from "../images/merc6.png"



class Home extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems);
          });
    }

    render(){
        return(
            <div className = 'home-container'>
    
                <div className="home-photo">
                    <img src = {FotoHome} alt=''></img>
                </div>
                <h2 className = "titulo-anuncios">Anuncios</h2>
                <Anuncios></Anuncios>
                <div className = "sliderContainer">
                    <div className = "mentoria-title">
                        <h1 className = "mentoria-title-text">Mentoría</h1>
                    </div>
                <Slider></Slider>
                </div>
            
                <div className="apoyo-a">
                    <div className="apoyo-a-title">
                        <h2 className = "apoyo-a-title-text">Apoyo Académico</h2>
                    </div>
                    <div className="box-apoyo-a-container" id="mentoria-box">
                        <div className = "box-apoyo-a">
                            <div className = "eventContainerApoyo">
                                <CardA imagen = {apoyo3} titulo = "Asesorate" descripcion = "Refuerzate utilizando el contenido de asesoria que han compartido tus compañeros"></CardA>
                            </div>  
                        </div>
                        <div className = "box-apoyo-a">
                            <div className = "eventContainerApoyo">
                                <CardA imagen = {apoyo1} titulo = "Comparte" descripcion = "Publica en la plataforma contenido útil para el aprendizaje, y ayuda a tus compañeros"></CardA>
                            </div>  
                        </div>
                        <div className = "box-apoyo-a">
                            <div className = "eventContainerApoyo">
                                <CardA imagen = {apoyo2} titulo = "Consulta" descripcion = "Revisa contenidos anteriores que se han documentado para refrescar tus conocimientos"></CardA>
                            </div>  
                        </div>
                    </div>
            </div>
            
            <div className = "home-tienda">            
                <h2 className = "titulo-tienda">Tienda</h2>
                <div className = "carousel-container">
                    <div class="carousel">
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc1}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc2}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc3}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src= {merc4}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc5}/></a>
                        <a class="carousel-item" href="https://www.shopify.com/free-trial?&term=shopify.com&Network=Search&SiteTarget=&mt=e&adid=260015520879&adpos=&CampaignId=1336245534&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwhtT1BRCiARIsAGlY51JPEma1VRp_Qn5gbqxwfKttbcGq8zwxdoqv3UmynoB8TpBq7zJO3JcaAjrwEALw_wcB&gclsrc=aw.ds"><img src={merc6}/></a>
                    </div>   
                </div>

                <div className = "containerTienda">
                    <button class="btnTienda" href = "/ApoyoAcademico">¡Visita nuestra tienda!</button>
                </div>
            </div>

            <div className = "boxDenuncia">
                <div >
                    <h3 >Denuncia Anónima</h3>
                    
                    <p>
                        En la SALED creamos este espacio seguro para que el alumnado pueda sentirse con la confianza de compartirnos cualquier comentario, duda, 
                        preocupación, denuncia, observación, queja, solicitar ayuda, etc. de manera COMPLETAMENTE anónima. 
                        Te damos la opción de dejarnos tus datos en caso de que necesites o quieras que nos comuniquemos contigo. 
                        Estamos aquí para ti.
                    </p>
                </div>
                    
                <a href = "http://bit.ly/BuzónAnónimoSALED" target = "_blank">Denuncia</a>  

            </div>
           
            </div>
        )
    }
    
}

export default Home