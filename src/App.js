import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Navbar from './r_components/navigation/MainNav';

// Pages
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Eventos from './components/Eventos';
import ApoyoEstudiantil from './components/ApoyoEstudiantil';


class App extends React.Component {
  render(){
    return (
        <Router >
          <Navbar/>
            <Switch>
              <Route path = {"/"} exact component = {Home}/>
              <Route path = {"/Nosotros"} component = {Nosotros}/>
              <Route path = {"/Eventos"} component = {Eventos}/>
              <Route path = {"/Mentoría"} component = {ApoyoEstudiantil}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
