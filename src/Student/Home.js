import React, { Component } from "react";
import Status from "./Status";
import HomeText from "./HomeText";
import Lecture from "./Lecture";
import { Button } from "@material-ui/core";
import { AuthProvider } from '../authenticationProvider'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pageSelector: 0,
      loggedIn: false,
    };
    this.handle = this.handle.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // handle = (index) => {
  //     this.setState({pageSelector: index});
  // }

  handle(index) {
    this.setState({ pageSelector: index, loggedIn: this.state.loggedIn });
  }

  login() {
    this.setState({
      pageSelector: this.state.pageSelector,
      loggedIn: true,
    });
  }
  logout() {
    this.setState({
      pageSelector: this.state.pageSelector,
      loggedIn: false,
    });
  }

  render() {
    if (this.state.loggedIn) {
      if (this.state.pageSelector === 1) {
        return <Status onHandle={this.handle} />;
      } else if (this.state.pageSelector === 2) {
        return <Lecture onHandle={this.handle} />;
      }
      // passing vars to jsx
      // return(<HomeText pageSelectorHandle={this.handle.bind(this)}/>);
      return <HomeText pageSelectorHandle={this.handle} logoutCallback={() => {
        this.logout();
      }}/>;
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

export default Home;
