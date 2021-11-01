import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Status from './Status';
import App from "./App";
import { Button } from "@material-ui/core";
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { withThemeCreator } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const HomeText = () => ( 
  <>
  <Router>
  <Box textAlign='center'>
    <Button
      style={{
        top: 250, 
        backgroundColor: "#21b6ae", 
        color: "white"}}
      justifyContent="center" variant="contained" size="large"> Status 
    </Button> <br />
    <Button style={{
      top: 255,
      backgroundColor: "#21b6ae",
      color: "white"}}
    justifyContent="center" variant="contained" size="large"> Managementul proiectelor </Button> <br />
    <Button style={{
      top: 260,
      backgroundColor: "#21b6ae",
      color: "white"}}
    justifyContent="center"variant="contained" size="large" color="secondary"> Statistica prezenta </Button> <br />
    <Button style={{
      top: 265,
      backgroundColor: "#21b6ae",
      color: "white"}}
    justifyContent="center" variant="contained" size="large" color="secondary"> Scanare cod QR</Button>
    </ Box>
    {/* <Route path="/status"><Status /></Route> */}
  </Router>
  <header>
  </header> 
  <body>
  </body>
  </>
);

export default HomeText;