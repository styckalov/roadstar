import React from 'react';
import './App.scss';
import Home from "../Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "../Header/Header";
import Hotel from "../Hotel/Hotel";

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/hotel" component={Hotel}/>
        </Switch>
      </Router>
  );
}

export default App;
