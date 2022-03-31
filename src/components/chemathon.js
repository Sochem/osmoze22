import React from "react";
import "./udhyog.css";

const Events = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading preeventhead">Chemathon</div>
        </div>
        <div className="container">
          <div className="upcoming-event-list">
            <div className="event-block last">
              <div className="row">
                <div className="col-lg-5 sec-2">
                  <img src='/assets/images/events/Udyog.png'/>
                </div>
                <div className="col-lg-7 sec-3">
                  <div className="title lineh">About The Event</div>
                  
                  <div className="sort-story">
                    " Chemathon - The virtual internship and placement event" exclusively for registered Sochem members . The event comprises an online aptitude test followed by the interviews of shortlisted candidates.   
                        <br></br> <br></br>
                      <div className="title">Announcement</div>
                      <div className="sort-story">
                      Registrations from: 31st March to 2nd April 11:59 PM <br></br>
                      Test date : 4th April 2022 <br></br>
                      <b>Win cash prizes worth 4500 !
                      </b>  
                      <br></br><br></br> 
                      <a href = "https://forms.gle/faU1fFkaeoEkgJeJ7" target = "_blank"><button className='register'> Register</button></a>
 
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

