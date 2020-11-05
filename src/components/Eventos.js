import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Evento from '../r_components/Evento'

//Fotos Eventos
import Titulo from  '../images/Titulo.png'
import Jornada from  '../images/Jornada.png'
import Concurso from  '../images/Concurso.png'
import Focus from '../images/FocusGroup.png'
import LegislaTec from  '../images/LegislaTec.png'
import SeminarioCorte from "../images/SeminarioCorte.png"
import RosarioPiedra from  '../images/RosarioPiedra.png'
import Simposio from  '../images/Simposio.png' 
import SeminarioProc from '../images/SeminarioProc.png' 
import TallerEjemplar from '../images/TallerEjemplar.png' 
import DialogoSaskia from "../images/DialogoSaskia.png"
import DialogoGris from "../images/DialogoGris.png"
import Diplomado from "../images/Diplomado.png"


class Home extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                
                <div className="headerEventos">
                    <h4>Calendario de Eventos</h4>
                </div>
                <div className = "boxDescripcionEvento">
                    <p className = "descripcionEvento">
                        ¡Conoce nuestro itinerario de eventos!
                    </p>
                </div>

                <div className = "eventosMainBox">
                        <div className = "boxevento1">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/saledmty/" tituloEvento = "Semana de conferencias" imagen = {Titulo} descripcionEvento = "Semana de conferencias en donde se invitarán a ponentes egresados de la licenciatura en derecho, que se desempeñan en profesiones diferentes a la abogacía. El propósito es conocer las herramientas que otorga el haber estudiado nuestra licenciatura y como esto te da ventajas en cualquier ámbito laboral y para desempeñarte"></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento2">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/cnjo.tec/" tituloEvento = "Concurso" imagen = {Concurso}  descripcionEvento = "El Concurso Nacional de Juicios Orales del Tec en su primera edición tendrá por objetivo la práctica de litigación oral basada en el Sistema Penal Acusatorio además de tener ponencias de alto nivel por parte de reconocidas figuras en el derecho mexicano."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento3">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/2020jda/" tituloEvento = "Jornada" imagen = {Jornada} descripcionEvento = "Evento en línea, con duración de dos días con el fin de crear networking entre despachos de talla internacional y nacional, empresas y organizaciones de diferentes ámbitos y estudiantes de derecho. Una oportunidad para que los estudiantes puedan conversar con estos despachos, entregar su CV y tener la oportunidad de empezar a trabajar."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento4">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.bit.ly/saledcomovas" tituloEvento = "Focus Group" imagen = {Focus} descripcionEvento = "Platica con los directivos del departamento de derecho sobre la experiencia durante el semestre agosto-diciembre 2020"></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento5">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/legisla.tec/" tituloEvento = "LegislaTec" imagen = {LegislaTec} descripcionEvento = "Seminario en Derecho Legislativo que será impartido por Académicos, Senadores de la República, Diputados Federales y Diputados del H. Congreso de Nuevo León. . 4 sesiones, en donde se estarán enseñando los aspectos más importantes del proceso legislativo y su normatividad."></Evento>
                            </div>   
                        </div>

                        <div className = "boxevento6">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.bit.ly/saledseminario " tituloEvento = "Seminario" imagen = {SeminarioCorte} descripcionEvento = "Seminario en donde se contará con la presencia de invitados especiales expertos en los temas a tratar en cada sesión."></Evento>
                            </div>   
                        </div>
                                                
                        <div className = "boxevento7">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/p/CF5oxGChayc/" tituloEvento = "Conferencia" imagen = {RosarioPiedra}  descripcionEvento = "Sesión de preguntas y respuestas con la presidenta de la Comisión Nacional de Derecho Humanos sobre los “Retos a los que se enfrenta México en materia de Derechos Humanos y la transformación que se está impulsando en la CNDH, 2020."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento8">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/sid_tec/" tituloEvento = "Simposio" imagen = {Simposio}  descripcionEvento = "Conjunto de conferencias impartidas por juristas distinguidos a nivel nacional e internacional."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento9">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.bit.ly/saledseminarioddhh" tituloEvento = "Seminario" imagen = {SeminarioProc}  descripcionEvento = "Seminario impartido por el Dr. Carlos Flores, primer mexicano designado como defensor público interamericano para litigar en la Corte Interamericana de DDHH."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento10">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/p/CAs3FcNheza/" tituloEvento = "Taller" imagen = {TallerEjemplar}  descripcionEvento = "Taller organizado en colaboración con el Programa Estudiantil de Ciudadanía, FETEC en donde se contó con la presencia del Dr. Luis Ernesto Aguirre, el Lic. Luis Dario Ángeles, el Dr. Julio César Cruz Chavira y la asociación civil Hagámoslo Bien con la finalidad de brindarles a los alumnos información de cómo ser mejores ciudadanos en distintos aspectos como medio ambiente y acción social."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento11">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/p/CAd0i4dBDuS/" tituloEvento = "Diálogo" imagen = {DialogoSaskia}  descripcionEvento = "Transmisión en vivo con la activista y fundadora de Reinserta A.C., Saskia Niño de Rivera, en donde los alumnos tuvieron la oportunidad de dialogar sobre los inocentes privados de su libertad, los niños y la maternidad en prisión, y los adolescentes en conflicto con la ley."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento12">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/p/B_gkWZQhHVj/" tituloEvento = "Diálogo" imagen = {DialogoGris}  descripcionEvento = "Conversatorio con Griselda Nuñez, la Fiscal en feminicidios de Nuevo León sobre la violencia doméstica y los feminicidios frente a la contingencia del COVID-19 en el estado."></Evento>
                            </div> 
                        </div>

                        <div className = "boxevento13">
                            <div className = "eventContainerEvent">
                                <Evento link = "https://www.instagram.com/p/B8cQRmKBS2H/" tituloEvento = "Diplomado" imagen = {Diplomado}  descripcionEvento = "Diplomado de Derecho Fiscal en colaboración con Firma Jurídica y Fiscal."></Evento>
                            </div> 
                        </div>


                </div>
                
            </div>
            
        )
    }
    
}

export default Home