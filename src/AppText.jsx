import Home from "./Student/Home";
import HomeProfessor from './Professor/HomeProfessor';


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
    {/* < HomeProfessor /> */}
  </>
);


export default AppText;