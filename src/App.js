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

  // getAttendances = async () => {
  //   const url = "http://127.0.0.1:8000/attendance"
  //   const response = await fetch(url);
  //   const data = await response.json();

  //   return data.map(
  //     at => ({course: at.course.name, date: new Date(at.date)})
  //   );
  // }

  // formatAttendanceData(course, data) {
  //   const atts = data.filter(att => att.course === course).sort((a1, a2) => a1.date < a2.date ? -1 : 1);
  //   var dayDict = {};

  //   atts.forEach(att => {
  //     var dictDate =  att.date.getFullYear() + "/" + att.date.getMonth() + "/" + att.date.getDay();
  //     if (dictDate in dayDict) {
  //       dayDict[dictDate].push(att);
  //     } else {
  //       dayDict[dictDate] = [att];
  //     }
  //   });

  //   const toMin = (att) => {
  //     return Math.floor(att.date.getTime() / 1000 / 60);
  //   }

  //   var sumDict = {};
  //   var entryList = [];

  //   for (const [key, list] of Object.entries(dayDict)) {
  //     var sum = 0, sums = [];
  //     var startMin = toMin(list[0]);
  //     var currMin = toMin(list[0]);
  //     for (const att of list) {
  //       currMin = toMin(att);
  //       if (currMin - startMin < 5) {
  //         sum++;
  //       } else {
  //         sums.push(sum);
  //         sum = 1;
  //         startMin = toMin(att);
  //       }
  //     }
  //     sums.push(sum);
  //     sumDict[list[0].date.toDateString()] = sums;
  //     entryList.push({date: list[0].date.toDateString(), attendances: sums});
  //   }

  //   return entryList;
  // }

  // async componentDidMount() {
  //   const attData = await this.getAttendances();
  //   console.log(attData);
  //   const graphData = this.formatAttendanceData("UBD", attData);
  //   console.log(graphData);
  // }

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