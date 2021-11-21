import React, {Component} from 'react';
import QRscanText from './QRscanText';

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

    createAttendance = async (id, course, date) =>{
        const url = "http://127.0.0.1:8000/attendance";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({student_id: id, name: course, date})
        });

        console.log("Post with json: " + JSON.stringify({student_id: id, name: course, date}));
     
        const data = await response.json( );
    
        console.log(data);
     };

    handleConfirm = (event) => {
        if (this.state.course !== 'default') {
            this.createAttendance(3, this.state.course, new Date().toLocaleString());
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