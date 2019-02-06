import React from "react";
import "./Footer.css";
import { CardPanel } from 'react-materialize';

function Footer () {
    return (
        
       <footer className= "footer col-md-12 text-center">
            <CardPanel
                className="bottom"> Clicky <img alt="react" src="https://clicky-game.netlify.com/assets/images/react.svg"/>  Game! </CardPanel>
     </footer>
     
    );
}
export default Footer;
