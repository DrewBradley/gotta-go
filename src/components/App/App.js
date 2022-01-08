import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from '../NavBar/NavBar'
import Map from '../Map/Map'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>

        <Switch>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
