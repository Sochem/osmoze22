import React from "react";
import "./udhyog.css";

const Events = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading">Udhyog</div>
        </div>
        <div className="container">
          <div className="upcoming-event-list">
            <div className="event-block last">
              <div className="row">
                <div className="col-lg-5 sec-2">
                  <img src='/assets/images/events/Udyog.png' />
                </div>
                <div className="col-lg-7 sec-3">
                  <div className="title">About The Event</div>
                  <div className="sort-story">
                  We are pleased to introduce you to another exciting OSMOZE'22 event - "UDYOG." We are organising a variety of events covering a wide range of profiles in order to bring out the best in you. 

Udyog allows you to put yourself in the shoes of a chemical engineer and attempt to understand and analyse their role in various situations. You will be provided with a problem statement featuring chemical concepts. 

Circumstances and situations faced in a given particular concept will be provided to you in the problem statement and you are expected to submit a solution on how to tackle those problems. 
<br></br>
<b>Registrations start on 29th of March and are open till 1st of April.</b>
Don't wait till the eleventh hour!! The problem statement will be released along with further details on 2nd of April. 
     Teams of maximum size 3 are allowed. <br></br><br></br>
<a href = "https://forms.gle/Tcc8QpfrLtuyi9zbA" target = "_blank"><button className='register'> Register</button></a><br></br><br></br>
Anticipating a huge number of participation as this will undoubtedly entertain you!!  

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

