import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import "./Home.css"



import { AuthProvider } from '../authenticationProvider'

const HomeText = ( props ) => ( 
  <>
  <Router>
  <Box textAlign='center' position='relative' top='300px'>
    <Button
      style={{
        backgroundColor: "#21b6ae", 
        color: "white"
      }} 
      variant="contained" 
      size="large" 
      onClick={()=>props.pageSelectorHandle(1)}> Profil 
    </Button> <br />
    <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white",
      }} 
      variant="contained" 
      size="large"
      onClick={()=>props.pageSelectorHandle(2)}> Materii </Button> <br />
      <br />
      <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white",
      }} 
      variant="contained" 
      size="large"
      onClick={()=> props.logoutCallback() }> Logout </Button>
    
    </ Box>
  </Router>
  <header>
  </header> 
  <body>
  </body>
  </>
);

export default HomeText;