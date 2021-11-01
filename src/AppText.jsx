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
import {HomeText} from "./HomeText";
import Home from "./Home";

const AppText = () => ( 
  <>
    {/* <Router>
      <div>
      <Switch>
        <Route path="/status"><Status /></Route>
        <Route exact path="/"><Home /></ Route>
      </Switch>
      </ div>
    </ Router> */}
    {/* renuntam momentan la route */}
    <Home />
  </>
);


export default AppText;