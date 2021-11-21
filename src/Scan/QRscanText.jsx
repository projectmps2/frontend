import {
    BrowserRouter as Router,
  } from "react-router-dom";
  import { Button, FormControl } from "@material-ui/core";
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';
  import { Box, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Component } from "react";
  
  
  class QRscanText extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <>
        <Router>
        {this.props.confirmed ?  <Box paddingLeft='45%' textAlign='center' sx={{maxWidth: 300, minWidth: 120}} >
        <div>
          Attenndance confirmed!
        </div> 
        </Box> :
        <Box paddingLeft='45%' textAlign='center' sx={{maxWidth: 300, minWidth: 120}} >
            <Button
                style={{
                top: 250,
                backgroundColor: "#21b6ae", 
                color: "white"}}
                onClick={this.props.handleConfirm}
                justifyContent="center" variant="contained" size="large" > 
            Confirm Attendance 
          </Button> <br />
          <FormControl fullWidth style={{top: 130}}>
            <InputLabel id="course-select-label">Course</InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              label="Course"
              onChange={this.props.handleSelect}
            >
              {this.props.courseList ? this.props.courseList.map(courseName =>
                  <MenuItem value={courseName}> {courseName} </MenuItem>) :
                  <MenuItem value="Loading"> Loading.. </MenuItem>
              }
            </Select>
          </FormControl>
          </ Box>
        }
        </Router>
        </>
        )}
  };
  
  export default QRscanText;