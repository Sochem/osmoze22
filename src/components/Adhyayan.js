import React from "react";
import "./udhyog.css";

const Events = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading preeventhead">Adhyayan</div>
        </div>
        <div className="container">
          <div className="upcoming-event-list">
            <div className="event-block last">
              <div className="row">
                <div className="col-lg-5 sec-2">
                  <img src="/assets/images/events/adhyayan.jpg" />
                </div>
                <div className="col-lg-7 sec-3">
                  <div className="title lineh">About The Event</div>

                  <div className="sort-story">
                    Adhyayan is a business case study competition that involves
                    strategizing about the corporate picture at a higher level.
                    It'll be a fun but challenging problem statement about a
                    really successful enterprise.
                    <br></br> <br></br>
                    <div className="title">Announcement</div>
                    <div className="sort-story">
                      You can participate in teams of 2-3 people. Prizes are
                      worth upto 4.5K.
                      <b>Registrations are open till 1st April EOD.</b>
                      <br></br>
                      <br></br>
                      <a
                        href="https://forms.gle/HkyoR1fuctY4svLa6"
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
