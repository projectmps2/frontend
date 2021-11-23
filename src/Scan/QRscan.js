import React, {Component} from 'react';
import QRscanText from './QRscanText';
import AuthProvider from '../authenticationProvider';

class QRscan extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,
            course: 'default',
            courseList: null,
            confirmed: false
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleSelect = (event) => {
        this.setState(() => ({
            course: event.target.value
        }))
    };

    getUserByEmail = async (email) => {
        const url = "http://127.0.0.1:8000/students/" + email;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        });
    
        const data = await response.json( );
        console.log("User: " + data);

        return data;
    }

    escapeRegExp(string) {
        return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    }

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    }

    createAttendance = async (course, date) =>{
        const obj = await this.getUserByEmail(this.replaceAll(encodeURIComponent(new AuthProvider().getEmail()), ".", "%dot%"));
        const url = "http://127.0.0.1:8000/attendance";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({student_id: obj.user.id, name: course, date})
        });
        console.log(obj);
        const data = await response.json( );
    
        console.log(data);
     };

    handleConfirm = (event) => {
        if (this.state.course !== 'default') {
            this.createAttendance(this.state.course, new Date().toLocaleString());
            this.setState(() => ({
                confirmed: true
            }));
        }
    };

    async getcourseList() {
        const url = "http://127.0.0.1:8000/courses";
        const response = await fetch(url);
        const data = await response.json();
        let names = data.map(course => course.name);
        return names;
      }
  
      async componentDidMount() {
          let courses = await this.getcourseList();
          console.log(courses);
          this.setState(() => ({
              courseList: courses
          }));
      };


    render() {
        return(
            this.state.loggedIn ? 
                <QRscanText handleSelect={this.handleSelect} 
                    course={this.state.course}
                    courseList={this.state.courseList}
                    handleConfirm={this.handleConfirm}
                    confirmed={this.state.confirmed}
                /> : <div>{"Please log in ..."}</div>
        );          
    }
}
 
export default QRscan;