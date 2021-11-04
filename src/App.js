import './App.css';
import React, {Component} from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Status from './Status';
import AppText from './AppText';
import Home from "./Home";

class App extends Component {

  constructor() {
    super();
    this.homeStudent=true;
    this.status=false;
  }

  onButtonClickedStatus() {
    this.status=true;
    console.log(this.status);
  };

  render() {
    if (this.homeStudent === true) {
      return (
        <AppText />
       );
    }
  }

}

export default App;