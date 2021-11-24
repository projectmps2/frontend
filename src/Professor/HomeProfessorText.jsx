import {
    BrowserRouter as Router
  } from "react-router-dom";
  import { Button } from "@material-ui/core";
  import { Box } from "@material-ui/core";
  import './HomeProfessor.css'

  const MeniuProfessorText = ( props ) => ( 
    <>
    <Router>
    <Box className='center-menu' textAlign='center' position='relative' top='200px'>
      <Button
        style={{
          backgroundColor: "#21b6ae", 
          color: "white"}}
          variant="contained"
          size="large" 
        onClick={()=>props.changePage(11)}> Configurare materie 
      </Button> <br/>
      <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white"}}
        variant="contained" size="large"
      onClick={()=>props.changePage(12)}> Setare orar </Button> <br />
      <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white"}}
      variant="contained" size="large" color="secondary"
      onClick={()=>props.changePage(13)}> Generare statistica </Button> <br />
      <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white"}}
       variant="contained" size="large" color="secondary"
      onClick={()=>props.changePage(14)}> Generare cod QR</Button> <br />
      <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white"}}
       variant="contained" size="large" color="secondary"
      onClick={()=>props.changePage(15)}> Export prezenta</Button> <br />
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
  
  export default MeniuProfessorText;