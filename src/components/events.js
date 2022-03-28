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
           {/* <div className="event-block">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">27</div>
                        </td>
                        <td className="title">Chem-A-Thon</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Chem-A-Thon</div>
                  <div className="venue">
                    <table>
                      <tbody>
                        <tr>
                         {/* g  <td>
                            <i className="fa fa-map-marker" />
                          </td>
                           <td>
                            <div>Gyan Manch</div>
                            <div className="dim-color">
                              <a href="https://www.google.co.in" target="blank">
                                Get Directions
                              </a>
                            </div>
                          </td> 
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
                      </tbody> 
                    </table>
                  </div>
                  <div className="sort-story">
                    A series of extremely competitive events needing you to get
                    into the shoes for the internship session.
                  </div>
                  <div className="group-of-btn">
                    <a
                      href="https://www.google.com"
                      target="blank"
                      className="btn book-ticket"
                      onClick={() => {
                        window.location = "/events/chemathon";
                      }}
                      href="/chemathon"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

          {/*  <div className="event-block">
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
                        <td className="title"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Chem-Coding</div>
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
                              <a href="https://www.google.co.in" target="blank">
                                Get Directions
                              </a>
                            </div>
                          </td> 
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="time">
                    <table>
                     {/* <tbody>
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
                        </tbody> 
                    </table>
                  </div>
                  <div className="sort-story">
                    Osmoze brings to you the opportunity to showcase logical
                    thinking and dexterity with algorithms in the form of
                    ChemCoding, an exhilarating coding event.
                  </div>
                  <div className="group-of-btn">
                    <a
                      href=""
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

            <div className="event-block">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">27</div>
                        </td>
                        <td className="title">Adhyayan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Adhyayan</div>
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
                          </td> 
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="time">
                    <table>
                      <tbody>
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
                      </tbody> 
                    </table>
                  </div>
                  <div className="sort-story">
                    Ever fancied yourself as a maverick of management! Come test
                    your astute skills in solving a real-life case study in the
                    event, ADHYAYAN.
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
            </div> */}

            <div className="event-block last">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">27</div>
                        </td>
                        <td className="title">DASTAAN - a tribute to Rekha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
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
                    Here, you will be provided with a real life engineering
                    challenge, straight from a reputed Chemical based industry.
                    Its high time to show your worth to the industry.
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

          {/*  <div className="event-block last">
              <div className="row">
                <div className="col-lg-2 sec-1">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <div className="month">Apr</div>
                          <div className="month-date-devider" />
                          <div className="date">27</div>
                        </td>
                        <td className="title">DASTAAN - a tribute to Rekha</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-5 sec-2">
                  <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="col-lg-5 sec-3">
                  <div className="title">Guest lecture</div>
                  <div className="venue">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i className="fa fa-map-marker" />
                          </td>
                            <td>
                           <div>Gyan Manch</div>
                            <div className="dim-color">
                              <a href="https://www.google.co.in" target="blank">
                                Get Directions
                              </a>
                            </div>
                        </td> 
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="time">
                    <table>
                      <tbody>
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
                      </tbody>
                    </table>
                  </div>
                  <div className="sort-story">
                    "For a woman to be complete, she has to be a blend of Paro
                    &amp; Chandramukhi. I feel that I am that woman." - Rekha
                  </div>
                  <div className="group-of-btn">
                    <a
                      href="https://www.google.com"
                      target="blank"
                      className="btn book-ticket"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

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
                            <div className="month">Apr</div>
                            <div className="month-date-devider" />
                            <div className="date">27</div>
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
                      A series of extremely competitive events needing you to
                      get into the shoes for the internship session.
                    </div>
                    {/* ************************************************************************* */}
                  </div>
                </div>
              </div>

              {/*  <div className="event-block">
                <div className="row">
                  <div className="col-lg-2 sec-1">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="month">Apr</div>
                            <div className="month-date-devider" />
                            <div className="date">27</div>
                          </td>
                          <td className="title">Osmoclick</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-5 sec-2">
                    <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                  </div>
                  <div className="col-lg-5 sec-3">
                    <div className="title">Osmoclick</div>
                    <div className="venue">
                      <table>
                        <tbody>
                          <tr>
                            <td>
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
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="time">
                      <table>
                        <tbody>
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
                        </tbody>
                      </table>
                    </div>
                    <div className="sort-story">
                      A series of extremely competitive events needing you to
                      get into the shoes for the internship session.
                    </div>
                  
                  </div>
                </div>
  </div> */}

              <div className="event-block">
                <div className="row">
                  <div className="col-lg-2 sec-1">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="month">Apr</div>
                            <div className="month-date-devider" />
                            <div className="date">27</div>
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
                      A series of extremely competitive events needing you to
                      get into the shoes for the internship session.
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
