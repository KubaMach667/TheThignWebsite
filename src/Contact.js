import "./App.css";
import App from "./App";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom" ;

export default function Contact({language}) {
  return (
    <div class="Contact">
    {language=="polski" && <div>Feel free to write about any topic: <br/>   machnicki.music@gmail.com</div> }
         {language=="english" && <div> Kontakt odnośnie czegokolwiek: <br/>   machnicki.music@gmail.com</div> } <br/>
  Facebook/Instagram: tba

    </div>
  );
}

