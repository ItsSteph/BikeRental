import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Heading.css'

function Heading() {
  return (
    <div>
      <body>
      <div>
        <img className="background-image"
                 src="https://images.pexels.com/photos/977962/pexels-photo-977962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="The Bike" />
            <div className="display-left standard-padding">
                <div className="container">
                    <h2><i className="margin-right"></i>HYRA EN CYKEL</h2>
                </div>
                <div class="container-white padding-16">
                    <form action="/action_page.php" target="_blank">
                        <div className="padding-row">
                            <div className="">
                                <label>
                                    <i class="fa fa-calendar icon" ></i>
                                    Startdatum</label>
                                <input class="input" type="date" placeholder="DD MM YYYY" name="StartDate" required />
                            </div>
                            <div class="w3-half">
                                <label><i class="fa fa-calendar icon"></i> Slutdatum</label>
                                <input class="input" type="date" placeholder="DD MM YYYY" name="EndDAte" required /> 
                          </div> <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div class="dropdown" >
                            <label><i class="fa fa-bicycle icon"></i> Cykeltyp</label>
                            <br />
                                <select id="cykeltyp" name="cykeltyp">
                                    <option value="Stadscykel">Stadscykel</option>
                                    <option value="Mountainbike">Mountainbike</option>
                                    <option value="Elcykel">Elcykel</option>
                                    <option value="Barncykel">Barncykel</option>
                                </select>
                            </div>
                            <div class="">
                                <label><i class="icon"></i> Antal</label>
                                <input class="" type="number" value="0" name="bikeNrs" min="0" max="6" />
                            </div>
                <button className="button" type="submit" style={{ backgroundColor: "#3f51b5"}}><i className=" margin-right"></i> SÖKA</button>
                    </form>
                </div>
            </div>
        </div>
        </body>
    </div>
        );
}
export default Heading;
    