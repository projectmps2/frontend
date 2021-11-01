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
  }

  render() {
    return (
     <AppText />
    );
  }

}

export default App;
