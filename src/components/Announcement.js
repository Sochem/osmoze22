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
              <time>April 4 2022</time> <h2>Osmoze 2022</h2>
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