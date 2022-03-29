import React from "react";
import "./Events.css";

const Events = () => {
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
            <div className="event-block last">
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
                        <td className="title">Udhyog</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src='/assets/images/events/Udyog.png' />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Udhyog</div>
                  <div className="venue">
                    <table>
                      <tbody>
                        <tr>
                        {/*  <td>
                            <i className="fa fa-map-marker" />
                          </td>
                             <td>
                            <div>Gyan Manch</div>
                            <div className="dim-color">
                              <a href="https://www.google.co.in" target="blank">
                                Get Directions
                              </a>
                            </div>
                          </td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="time">
                    <table>
                    {/*   <tbody>
                        <tr>
                          <td>
                            <i className="fa fa-clock-o" />
                          </td>
                          <td>
                            <div>Sat, Apr 27, at 5:30 PM</div>
                            <div
                              data-livestamp={1517054400}
                              className="dim-color"
                            />
                          </td>
                        </tr>
                      </tbody> */}
                    </table>
                  </div>
                  <div className="sort-story">
                  We are pleased to introduce you to another exciting OSMOZE'22 event - "UDYOG." We are organising a variety of events covering a wide range of profiles in order to bring out the best in you. 

                  </div>
                {/* <div className="group-of-btn">
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
                    </div> */}
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
                  <img src='/assets/images/events/osmocross.jpeg' />
                  </div>
                  <div className="col-lg-5 sec-3">
                    <div className="title">Osmocross</div>
                    <div className="venue">
                      <table>
                        <tbody>
                          <tr>
                          {/*   <td>
                              <i className="fa fa-map-marker" />
                            </td>
                            <td>
                               <div>Gyan Manch</div>
                              <div className="dim-color">
                                <a
                                  href="https://www.google.co.in"
                                  target="blank"
                                >
                                  Get Directions
                                </a>
                              </div>
                            </td>  */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="time">
                      <table>
                      {/*  <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>
                              <div>Sat, Apr 27, at 5:30 PM</div>
                              <div
                                data-livestamp={1517054400}
                                className="dim-color"
                              />
                            </td>
                          </tr>
                        </tbody>  */}
                      </table>
                    </div>
                    <div className="sort-story">
                    Osmocross is a fun crossword solving event, with 2 challenges based on different themes. The Osmocross challenge will be mailed to you tonight 28th March at 10 PM and the answers need to submit before 28th March at 11 PM  The responses are to be filled in the shared Google form. And in the case of a tie, the answer solved in the least stimulated time will be given preference.
                    </div>
                    {/* ************************************************************************* */}
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
                    <img src='/assets/images/events/chem-e-meme.jpeg' />
                  </div>
                  <div className="col-lg-5 sec-3">
                    <div className="title">Chem-E-Meme</div>
                    <div className="venue">
                      <table>
                        <tbody>
                          <tr>
                          {/*   <td>
                              <i className="fa fa-map-marker" />
                            </td>
                           <td>
                              <div>Gyan Manch</div>
                              <div className="dim-color">
                                <a
                                  href="https://www.google.co.in"
                                  target="blank"
                                >
                                  Get Directions
                                </a>
                              </div>
</td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="time">
                      <table>
                      {/*  <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-clock-o" />
                            </td>
                            <td>
                              <div>Sat, Apr 27, at 5:30 PM</div>
                              <div
                                data-livestamp={1517054400}
                                className="dim-color"
                              />
                            </td>
                          </tr>
                        </tbody> */}
                      </table>
                    </div>
                    <div className="sort-story">
                    Power up the creative part of yourselves as we present to you the most enthralling competition of our flagship event OSMOZE'22 - CHEM-E-MEME.

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

export default Events;
