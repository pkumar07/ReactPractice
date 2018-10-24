import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <div>
              <Navbar />
              <Switch>
                <Redirect exact path="/" to="/about" />
                <Route path="/about" component={About} />
                <Route component={Error} />
              </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
