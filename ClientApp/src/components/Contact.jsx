import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Contact.css'


function Contact() {
  return (
    <div>
        <body>
        <div id="contact">
            <h2>Kontakta oss</h2>
            <p>Om du har en fråga, tveka inte på att kontakta oss.</p>
            <i class="fa fa-map-marker" ></i> Redegatan 1H, 426 77 Västra Frölunda<br />
            <i class="fa fa-phone" ></i> 031 70 46 700<br />
            <i class="fa fa-envelope"></i> swebike@hotmail.com<br />
            <p><input type="text" placeholder="Namn" required name="Namn" /></p>
            <p><input type="text" placeholder="Email" required name="Email" size="100%" /></p>
            <p><textarea type="text" placeholder="Meddelande" required name="Meddalande" size="100%"></textarea></p>
            <p><button div class="button" type="submit" >SKICKA MEDDELANDE</button></p>

        </div>
        </body>

    </div>
      
      
      );

}
export default Contact;