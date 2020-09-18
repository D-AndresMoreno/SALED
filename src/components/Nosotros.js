import React from 'react';
import MainNav from '../r_components/navigation/MainNav'
import Footer from '../r_components/Footer'
import persona1 from  '../images/persona1.jpg'
import Tec from  '../images/instalacionesTecNP.jpg'
import CardP from '../r_components/CardP'


/*imagenes*/
import Tomas from  '../images/Tomas M.png'
import Ale from  '../images/Ale H.png'
import Jimena from  '../images/Jime R.png'
import AnnaKaren from  '../images/Anna C.png'
import Miguel from  '../images/Miguel E.png'
import Roberto from  '../images/Roberto G.png'
import AnaRebe from  '../images/persona1.jpg'
import AnaSofi from  '../images/persona1.jpg'
import AnaLucy from  '../images/persona1.jpg'
import Mariana from  '../images/persona1.jpg'
import Gerardo from  '../images/persona1.jpg'
import Sergio from  '../images/persona1.jpg'

class Nosotros extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>

                <div class="msg-container">
                    <h1>Conócenos</h1>
                </div>

                <div class="cards-container">
                    <CardP id="nombre-largo" imagen = {Tomas} nombre = "Tomás Montemayor" puesto= "Presidente"></CardP>
                    <CardP imagen = {Ale} nombre = "Alejandra Hernández" puesto= "Vicepresidenta"></CardP>
                    <CardP imagen = {Jimena} nombre = "Jimena Rocha" puesto= "Dir. Planeación Estratégica"></CardP>
                    <CardP imagen = {AnnaKaren} nombre = "Anna Karen Cavazos" puesto= "Dir. Transformación Social"></CardP>
                    <CardP imagen = {Miguel} nombre = "Miguel Estrada" puesto= "Dir. Administración y Finanzas "></CardP>
                    <CardP imagen = {Roberto} nombre = "Roberto García" puesto= "Dir.  Vinculación Externa y Comunicación "></CardP>
                    <CardP imagen = {AnaRebe} nombre = "Ana Rebeca Luna" puesto= "Coord. Medios y Redes"></CardP>
                    <CardP imagen = {AnaSofi} nombre = "Ana Sofía Castillo" puesto= "Coord. Comunicación"></CardP>
                    <CardP imagen = {AnaLucy} nombre = "Ana Lucía Silva" puesto= "Coord. Finanzas"></CardP>
                    <CardP imagen = {Mariana} nombre = "Mariana Olivares" puesto= "Coord. Eventos"></CardP>
                    <CardP imagen = {Gerardo} nombre = "Gerardo Medina" puesto= "Coord. Campañas Financieras"></CardP>
                    <CardP imagen = {Sergio} nombre = "Sergio de los Santos" puesto= "Coord. Transformación Social"></CardP>

                </div>
             
            </div>
        )
    }
    
}

export default Nosotros