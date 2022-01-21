import "./App.css";
import App from "./App";
import React from "react";

export default function Music({language}) {
  return (
    <div>
    <div className="subheader">
      
    {language=="polski" && <div> Music </div> }
         {language=="english" && <div> Muzyka </div> }
    </div>  
    <div className="TopsterText">

      {language=="polski" && <div>  Right now we are sitting on 5 pieces of music + 4 interludes that go between them.
       This is what our setlist consists of right now, and probably will until we get to record 
       and release an album which I titled tentatively  "The Shape of The Thing to Come". 
      Of course, those recordings will include many of our friends as guest musicians, 
      whom we met along our musical journey.  I want the record to be more 'orchestral' and instrumentally versitile than what we do live. 
      Back to the songs. 'The Main Five' pieces, range in length from 6 to 15 minutes. 
      Interludes are 2-3 minutes long. Right now I am constantly looking for new ways to make the interludes more 'playable', in terms of how I shape their sound live.</div> }
    
      {language=="english" && <div>  W tym momencie mamy 5 głównych utworów plus 4 przejścia między.
     Te utwory będą naszą setlistą dopóki nie nagramy i wydamy albumu, który tymczasowo nazwałem  "The Shape of The Thing to Come". 
     Oczywiście, nagrnaia te będą zawierć gościnne występy wielu naszych przyjaciół, których poznaliśmy w trakcie muzycznych podróży. Utwory "Głównej Piątki", trwają od 6 do 15 minut. Przejścia między nimi, od dwóch do trzech.
     Obecnie, jednym z moich głównych celów jest znalezienie sposobu na to, aby przejścia były bardziej "grywalne", chcę mieć większy wpływ na ich brzmienie na żywo.
    </div> }
     
      {<br/>}{<br/>}
      {language=="polski" && <div>   I also have a song that's about 30 minutes in length in my 
      head that starts to unravel, but it might take me another 6 
      months to fully grasp the structure and the sound of it. 
      Then, it might get dropped if I find it boring.</div> }
     
      {language=="english" && <div> Z tyłu głowy mam utwór, który trwa około 30 minut, ale jego obraz dopiero mi się odsłania
        . Możliwe, że uchwycenie tego utworu zajmie mi kolejne 6 miesięcy. Wtedy, nie zdziwiłbym się jeżeli porzuciłbym go przez uznanie go za nudny.</div> }
      {<br/>}{<br/>}




      {language=="polski" && <div>  Of course, that's not everything that has been written 
      for this band as of now, but I don't feel comfortable with 
      playing extremaly unrefined music live. I prefer playing 60 minutes
       of well-rehearsed and thought-out music, than playing for 
       100 minutes with 40 minutes of the show being extreme mediocrity at best.</div> }

       {language=="english" && <div>  Oczywiście nie jest to całość muzyki napisanej tego zespołu, ale nigdy nie będę czuć się komfortowo z graniem ekstremalnie surowych wersji utworów. Wolę grać 60 minut dobrze przećwiczonej oraz przemyślanej muzyki, niż 
      grać przez 100 minut z 40toma minutami będącymi w najlepszym wypadku przeciętnymi  </div> }
     

       {language=="polski" && <div>   {<br/>}{<br/>}
      The Thing is:{<br/>}{<br/>}
      Kuba Machnicki - creative direction, arrangements, guitar, keys, samples  {<br/>}
      Janek Tomaszewski - lyrics, vocals,  guitar{<br/>}
      Adam Kleszcz - bass{<br/>}
      Marcel Kowalczyk - drums{<br/>}</div> }

      {language=="english" && <div>   {<br/>}{<br/>}
      The Thing to:{<br/>}{<br/>}
      Kuba Machnicki - kieruek kreatywny, aranżacje, gitara, klawisze, sample  {<br/>}
      Janek Tomaszewski - teksty, wokal,  gitara{<br/>}
      Adam Kleszcz - bas{<br/>}
      Marcel Kowalczyk - perkusja{<br/>}</div> }
    
    </div>
    </div>
  );
}

