import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";


const HomeText = ( props ) => ( 
  <>
  <Router>
  <Box textAlign='center'>
    <Button
      style={{
        top: 250, 
        backgroundColor: "#21b6ae", 
        color: "white"}}
      justifyContent="center" variant="contained" size="large" 
      onClick={()=>props.pageSelectorHandle(1)}> Status 
    </Button> <br />
    <Button style={{
      top: 255,
      backgroundColor: "#21b6ae",
      color: "white"}}
    justifyContent="center" variant="contained" size="large"
    onClick={()=>props.pageSelectorHandle(2)}> Managementul proiectelor </Button> <br />
    <Button style={{
      top: 260,
      backgroundColor: "#21b6ae",
      color: "white"}}
    justifyContent="center"variant="contained" size="large" color="secondary"
    onClick={()=>props.pageSelectorHandle(3)}> Statistica prezenta </Button> <br />
    <Button style={{
      top: 265,
      backgroundColor: "#21b6ae",
      color: "white"}}
    justifyContent="center" variant="contained" size="large" color="secondary"
    onClick={()=>props.pageSelectorHandle(4)}> Scanare cod QR</Button>
    </ Box>
  </Router>
  <header>
  </header> 
  <body>
  </body>
  </>
);

export default HomeText;