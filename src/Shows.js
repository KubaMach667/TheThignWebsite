import "./App.css";

import React from "react";
import Show1 from "./assets/show1.jpg";


export default function Shows() {
  return (
    <div>
        <div className="subheader">Shows</div>  
        <div className="image"><img src={Show1} className="image"/></div>
        <div>
          <br/>
       LOREM IPSUM    LOREM IPSUM    LOREM IPSUM    LOREM IPSUM 
        </div>
        
    </div>
  );
}

