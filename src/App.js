import "./App.css";
import Music from "./Music";
import Shows from "./Shows";
import React from "react";
import Contact from "./Contact";
import Inspirations from "./Inspirations";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./MainPage";

export default function App() {

  const [language, setLanguage] = useState("polski");

  function handleSetLanguage() {
    if (language=="polski")
    setLanguage("english");
    else setLanguage("polski");
  }

  
  return (
    <div className="container">
    <div className="app">
     
    <div className="langSwitch" onClick={handleSetLanguage}>{language}</div> 
    <Router>
    <div> <Link to="/" style={{ textDecoration: 'none' }}><div className="header">THE THING</div></Link> </div>
      <div>
        <Routes>
          <Route exact path="/music"  element={<Music language={language}/>}>
          </Route>
          <Route  exact path="/shows" element={<Shows language={language}/>}>
          </Route>
          <Route  exact path="/inspirations" element={<Inspirations language={language}/>}>
          </Route>
          <Route  exact path="/contact" element={<Contact language={language}/>}>
          </Route>
          <Route exact path="/" element={<MainPage language={language}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    <div class="footer">© Maintained by Kuba Machnicki 2021</div>
    </div>
    </div>
  );
}

