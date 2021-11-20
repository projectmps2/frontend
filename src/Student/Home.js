import React, { Component } from "react";
import Status from "./Status";
import HomeText from "./HomeText";
import Lecture from "./Lecture";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pageSelector: 0,
    };
    this.handle = this.handle.bind(this);
  }

  // handle = (index) => {
  //     this.setState({pageSelector: index});
  // }

  handle(index) {
    this.setState({ pageSelector: index });
  }

  render() {
    if (this.state.pageSelector === 1) {
      return <Status onHandle={this.handle} />;
    } else if (this.state.pageSelector === 2) {
      console.log(this.state.pageSelector);
      return <Lecture onHandle={this.handle} />;
    }
    // passing vars to jsx
    // return(<HomeText pageSelectorHandle={this.handle.bind(this)}/>);
    return <HomeText pageSelectorHandle={this.handle} />;
  }
}

export default Home;
