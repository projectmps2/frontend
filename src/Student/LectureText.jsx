import {
    BrowserRouter as Router,
  } from "react-router-dom";
  import { Button } from "@material-ui/core";
  import { Box } from "@material-ui/core";
  import "./Home.css"
  
  
  const LectureText = ( props ) => ( 
    <>
    <Router>
    <Box textAlign='center' position='relative' top='300px'>
      <Button
        style={{
            backgroundColor: "#21b6ae",
            color: "white"}}
           variant="contained" size="large" color="secondary"
        onClick={()=>props.pageSel(21)}> Materia 1 
      </Button> <br />
      <Button className='distance' style={{
        backgroundColor: "#21b6ae",
        color: "white"}}
       variant="contained" size="large" color="secondary"
        onClick={()=>props.pageSel(22)}> Materia 2 </Button> <br />
      </ Box>
    </Router>
    </>
  );
  
  export default LectureText;