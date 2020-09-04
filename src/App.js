import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';
// Redux
import { Provider } from 'react-redux';
import store from './src1/redux/store';
import { SET_AUTHENTICATED } from './src1/redux/types';
import { logoutUser, getUserData } from './src1/redux/actions/userActions';
//Components
import themeObject from './src1/util/theme';
import AuthRoute from './src1/util/AuthRoute';
import Navbar from './r_components/navigation/MainNav';

// Pages
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Eventos from './components/Eventos';
import ApoyoEstudiantil from './components/ApoyoEstudiantil';

import home from './src1/pages/home';
import login from './src1/pages/login';
import signup from './src1/pages/signup';
import user from './src1/pages/user';

import axios from 'axios';

const theme = createMuiTheme(themeObject);


const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}


class App extends React.Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router >
            <Navbar/>
              <Switch>
                <Route path = {"/"} exact component = {Home}/>
                <Route path = {"/Nosotros"} component = {Nosotros}/>
                <Route path = {"/Eventos"} component = {Eventos}/>
                <Route path = {"/ApoyoAcademico"} component = {home}/>
                <Route path = {"/ApoyoEstudiantil"} component = {ApoyoEstudiantil}/>
                <AuthRoute path={"/login"} component={login} />
                <AuthRoute path={"/signup"} component={signup} />
                <Route path={"/users/:handle"} component={user} />
                <Route
                  exact
                  path="/users/:handle/apoyo/:apoyoId"
                  component={user}
                />
              </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
