import './App.css';
import React, {Component, useEffect} from 'react';
import AppText from './AppText';
import { Button } from '@material-ui/core';

import { AuthProvider } from './authenticationProvider'
 

class App extends Component {

  constructor() {
    super();
    this.homeStudent=true;
    this.status=false;
    this.state = {
      loggedIn: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handle(index) {
    this.setState({ loggedIn: this.state.loggedIn });
  }

  login() {
    this.setState({
      loggedIn: true,
    });
  }

  logout() {
    this.setState({
      loggedIn: false,
    });
  }

  onButtonClickedStatus() {
    this.status=true;
    console.log(this.status);
  }

  render() {
    if (this.state.loggedIn) {
      return <AppText logoutCallback={() => {
        this.logout();
      }}/>
    } else {
      return <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white",
      }} 
      variant="contained" 
      size="large"
      onClick={()=> new AuthProvider().requestAuth(() => {
        this.login();
      }) }> Login </Button>
    }
    
  }

}

export default App;