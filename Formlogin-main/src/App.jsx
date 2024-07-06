// App.jsx
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Home from './screens/Home/Home'; // Проверьте, что путь к файлу Home.jsx указан правильно

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={Login} />
          <Route path="/register" render={(props) => <Register {...props} history={this.props.history} />} />
          <Route path="/home" component={Home} /> {/* Проверьте правильность пути и импорта */}
        </Switch>
      </BrowserRouter>
    );
  }
}
