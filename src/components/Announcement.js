import { useEffect } from 'react';
import '../css/announcement.css';


function Announcement(){

  useEffect(()=>{
  
    var items = document.querySelectorAll(".timeline li");
    
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
  
  },[])
  
  

  return(
    <div>
    <section class="intro">
      </section>
      
      <section class="timeline" id = "star">
      <h1>Announcements</h1>
      <div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
        <ul>
          <li>
            <div>
              <time>April 15 2022</time><h2>Results</h2>
              Round I Results are out for Adhyayans and Chemathon
            </div>
          </li>
          <li>
            <div>
              <time>April 11 2022</time><h2>Problem Statement has been Released</h2>
              Registrations are open till 14th April, 11:59 PM and the problem statement has been released.
              Get yourself registered for ADHYAYAN and UDYOG
            </div>
          </li>
          <li>
            <div>
              <time>April 10 2022</time><h2>Osmocross #2 Result</h2>
              OsmoCross #2 held on 9nd April saw some nail biting competition.
              Nisha Agrawal 17045010
              Harshit Bhati 19045052
              Hritik Kumar 19045053
            </div>
          </li>
          <li>
            <div>
              <time>April 9 2022</time><h2>Guest Talk</h2>
              Join us in the talk given by Mr. Mehul Bapat, an esteemed alumnus of IIT(BHU) Varanasi, and currently working as a research assistant at Carnegie Mellon University, USA.
              
              Join us on the 11th of April at 8PM!
            </div>
          </li>
          <li>
            <div>
              <time>April 7 2022</time><h2>Registrations started!</h2>
              Get yourself registered for Chemcoding and Chemathon!
            </div>
          </li>
          <li>
            <div>
              <time>April 4 2022</time><h2>Osmocross #1 Result</h2>
              OsmoCross #1 held on 2nd April saw some nail biting competition.
              Prince 20045093
              Vedant Chitnis 20045139
              Kushagra Singh 18045059
              Get ready for the more exciting OsmoCross 2 coming on 9th April.
            </div>
          </li>
          <li>
            <div>
              <time>March 28 2022</time><h2>Osmocross</h2>
              The Society of Chemical Engineers has organized value-added workshops and events in the ongoing session. It's time to bring in some fun. Osmoze'21 is just round the corner, therefore we are planning to initiate the exciting streak of events.
              Here we announce the inception of the pre-events of Osmoze 2021.
            </div>
          </li>
          <li>
            <div>
              <time>March 28 2022</time><h2>Osmo-Click</h2>
              Hola people!
              Dipped in hues of love and trust, the festival of colors is here. Team Osmoze sends you best wishes for a Holi filled with sweet moments and memories to cherish for long.
              Osmoze is just about a month away, and we are all set to launch yet another exciting pre-event — Osmo-Click.
              It's an online contest where you must send photos of any events/activities in our daily lives that resemble any chemical phenomenon and provide a proper explanation for the same.
            </div>
          </li>
          <li>
            <div>
              <time>March 25 2022</time> <h2>Osmoze 2022</h2>
              We are delighted to declare the Chemical engineering extravaganza of IIT(BHU) Varanasi is to be held from 16th to 18th of April 2021. Get yourself ready for exciting events that shall truly lift up the spirit of this engineering gala in days to come!
              Until Then Stay Tuned
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Announcement;