import React from "react";
import "./Events.css";

const Udhyog = () => {
  return (
    <div>
      <div className="page-event">
        <div className="cover">
          <div className="heading">events</div>
        </div>
        <div className="container">
          <div className="upcoming-sec">
            <div className="heading">Main Events</div>
          </div>
          <div className="upcoming-event-list">
            <div className="event-block">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">7</div>
                        </td>
                        <td className="title">Udyog</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="/assets/images/events/Udyog.png" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Udyog</div>

                  <div className="sort-story">
                    We are pleased to introduce you to another exciting
                    OSMOZE'22 event - "UDYOG." We are organising a variety of
                    events covering a wide range of profiles in order to bring
                    out the best in you.
                  </div>
                  <div className="group-of-btn">
                    <a
                      href="https://www.google.com"
                      target="blank"
                      className="btn book-ticket"
                      onClick={() => {
                        window.location = "/events/udhyog";
                      }}
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="event-block">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">7</div>
                        </td>
                        <td className="title">Adhyayan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="/assets/images/events/adhyayan.jpg" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Adhyayan</div>

                  <div className="sort-story">
                    Adhyayan is a business case study competition that involves
                    strategizing about the corporate picture at a higher level.
                    It'll be a fun but challenging problem statement about a
                    really successful enterprise.
                  </div>
                  <div className="group-of-btn">
                    <a
                      href="https://www.google.com"
                      target="blank"
                      className="btn book-ticket"
                      onClick={() => {
                        window.location = "/events/adhyayan";
                      }}
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="event-block">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">5</div>
                        </td>
                        <td className="title">ChemCoding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="/assets/images/events/chemcoding.jpg" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title"> ChemCoding</div>

                  <div className="sort-story">
                    Coding is arguably one of the most important skills for
                    current as well as future generations to learn that would be
                    an important part of one's carrer in the long run.
                  </div>
                  <div className="group-of-btn">
                    <a
                      href="https://www.google.com"
                      target="blank"
                      className="btn book-ticket"
                      onClick={() => {
                        window.location = "/events/chemcoding";
                      }}
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="event-block last">
            <div className="row">
              <div className="col-lg-2 sec-1">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="month">Apr</div>
                        <div className="month-date-devider" />
                        <div className="date">5</div>
                      </td>
                      <td className="title">Chemathon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-5 sec-2">
                <img src="/assets/images/events/chemathon.png" />
              </div>
              <div className="col-lg-5 sec-3">
                <div className="title"> Chemathon</div>

                <div className="sort-story">
                <b>Chemathon - The virtual internship and placement event</b> exclusively for registered Sochem members . The event comprises an online aptitude test followed by the interviews of shortlisted candidates.  Win cash prizes worth 4500 ! 
                </div>
                <div className="group-of-btn">
                  <a
                    href="https://www.google.com"
                    target="blank"
                    className="btn book-ticket"
                    onClick={() => {
                      window.location = "/events/chemathon";
                    }}
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>

            <div className="upcoming-sec">
              <div className="heading">Guest Lecture</div>
            </div>
            <div className="upcoming-event-list">
              <div className="event-block last">
                <div className="row">
                  <div className="col-lg-2 sec-1">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="month">Apr</div>
                            <div className="month-date-devider" />
                            <div className="date">3</div>
                          </td>
                          <td className="title">Guest Lecture</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-5 sec-2">
                    <img src="/assets/images/events/gfgguesmt.jpeg" />
                  </div>
                  <div className="col-lg-5 sec-3">
                    <div className="title">Guest Lecture</div>
                    <div className="sort-story">
                      Want to Crack that code for strengthening your DSA? Then
                      this enthralling news is for you! SoChem in collaboration
                      with Geeks for Geeks is hosting a session exclusively
                      focusing on the Data Structures and Algorithms. This
                      simplifies your preparation much easy for ChemCoding
                      contest. And guess what else? You will be awarded points
                      for Mr. & Ms. Chemical title.
                      <br></br>
                      <b>Date: 3rd April 2022</b>
                      <br></br>
                      <b>Time: 4:00 PM</b>
                      <br></br>
                      <div className="group-of-btn">
                        <a
                          href="https://bit.ly/3uHrcYH"
                          target="blank"
                          className="btn book-ticket"
                        >
                          Register
                        </a>
                      </div>
                      Join the session to know many more tips that make your
                      coding journey easier!
                      <br></br>
                      <b>
                        PS: Only participants registered for this session are
                        eligible for the ChemCoding contest.
                      </b>
                    </div>
                    {/* ************************************************************************* */}
                  </div>
                </div>
              </div>
            </div>


            <div className="upcoming-sec">
              <div className="heading">Pre Events</div>
            </div>
            <div className="upcoming-event-list">
              <div className="event-block">
                <div className="row">
                  <div className="col-lg-2 sec-1">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="month">Mar</div>
                            <div className="month-date-devider" />
                            <div className="date">28</div>
                          </td>
                          <td className="title">Osmocross</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-5 sec-2">
                    <img src="/assets/images/events/osmocross.jpeg" />
                  </div>
                  <div className="col-lg-5 sec-3">
                    <div className="title">Osmocross</div>
                    <div className="sort-story">
                      Osmocross is a fun crossword solving event, with 2
                      challenges based on different themes. The Osmocross
                      challenge will be mailed to you tonight 28th March at 10
                      PM and the answers need to submit before 28th March at 11
                      PM The responses are to be filled in the shared Google
                      form. And in the case of a tie, the answer solved in the
                      least stimulated time will be given preference.<br></br>
                      <br></br>
                      <div className="title">Result</div>
                      <div className="sort-story">
                        <b>
                          {" "}
                          Results are out now!.<br></br>{" "}
                        </b>
                        1.Aditya Kumar Singh (20045008) <br></br>
                        2.Yashwardhan (21045147) <br></br>
                        3.Jeet Gupta (21045064) <br></br>
                        <br></br>
                      </div>
                    </div>
                    {/* ************************************************************************* */}
                  </div>
                </div>
              </div>

              <div className="event-block last">
                <div className="row">
                  <div className="col-lg-2 sec-1">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="month">Mar</div>
                            <div className="month-date-devider" />
                            <div className="date">28</div>
                          </td>
                          <td className="title">Chem-E-Meme</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-5 sec-2">
                    <img src="/assets/images/events/chem-e-meme.jpeg" />
                  </div>
                  <div className="col-lg-5 sec-3">
                    <div className="title">Chem-E-Meme</div>
                    <div className="sort-story">
                      Power up the creative part of yourselves as we present to
                      you the most enthralling competition of our flagship event
                      OSMOZE'22 - CHEM-E-MEME.
                    </div>
                    {/* ************************************************************************* */}
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

export default Udhyog;
