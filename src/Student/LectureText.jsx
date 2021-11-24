import "./Home.css"
import React, {Component} from 'react'
import {Button, Box} from '@material-ui/core/';
import "./Lecture.css"
import Lecture from './Lecture'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StatisticsStudent from "./StatisticsStudent";
  
  class LectureText extends Component {
    constructor(props) {
      super(props);
      this.state = {
        body: null,
      }
    }

    async componentDidMount() {
      var urlCustomize = this.props.courseName;
      var url
      if(urlCustomize !== null) {
        url = 'http://localhost:8000/courses/'+ urlCustomize;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({body: data})
      }
    }

    comeBack() {
      this.props.comeBack();
    }

    render() {
      if(this.state.body != null) {
        return (
        <div>
          <Button variant="contained"
            style={{
              backgroundColor: "#21b6ae",
              color: "white",
              }}
            startIcon={<ArrowBackIcon />}
            onClick={this.comeBack.bind(this)}
          />
          <Box textAlign='center' position='relative' top='200px'>
            Descriere materie: {this.state.body.description}
            <br />
            Profesor: {this.state.body.owner.user.name}
            <br />
            Mail: {this.state.body.owner.user.email}
            <br />
            Orar: {this.state.body.date}
            <br /><br /><br />
            <StatisticsStudent />
          </Box>
        </div>);

      }
      return <div><Button> Not loaded</Button></div>

    }

  }
  
  export default LectureText;