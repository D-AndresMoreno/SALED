import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import M from 'materialize-css'

import firebase from '../initiliazer/initializer'
import Navbar from '../r_components/Navbar';

import apoyo1 from '../images/apoyo1.jpeg'

import apoyo2 from '../images/apoyo2.jpg'

class ApoyoEstudiantil extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            email: ""
        }

        this.login = this.login.bind(this);
    }

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems);
          });
    }

    login(){
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result =>{

            var emailOri = result.user.email.split('@').pop();
            var emailOri2 = emailOri.substring(0,emailOri.length-3)
        
            if(emailOri2 === "itesm" || emailOri2 === "tec"){
                console.log("Succesfull login")
                console.log(result.user)
            }
            else{
                firebase.auth().currentUser.delete()
                console.log("No es valido, usa uno del tec perro")
            }
        })  
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div className="apoyo-estudiantil-title">
                    <h1>Apoyo Estudiantil</h1>  
                </div>
                <div className="apoyo-estudiantil-container">
                    <div className="apoyo-e-box1">
                            <div className="slider">
                                <ul className="slides">
                                <li>
                                    <a onClick={this.login}>
                                        <img src= {apoyo1} className= "imagenSlider" style = {{cursor:"pointer"}}/> 
                                    </a>
                                    <div class="caption center-align">
                                    <h3>Asesorate de un mentor</h3>
                                        <h5 class="light grey-text text-lighten-3">Cuentanos lo que necesites y te conseguiremos el mentor más adecuado para ti.</h5>
                                    </div>
                                </li>
                                </ul>
                            </div>
                    </div>
                    <div className="apoyo-e-box2">
                        <div className="slider">
                            <ul className="slides">
                            <li>
                                <a onClick={this.login}>
                                    <img src= {apoyo2} className= "imagenSlider" style = {{cursor:"pointer"}}/> 
                                </a>
                                <div class="caption center-align">
                                <h3>Postulate como asesor</h3>
                                    <h5 class="light grey-text text-lighten-3">Elige tu area de expertis y trasciende tu conocimiento.</h5>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <Footer></Footer>   
            </div>
        )
    }
    
}



export default ApoyoEstudiantil