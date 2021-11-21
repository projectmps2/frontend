import React, {Component} from 'react';
import Home from "./Student/Home";
import HomeProfessor from './Professor/HomeProfessor';
import QRscan from "./Scan/QRscan";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class AppText extends Component {
  constructor() {
    super();
    this.interval = 0;
    this.state = {
      timeHash: Math.floor(Date.now() / 1000 / 60)
    };
  }

  regenerateHash() {
    this.setState(() => ({
      timeHash: Math.floor(Date.now() / 1000 / 60)
    }));
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.regenerateHash(), 15000);
    console.log(this.state.timeHash)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return ( 
      <>
        <div>{this.state.timeHash}</div>
        <Router>
          <Switch>
            <Route path={'/' + this.state.timeHash.toString()}><QRscan /></Route>
            <Route exact path="/"><HomeProfessor logoutCallback={() => {
                this.props.logoutCallback();
            }}/></ Route>
          </Switch>
        </ Router>
        {/* renuntam momentan la route */}
        {/* <Home /> */}
        {/* < HomeProfessor /> */}
      </>
    )
  }
};


export default AppText;