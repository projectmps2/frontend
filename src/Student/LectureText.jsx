import "./Home.css"
import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import "./Lecture.css"
import Lecture from './Lecture'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
  
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
          <div className='form-center'>
            Descriere materie: {this.state.body.description}
            <br />
            Profesor: {this.state.body.owner.user.name}
            <br />
            Mail: {this.state.body.owner.user.email}
          </div>
          <Button variant="contained"
            style={{
              backgroundColor: "#21b6ae",
              color: "white",
              }}
            startIcon={<ArrowBackIcon />}
            onClick={this.comeBack.bind(this)}
          />
        </div>);

      }
      return <div><Button> Not loaded</Button></div>

    }

  }
  
  export default LectureText;