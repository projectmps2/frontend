import "./Home.css"
import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import "./Lecture.css"
  
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

    render() {
      if(this.state.body != null) {
        return (<div className='form-center'>
          Descriere materie: {this.state.body.description}
          <br />
          Profesoer: {this.state.body.owner.user.name}
          <br />
          Mail: {this.state.body.owner.user.email}
          </div>); 
      }
      return <Button> Not loaded</Button>

    }

  }
  
  export default LectureText;