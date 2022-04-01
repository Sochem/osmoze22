import { useEffect } from "react";
import "../css/announcement.css";

function Announcement() {
  useEffect(() => {
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }, []);

  return (
    <div>
      <section class="intro"></section>

      <section class="timeline" id="star">
        <h1>Announcements</h1>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <ul>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>April 01 2022</time> <h3>Udyog</h3>
              Problem Statement for <b>Udyog</b> has been released. Check out
              the events page!
              <br></br>
              <br></br>
              <b>Deadline:</b> 03-04-22 till 11:59 pm
              <br></br>
            </div>
          </li>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>April 04 2022</time> <h3>Registrations for Chemathon</h3>
              Osmoze'22 presents you " Chemathon - The virtual internship and
              placement event" exclusively for registered Sochem members. The
              event comprises an online aptitude test followed by the interviews
              of shortlisted candidates. Win cash prizes worth 4500!
              <br></br>
              <br></br>
              <b>Registration Date: </b>31-03-22 to 02-04-22 till 11:59
              <br></br>
              <a href="https://forms.gle/faU1fFkaeoEkgJeJ7" target="_blank">
                <button className="abtn" id="announcement">
                  {" "}
                  Register
                </button>
              </a>
            </div>
          </li>

          <li>
            <div style={{ overflow: "hidden" }}>
              <time>March 30 2022</time> <h3>Guest Lecture</h3>
              Want to Crack that code for strengthening your DSA? Then this
              enthralling news is for you! SoChem in collaboration with Geeks
              for Geeks is hosting a session exclusively focusing on the Data
              Structures and Algorithms. This simplifies your preparation much
              easy for ChemCoding contest. And guess what else? You will be
              awarded points for Mr. & Ms. Chemical title.
              <br></br>
              <b>Date: 3rd April 2022</b>
              <br></br>
              <b>Time: 4:00 PM</b>
              <br></br>
              <a href="https://bit.ly/3uHrcYH" target="_blank">
                <button className="abtn" id="announcement">
                  {" "}
                  Register
                </button>
              </a>
            </div>
          </li>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>March 30 2022</time> <h3>Registrations for ChemCoding</h3>
              Coding is arguably one of the most important skills for current as
              well as future generations to learn that would be an important
              part of one's carrer in the long run. Osmoze is back with the
              opportunity to test your skills through an exhilarating coding
              event, ChemCoding. <br></br>
              ChemCoding is open only for sochem registered members. It is an
              individual event.
              <br></br>
              <a href="https://forms.gle/83QZT7YxScSCuArPA" target="_blank">
                <button className="abtn" id="announcement">
                  {" "}
                  Register
                </button>
              </a>
            </div>
          </li>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>March 30 2022</time> <h3>OSMOCROSS - 1 result</h3>
              <b>Results are out now!</b>
              <br></br>
              1.Aditya Kumar Singh (20045008) <br></br>
              2.Yashwardhan (21045147) <br></br>
              3.Jeet Gupta (21045064) <br></br>
            </div>
          </li>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>March 29 2022</time> <h3>Registrations for ADHYAYAN</h3>
              We are pleased to introduce you to Adhyayan'22. Adhyayan is a
              business case study competition that involves strategizing about
              the corporate picture at a higher level.<br></br> It'll be a fun
              but challenging problem statement about a really successful
              enterprise. <br></br>
              You can participate in teams of 2-3 people. Prizes are worth upto
              4.5K.
              <br></br>
              <a href="https://forms.gle/HkyoR1fuctY4svLa6" target="_blank">
                <button className="abtn" id="announcement">
                  {" "}
                  Register
                </button>
              </a>
            </div>
          </li>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>March 28 2022</time> <h3>Registrations for UDYOG</h3>
              Udyog allows you to put yourself in the shoes of a chemical
              engineer and attempt to understand and analyse their role in
              various situations. You will be provided with a problem statement
              featuring chemical concepts. <br></br>
              Circumstances and situations faced in a given particular concept
              will be provided to you in the problem statement and you are
              expected to submit a solution on how to tackle those problems.
              Registrations start on 29th of March and are open till 1st of
              April.<br></br>
              Teams of maximum size 3 are allowed.
              <br></br>
              <a href="https://forms.gle/Tcc8QpfrLtuyi9zbA" target="_blank">
                <button className="abtn" id="announcement">
                  {" "}
                  Register
                </button>
              </a>
            </div>
          </li>
          <li>
            <div style={{ overflow: "hidden" }}>
              <time>March 28 2022</time> <h3>Pre event: Chem-E-Meme</h3>
              Power up the creative part of yourselves as we present to you the
              most enthralling competition of our flagship event OSMOZE'22 -
              CHEM-E-MEME. Here is this amazing chance to create memes featuring
              chemical concepts that captivates everyone!!<br></br>
              For details and rules of Chem-E-Meme check your mail box!<br></br>
              <a href="https://forms.gle/JkPtdonAo6aK84i59" target="_blank">
                <button className="abtn" id="announcement">
                  {" "}
                  Register
                </button>
              </a>
            </div>
          </li>
          <li>
            <div>
              <time>March 28 2022</time> <h3>Pre event: Osmocross</h3>
              Osmocross is a fun crossword solving event, with 2 challenges
              based on different themes. The Osmocross challenge will be mailed
              to you tonight 28th March at 10 PM and the answers need to submit
              before 28th March at 11 PM.<br></br> The responses are to be
              filled in the shared Google form and in the case of a tie, the
              answer solved in the least stimulated time will be given
              preference.
            </div>
          </li>
          <li>
            <div>
              <time>March 27 2022</time> <h3>Osmoze 2022</h3>
              We are delighted to declare the Chemical engineering extravaganza
              of IIT(BHU) Varanasi is to be held from 4th to 8th of April 2022.
              Get yourself ready for exciting events that shall truly lift up
              the spirit of this engineering gala in days to come! <br></br>
              Until Then Stay Tuned
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Announcement;
