import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import './styles.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Signup from "./component/contentComponent/Signup"
import Login from "./component/contentComponent/Login"
import Home from './component/contentComponent/Home'
import Navbar from './Navbar'

function App() {

  return (  
  <Router>
    <Navbar/> 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
  
    </Switch>
  </Router>
     );
}

export default App
