import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import ApoyoAcademico from './components/ApoyoAcademico';
import Eventos from './components/Eventos';
import ApoyoEstudiantil from './components/ApoyoEstudiantil';


class App extends React.Component {
  render(){
    return (
        <Router > 
            <Switch>
              <Route path = {"/"} exact component = {Home}/>
              <Route path = {"/nosotros"} component = {Nosotros}/>
              <Route path = {"/blog"} component = {Eventos}/>
              <Route path = {"/proyectos"} component = {ApoyoAcademico}/>
              <Route path = {"/contacto"} component = {ApoyoEstudiantil}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
