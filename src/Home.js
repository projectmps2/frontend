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
import HomeText from './HomeText';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return(<HomeText />);
    }
}
 
export default Home;