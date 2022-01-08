import './App.css';
import { 
  BrowserRouter as Router, 
  Routes, 
Route } from "react-router-dom";

import NavBar from '../NavBar/NavBar'
import Map from '../Map/Map'

function App() {
  return (
      <Router>  
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/resources" />
            <Route path="/contact"/> 
            <Route path="/" exact component={Map} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
