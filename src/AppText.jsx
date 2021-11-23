import React, {Component} from 'react';
import Home from "./Student/Home";
import HomeProfessor from './Professor/HomeProfessor';
import QRscan from "./Scan/QRscan";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { AuthProvider } from './authenticationProvider';

class AppText extends Component {
  constructor() {
    super();
    this.interval = 0;
    this.state = {
      timeHash: Math.floor(Date.now() / 1000 / 60),
      role: "student"
    };
  }

  escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }

  getUserRole = async (email) => {
    const url = "http://127.0.0.1:8000/users/" + email;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    console.log("User: " + data);

    return data.role;
  }

  regenerateHash() {
    this.setState(() => ({
      timeHash: Math.floor(Date.now() / 1000 / 60)
    }));
  }
  
  async componentDidMount() {
    const role = await this.getUserRole(
      this.replaceAll(encodeURIComponent(new AuthProvider().getEmail()), ".", "%dot%")
    );
    this.setState(() => ({
      role: role
    }));
    this.interval = setInterval(() => this.regenerateHash(), 15000);
    console.log(this.state.timeHash)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return ( 
      <>
        <Router>
          <Switch>
            <Route path={'/' + this.state.timeHash.toString()}><QRscan /></Route>
            <Route exact path="/">
              {this.state.role === "student" ?
                <Home logoutCallback={() => {
                  this.props.logoutCallback();
                }}/> :
                <HomeProfessor logoutCallback={() => {
                  this.props.logoutCallback();
                }}/>
              }
            </ Route>
          </Switch>
        </ Router>
      </>
    )
  }
};


export default AppText;