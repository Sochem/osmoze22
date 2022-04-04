import React from "react";
import "./udhyog.css";

const Events = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading preeventhead">Udyog</div>
        </div>
        <div className="container">
          <div className="upcoming-event-list">
            <div className="event-block last">
              <div className="row">
                <div className="col-lg-5 sec-2">
                  <img src="/assets/images/events/Udyog.png" />
                </div>
                <div className="col-lg-7 sec-3">
                  <div className="title">About The Event</div>
                  <div className="sort-story">
                    We are pleased to introduce you to another exciting
                    OSMOZE'22 event - "UDYOG." We are organising a variety of
                    events covering a wide range of profiles in order to bring
                    out the best in you. Udyog allows you to put yourself in the
                    shoes of a chemical engineer and attempt to understand and
                    analyse their role in various situations. You will be
                    provided with a problem statement featuring chemical
                    concepts. Circumstances and situations faced in a given
                    particular concept will be provided to you in the problem
                    statement and you are expected to submit a solution on how
                    to tackle those problems.
                    <br></br> <br></br>
                    <div className="title">Announcement</div>
                    <div className="sort-story">
                      {" "}
                      The shortlisted teams for PPT round are-<br></br>
                      1. Team Blemish<br></br>
                      2. Team Catalyst<br></br>
                      3. Team Achilles<br></br>
                      The deadline for PPT submission is 6th April EOD
                      <br></br>
                      <br></br>
                      <a
                        href="https://drive.google.com/file/d/1HsSymd6LSLlif0rS-zzIX6K2BYkOXIKF/view?usp=drivesdk"
                        target="_blank"
                      >
                        <button className="register">Problem Statement</button>
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
