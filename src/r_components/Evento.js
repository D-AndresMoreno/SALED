import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import firebase from '../initiliazer/initializer'

class Evento extends React.Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
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
            <div className="containerEvento">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.imagen}/>
                            <a href="/Eventos" className="btn-floating btn-large halfway-fab waves-effect waves-light red">{this.props.fechaEvento}</a>
                        </div>
                        <div className="card-content">
                        <span className="card-title">{this.props.tituloEvento}</span>
                        <p className = "card-description">{this.props.descripcionEvento}</p>
                        <p className = "card-button"><a  onClick={this.login}>Registrarme -></a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Evento