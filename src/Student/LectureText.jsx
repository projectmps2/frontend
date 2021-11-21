import "./Home.css"
import React, {Component} from 'react'
import { Filter } from "@material-ui/icons";
  
  class LectureText extends Component {
    constructor(props) {
      super(props)
      this.state = {
        body: null,
      }
    }

    async componentDidMount() {
      const url = "http://localhost:8000/courses";
      const response = await fetch(url);
      const data = await response.json();
      const res = data.filter(obj => obj.name == this.props.v)
      this.setState({body: res})
    }

    render() {
      return(<div />);
    }

  }
  
  export default LectureText;