import React from "react";
import "./newnavbar.css";

function Navbar() {
  function navbarcontent() {
    return (
      <div className="">
        <ul className="navbar-nav">
          <li className="nav-item" href="#">
            <a
              href="#"
              id="navbar-main-text"
              className="nav-link"
              name="home"
              onClick={() => {
                window.location = "/";
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              name="events"
              onClick={() => {
                window.location = "/#about";
              }}
              href="/#about"
            >
              About Us
            </a>
          </li>
          <li className="nav-item" href="#">
            <a
              className="nav-link"
              name="forum"
              onClick={() => {
                window.location = "/events";
              }}
              href="/events"
            >
              Events
            </a>
          </li>
          <li className="nav-item" href="#">
            <a
              href="#"
              className="nav-link"
              name="cloud"
              onClick={() => {
                window.location = "/announcement";
              }}
            >
              Announcement
            </a>
          </li>
          <li className="nav-item" href="#">
            <a
              href="#"
              className="nav-link"
              name="people"
              onClick={() => {
                window.location = "/team";
              }}
            >
              Team
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg navbar-light "
          id="main_nav"
        >
          <a
            href="#"
            className="navbar-brand"
            id="nbrand"
            name="home"
            onClick={() => {
              window.location = "/";
            }}
          >
            Osm<span>oze</span>
          </a>
          <button
            id="nav-collaps-button"
            className=" navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-toggle="modal"
            data-target="#navbar-model"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            {navbarcontent()}
          </div>
        </nav>
      </div>

      <div id="navbar-model" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg" role="content">
          <div id="star">
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
              rel="stylesheet"
              type="text/css"
            />
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div
              class="modal-content"
              style={{ backgroundColor: "transparent" }}
            >
              <div class="modal-header d-flex justify-content-end">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">{navbarcontent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
