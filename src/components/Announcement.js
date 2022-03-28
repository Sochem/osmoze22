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
              <time>March 28 2022</time> <h3>Registrations for UDYOG</h3>
              Udyog allows you to put yourself in the shoes of a chemical engineer and attempt to understand and analyse their role in various situations. You will be provided with a problem statement featuring chemical concepts. <br></br>
              Circumstances and situations faced in a given particular concept will be provided to you in the problem statement and you are expected to submit a solution on how to tackle those problems. 
              Registrations start on 29th of March and are open till 1st of April.<br></br>
              Do register in the below attached google form. Teams of maximum size 3 are allowed.
              Google form link: <a href = "https://forms.gle/Tcc8QpfrLtuyi9zbA" target = "_blank">https://forms.gle/Tcc8QpfrLtuyi9zbA</a>
            </div>
          </li>
        <li>
            <div>
              <time>March 28 2022</time> <h3>Pre event: Chem-E-Meme</h3>
              Power up the creative part of yourselves as we present to you the most enthralling competition of our flagship event OSMOZE'22 - CHEM-E-MEME.
              Here is this amazing chance to create memes featuring chemical concepts that captivates everyone!!<br></br>
              for details and rules of Chem-E-Memecheck your mail box!
              Google form for participation: <a href = "https://forms.gle/JkPtdonAo6aK84i59" target = "_blank">https://forms.gle/JkPtdonAo6aK84i59</a>
            </div>
          </li>
        <li>
            <div>
              <time>March 28 2022</time> <h3>Pre event: Osmocross</h3>
              Osmocross is a fun crossword solving event, with 2 challenges based on different themes. The Osmocross challenge will be mailed to you tonight 28th March at 10 PM and the answers need to submit before 28th March at 11 PM  The responses are to be filled in the shared Google form. And in the case of a tie, the answer solved in the least stimulated time will be given preference.
            </div>
          </li>
          <li>
            <div>
              <time>March 27 2022</time> <h3>Osmoze 2022</h3>
              We are delighted to declare the Chemical engineering extravaganza of IIT(BHU) Varanasi is to be held from 4th to 8th of April 2022. Get yourself ready for exciting events that shall truly lift up the spirit of this engineering gala in days to come!
              Until Then Stay Tuned
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Announcement;