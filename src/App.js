import './App.css';
import {Switch, Route, Link, HashRouter } from "react-router-dom";
import Search from './Search';
import Home from './Home';
import React from 'react';
import ReproductorContext from './ReproductorContext';
import Bienvenida from './Bienvenida';

function App() {
 
  return (
    <ReproductorContext>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      <HashRouter>
        <header>
        <Link to="/Home">Home</Link>
        <Link to="/Search">Search</Link>
        </header>
        <Switch>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Bienvenida/>
          </Route>
        </Switch>
      </HashRouter>
    </ReproductorContext>

  );
}

export default App;
