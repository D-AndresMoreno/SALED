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
        var db = firebase.firestore();
        firebase.auth().signInWithPopup(provider).then(result =>{

            var emailOri = result.user.email.split('@').pop();
            var emailOri2 = emailOri.substring(0,emailOri.length-3)
        
            if(emailOri2 === "itesm" || emailOri2 === "tec"){
                console.log("Succesfull login")
                console.log(result.user)
                db.collection('usuarios').doc(result.user.uid).set({
                    nombre: result.user.displayName,
                    userId: result.user.uid,
                    createdAt: new Date().toISOString(),
                    handle: result.user.email.substring(0, 9)
                });
                console.log(result.credential.accessToken);
            }
            else{
                firebase.auth().currentUser.delete()
                console.log("No es valido, usa uno del tec perro")
            }
        })
        .catch(()=> {
            this.setState({mensajeSnackBar: "Esta cuenta ya existe, o hubo un error al crearla"})
            this.setState({visibleSnackBar: true});
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
                        <p>{this.props.descripcionEvento}</p>
                        <p><a  onClick={this.login}>Registrate!</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Evento