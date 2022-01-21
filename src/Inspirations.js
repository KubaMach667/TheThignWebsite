import "./App.css";
import React from "react";
import InspirationMusic from "./assets/TopsterMusic.png";
import InspirationMovies from "./assets/TopsterMovies.jpg";

export default function Inspirations({language}) {
  return (
    <div>
         <div className="subheader"> 
         {language=="polski" && <div> Inspirations  </div> }
         {language=="english" && <div> Inspiracje </div> }</div>  
         <div className="TopsterText">
         {language=="polski" && <div> Records/movies which are 
        my favourite and influence me the most. I'd say the top 15 stays the same, 
        the rest changs on a weekly basis dependig on my mood and what I listened to most recently.
        In 6 months 1/2 of this list could be completely different as there is an infinite ammount
        of music left for me to discover. I see the first 4 rows (particularly top 10) as monoliths of magnitude
        I can't even dream reaching. Most of albums on this list changed how
        I percieved not only art but also politics, philosophy and myself. - kuba
        <br></br>  <br></br> if the photos are illegible just open them in another tab/download them, they are hi-res  </div> }
        {language=="english" && <div> Płyty/filmy które są moimi ulubionymi i wywarły na mnie największy wpływ. Powiedziałbym, że top 15 jest stałe
       a reszta zmienia się średnio co tydzień ze względu na mój humor oraz to czego słuchałem ostatnio.
      Za pół roku połowa tej listy może się kompletnie zmienić, ponieważ pozostała mi nieskończona ilość muzyki do odkrycia.
      Pierwsze cztery rzędy (szczególnie top 10) to monolity tak wielkie, że nawet nie potrafię sobie nawet wyobrazić 
       wejścia na taki poziom artystyczny. Większość albumów na tej liście zmieniło nie tylko to jak odbieram sztukę, ale również politykę, filozofię oraz siebie. - kuba
        <br></br>  <br></br> jeżeli zdjęcia są nieczytelne, polecam odpalić w nowej karcie/pobrać, są one w wysokiej rozdzielczości  </div> }
       </div>
        <div><img src={InspirationMusic} className="Topster"></img></div>
        <div><img src={InspirationMovies} className="Topster"></img></div>
    </div>
  );
}

