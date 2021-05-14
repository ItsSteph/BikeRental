import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './BookingInformation.css'




function BookingInformation() {
    return (
      <div>
        <body className="body-about">
                <h1 className="h1-about">
                    Din information
                </h1>
                <div className="vid">
                    <form action="/action_page.php">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label for="phone">Mobilnummer</label>
                        <input type="tel" id="text" name="tel" placeholder="0XX XXX-XX-XX" />

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="mail@mail.com" />

                        <label for="cykeltyp">Cykeltyp</label>
                        <select id="cykeltyp" name="cykeltyp">
                            <option value="Mountainbike">Mountainbike</option>
                            <option value="Elcykel">Elcykel</option>
                            <option value="Stadscykel">Stadscykel</option>
                        </select>

                        <label for="antal">Antal</label>
                        <input type="number" id="antal" name="antal" /><br />

                        <label for="rent">Hyras från:</label>
                        <input type="date" id="rent" name="rent" />

                        <label for="lämnar">Inlämningsdatum: </label><br />
                        <input type="date" id="dropdate" name="dropdate" value /><br /><br />

                        <label for="confirmation">Send confirmation via email </label>
                        <input type="checkbox" id="email" name="email" value="" /><br />

                        <label for="confirmation">Send confirmation via Sms </label>
                        <input type="checkbox" id="email" name="email" value="" /><br />

                        <input type="submit" id="submit" name="Submit" value="Boka" />
                    </form>
                </div>
            </body>
        </div>
    );
}
export default BookingInformation;