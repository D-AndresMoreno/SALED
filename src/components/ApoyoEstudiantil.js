import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import navbar from '../r_components/Navbar'
import Footer from '../r_components/Footer'
import M from 'materialize-css'

import firebase from '../initiliazer/initializer'


class ApoyoEstudiantil extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            email: ""
        }

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
            <div>
                <a className="waves-effect waves-light btn-large"  onClick={this.login}>Button</a>
            </div>
        )
    }
    
}

export default ApoyoEstudiantil