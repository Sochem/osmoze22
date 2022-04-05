import React from "react";
import "./udhyog.css";

const Events = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading preeventhead">ChemCoding</div>
        </div>
        <div className="container">
          <div className="upcoming-event-list">
            <div className="event-block last">
              <div className="row">
                <div className="col-lg-5 sec-2">
                  <img src="/assets/images/events/chemcoding.jpg" />
                </div>
                <div className="col-lg-7 sec-3">
                  <div className="title">About The Event</div>
                  <div className="sort-story">
                    Coding is arguably one of the most important skills for
                    current as well as future generations to learn that would be
                    an important part of one's carrer in the long run. Osmoze is
                    back with the opportunity to test your skills through an
                    exhilarating coding event, ChemCoding.
                    <br></br> <br></br>
                    <div className="title">Announcement</div>
                    <div className="sort-story">
                      ChemCoding is open only for sochem registered members. It
                      is an individual event.
                      <br></br>
                      <br></br>
                      Date: 5th April 2022<br></br>
                      Time: 5:00 P.M.<br></br>
                      <br></br>
                      <a
                        href="https://forms.gle/83QZT7YxScSCuArPA"
                        target="_blank"
                      >
                        <button className="register"> Register</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
