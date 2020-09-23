import React from 'react';
import CardP from '../r_components/CardP'


/*imagenes*/
import Tomas from  '../images/Tomas M.png'
import Ale from  '../images/Ale H.png'
import Jimena from  '../images/Jime R.png'
import AnnaKaren from  '../images/Anna C.png'
import Miguel from  '../images/Miguel E.png'
import Roberto from  '../images/Roberto G.png'
import AnaRebe from  '../images/AnaR L.png'
import AnaSofi from  '../images/AnaSofiaCastillo.png'
import AnaLucy from  '../images/AnaLucia.png'
import Mariana from  '../images/MarianaO.jpeg'
import Gerardo from  '../images/GerardoM.png'
import Sergio from  '../images/SergioDLS.png'

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
                    <CardP id="nombre-largo" imagen = {Tomas} nombre = "Tomás Montemayor" puesto= "Presidente" contacto="81 1638 6718 tomas.montemayor9@gmail.com"></CardP>
                    <CardP imagen = {Ale} nombre = "Alejandra Hernández" puesto= "Vicepresidenta" contacto="993 160 7998 alejandra.hdez5055@gmail.com"></CardP>
                    <CardP imagen = {Jimena} nombre = "Jimena Rocha" puesto= "Dir. Planeación Estratégica" contacto="81 1908 8044 jrocharamirez@outlook.es"></CardP>
                    <CardP imagen = {AnnaKaren} nombre = "Anna Karen Cavazos" puesto= "Dir. Transformación Social" contacto="81 1222 8170 annakarencavazos@gmail.com"></CardP>
                    <CardP imagen = {Miguel} nombre = "Miguel Estrada" puesto= "Dir. Administración y Finanzas " contacto="998 170 2616 mestradalan@gmail.com"></CardP>
                    <CardP imagen = {Roberto} nombre = "Roberto García" puesto= "Dir.  Vinculación Externa y Comunicación " contacto="81 8019 1476 robertogarciasepulveda@gmail.com"></CardP>
                    <CardP imagen = {AnaRebe} nombre = "Ana Rebeca Luna" puesto= "Dir. Medios Digitales" contacto="644 137 5778 anarebecalunac@gmail.com"></CardP>
                    <CardP imagen = {AnaSofi} nombre = "Ana Sofía Castillo" puesto= "Coord. Redes Sociales" contacto="81 2022 9274 anasofia1209@gmail.com"></CardP>
                    <CardP imagen = {AnaLucy} nombre = "Ana Lucía Silva" puesto= "Coord. Finanzas" contacto="81 165 2791 anilu.slv@gmail.com"></CardP>
                    <CardP imagen = {Mariana} nombre = "Mariana Olivares" puesto= "Coord. Eventos" contacto="81 1208 6855 olivaresemariana@gmail.com"></CardP>
                    <CardP imagen = {Gerardo} nombre = "Gerardo Medina" puesto= "Coord. Campañas Financieras" contacto="81 1990 5012 g.medinav0@gmail.com"></CardP>
                    <CardP imagen = {Sergio} nombre = "Sergio de los Santos" puesto= "Coord. Transformación Social" contacto="81 1577 5521 dess000903@gmail.com "></CardP>

                </div>
             
            </div>
        )
    }
    
}

export default Nosotros