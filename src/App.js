import './App.css';
import React, {Component} from 'react';
import AppText from './AppText';

import { AuthProvider } from './authenticationProvider'
 

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