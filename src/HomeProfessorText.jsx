import {
    BrowserRouter as Router
  } from "react-router-dom";
  import { Button } from "@material-ui/core";
  import { Box } from "@material-ui/core";

  const MeniuProfessorText = ( props ) => ( 
    <>
    <Router>
    <Box textAlign='center'>
      <Button
        style={{
          top: 250, 
          backgroundColor: "#21b6ae", 
          color: "white"}}
        justifyContent="center" variant="contained" size="large" 
        onClick={()=>props.changePage(11)}> Configurare materie 
      </Button> <br />
      <Button style={{
        top: 255,
        backgroundColor: "#21b6ae",
        color: "white"}}
      justifyContent="center" variant="contained" size="large"
      onClick={()=>props.pageSelectorHandle(2)}> Setare orar </Button> <br />
      <Button style={{
        top: 260,
        backgroundColor: "#21b6ae",
        color: "white"}}
      justifyContent="center"variant="contained" size="large" color="secondary"
      onClick={()=>props.pageSelectorHandle(3)}> Generare statistica </Button> <br />
      <Button style={{
        top: 265,
        backgroundColor: "#21b6ae",
        color: "white"}}
      justifyContent="center" variant="contained" size="large" color="secondary"
      onClick={()=>props.pageSelectorHandle(4)}> Generare cod QR</Button>
      <br />
      <Button style={{
        top: 270,
        backgroundColor: "#21b6ae",
        color: "white"}}
      justifyContent="center" variant="contained" size="large" color="secondary"
      onClick={()=>props.pageSelectorHandle(4)}> Export prezenta</Button>
      </ Box>
    </Router>
    <header>
    </header> 
    <body>
    </body>
    </>
  );
  
  export default MeniuProfessorText;