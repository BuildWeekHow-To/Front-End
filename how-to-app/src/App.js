import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import LogInForms from './Components/Login';
import SignUp from "./Components/SignUp";
import { AddHowTo } from "./Components/AddHowTo";
import PrivateRoute from "./Components/PrivateRoute";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />


        <Switch>

          <PrivateRoute path='/add-how-to' component={AddHowTo} />
          {/* <PrivateRoute path='/dashboard' component={<Dashboard />} /> */}
          <Route path='/login' component={LogInForms} />
          <Route path='/signup' component={SignUp} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
