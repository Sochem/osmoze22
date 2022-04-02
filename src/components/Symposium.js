import React from "react";
import "./udhyog.css";

const Events = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading preeventhead">Symposium</div>
        </div>
        <div className="container">
          <div className="upcoming-event-list">
            <div className="event-block last">
              <div className="row">
                <div className="col-lg-5 sec-2">
                  <img src='/assets/images/events/Symposium.png'/>
                </div>
                <div className="col-lg-7 sec-3">
                  <div className="title lineh">About The Event</div>
                  
                  <div className="sort-story">
                  Want to have a good time while learning something new?? Osmoze'22 has you covered with its event "SYMPOSIUM" - A perfect opportunity to enhance your soft skills!!

                        <br></br> <br></br>
                      <div className="title">Announcement</div>
                      <div className="sort-story">
                      The event comprises two rounds:<br></br>
<b>Round 1:</b> This is a GD(Group Discussion) round. Based on the registrations, individuals will be divided into groups and assigned to a panel, where each group will be given a topic on the spot to discuss for 20 minutes.
The members chosen in the first round are eligible to participate in the second round.<br></br>
<b>Round 2:</b> This is a Turncoat(On the spot without any preparation), in which each participant must speak for 2 minutes- in favour and against a given topic for 1min each.<br></br>

<b>The winners will receive cash prizes worth INR 3000!!</b>
<br></br>
This event is EXCLUSIVELY for SoChem REGISTERED members.
<br></br>
<b>Timeline:</b><br></br>

Last date of Registration: <b>4th April 2022, 11:59 pm</b><br></br>
Event date: <b>7th April 2022.</b>
                        
                      <br></br><br></br> 
                      <a href = "https://forms.gle/FFtBjtA1QQZAJgU17" target = "_blank"><button className='register'> Register</button></a>
 
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

