import React, { Component } from "react";
import Status from "./Status";
import HomeText from "./HomeText";
import Lecture from "./Lecture";
import { Button } from "@material-ui/core";
import { AuthProvider } from '../authenticationProvider'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSelector: 0
    };
    this.handle = this.handle.bind(this);
  }

  handle(index) {
    this.setState({ pageSelector: index });
  }

  render() {
      if (this.state.pageSelector === 1) {
        return <Status onHandle={this.handle} />;
      } else if (this.state.pageSelector === 2) {
        return <Lecture onHandle={this.handle} />;
      }
      // passing vars to jsx
      // return(<HomeText pageSelectorHandle={this.handle.bind(this)}/>);
      return <HomeText pageSelectorHandle={this.handle} logoutCallback={() => {
        this.props.logoutCallback();
      }}/>;
  }
}

export default Home;
