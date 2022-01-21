import "./App.css";
import { lang } from "./lang.js";
import React from "react";
import {
  BrowserRouter as Router,
 
  Link
} from "react-router-dom";

export default function MainPage({language}) {
  return (
    <div className="app">
      <div>
      <div>  <Link to="/music" style={{ textDecoration: 'none' }}> <div className="router">{language=="polski" && <div> Music  </div> }  {language=="english" && <div> Muzyka </div> } </div></Link> </div>
      <div> <Link to="/shows" style={{ textDecoration: 'none' }}> <div className="router">{language=="polski" && <div> Shows  </div> }  {language=="english" && <div> Koncerty </div> } </div></Link> </div>
      <div> <Link to="/contact" style={{ textDecoration: 'none' }}> <div className="router">{language=="polski" && <div> Contact/Socials  </div> }  {language=="english" && <div> Kontakt/Sociale </div> }</div></Link> </div>
      {/* <div> <Link to="/updates " style={{ textDecoration: 'none' }}> <div className="router">{language=="polski" && <div> Updates  </div> }  {language=="english" && <div> Aktualności </div> } </div></Link>  </div> */}
      <div> <Link to="/inspirations" style={{ textDecoration: 'none' }}> <div className="router">{language=="polski" && <div> Inspirations  </div> }  {language=="english" && <div> Inspiracje </div> } </div></Link>  </div>
     
      </div>

    </div>
  );
}

