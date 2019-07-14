import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import DataIndex from './pages/DataIndex'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App  = () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ='/' component = {DataIndex}/>
        <Route exact path ='/Login' component = {Login}/>
        <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  );

   
}


export default App;
