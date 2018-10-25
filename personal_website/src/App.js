import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
    return (
        <BrowserRouter>
            <div>
              <Navbar />
              <Switch>
                <Redirect exact path="/" to="/about" />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
