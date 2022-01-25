import "./App.css";

import React from "react";
import Show1 from "./assets/photoBNW.png";


export default function Shows({language}) {
  return (
    <div>
        <div className="subheader">Shows</div>  
        <div className="image"><img src={Show1} className="image"/></div>
        <div className="showtext">
        {language=="polski" && <div> Show#0, Sosnowiec, Komin Cafe </div> }<br></br>
        {language=="polski" && <div> Well, well, show #0. Went 'not good enough', though musically acceptable, technicalities were one of our shortcomings. Half of my samples did not go off, I didn't supervise the mix 
        enough, resulting in guitars being to quiet. Also I was quite suprised at the volume, 'the noise section' at our rehersals was louder than the show, which I REALLY  REALLY REALLY dislike.    
        I am the only person in the band who is dissapointed by the show. I do have the recording of the whole show, but I doubt the full concert will ever see the light of the day. Right now I am contemplating releasing the 2 songs that went the best. 
        Took thorough notes of this 'half-failure' and will try to fix as many mistakes as possible before proper show#1, which  is to contain the dark ambient interludes. The main set will be the same, although 'Swarm' might get extended by a musique concrète section. To end on a positive note: all but one person present at the show seemed to have liked it.
        <br></br><br></br>Also, when I have time I will fix the responsiveness on the website which is long due.  </div> }
        {language=="english" && <div> Koncert#0, Sosnowiec, Komin Cafe </div> }<br></br>
        {language=="english" && <div>A więc koncert#0. Poszedł 'niewystarczająco dobrze', pomimo bycia muzycznie akceptowalnym, zostaliśmy rozłożeni przez techniczności (w 90% z mojej winy). Połowa moich sampli się nie odpalila, Nie dopilnowałem miksu, przez co gitary były troszkę za cicho.
          Również, zdziwiła mnie głośność, 'sekcje noisową' w trakcie prób czuję na swojej klatce piersiowej, w trakcie koncertu była głośna, ale nie wystarczająco co mi się bardzo bardzo nie podobało.  
      Jestem jedyną osobą w zespole rozczarowaną kocertem. Posiadam pełne nagranie koncertu, ale wąpie żeby cały koncert ujrzał kiedyś światło dzienne. W tym momencie rozważam upublicznienie dwóch utworów które poszły najlepiej.
       Zebrałem wnikliwe notatki z tej 'pół-porażki' i postaram się naprawić jak najwięcej błędów jak to możliwe przez właściwym Koncertem#1, który będzie zawierać dark ambientowe interludy. Główny set pozostanie taki sam, chociaż 'Swarm' może zostać rozszerzone o sekcje musique concrète. Aby skończyć na pozytywnym akordzie: wydaje mi się, że każdej obecnej osobie oprócz jednej, podobał się koncert.
        <br></br><br></br>Również, kiedy będę mieć czas, naprawie responsywność na stronie, co powinienem zrobić dawno temu.</div> }
         
         <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
       
    </div>
  );
}

