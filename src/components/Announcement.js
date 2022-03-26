import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../css/announcement.css'

function Announcement(){
    return(
        <div className="mt-5" id="star">
			<link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2 mt-5 ">
								<h1 className="mx-auto">Announcement</h1>
                        </div>
                    </div>
                </section>

                <section className="content">
                  <div className="container-fluid">
                 <Timeline >
					{/* take care of order */}

					<TimelineItem
						key="009"
						dateText="15 April 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Results</h3>
								<div className="timeline-body">
									Round I Results are out for
									<a href="https://events.osmoze.in/#/events/Adhyayan"> Adhyayans </a> 
								 	and 
								 	<a href="https://events.osmoze.in/#/events/Chemathon"> Chemathon </a>
								</div>
							</div>
						</div>
                    </TimelineItem>

					<TimelineItem
						key="007"
						dateText="10 April 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Osmocross #2 Result</h3>
								<div className="timeline-body">
								OsmoCross #2 held on 9nd April saw some nail biting competition.
								<ol>
									<li>Nisha Agrawal 17045010</li>
									<li>Harshit Bhati 19045052</li>
									<li>Hritik Kumar 19045053</li>
								</ol>
								{/* Get ready for the more exciting OsmoCross 2 coming on 9th April. */}
								</div>
							</div>
						</div>
                    </TimelineItem>

					<TimelineItem
						key="006"
						dateText="09 April 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Guest Talk</h3>
								<div className="timeline-body">
								Join us in the talk given by <b>Mr. Mehul Bapat</b>, an esteemed alumnus of IIT(BHU) Varanasi, and currently working as a research assistant at Carnegie Mellon University, USA.
								<br/><br/>Join us on the <b>11th of April at 8PM!</b>
								</div>
							</div>
						</div>
                    </TimelineItem>

					<TimelineItem
						key="005"
						dateText="07 April 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Registrations started ! </h3>
								<div className="timeline-body">
									Get yourself registered for 
									<a href="https://events.osmoze.in/#/events/chemCoding"> Chemcoding </a> 
								 	and 

								 	<a href="https://events.osmoze.in/#/events/Chemathon"> Chemathon! </a>
								</div>
							</div>
						</div>
                    </TimelineItem>
					
					<TimelineItem
						key="004"
						dateText="04 April 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Osmocross #1 Result</h3>
								<div className="timeline-body">
								OsmoCross #1 held on 2nd April saw some nail biting competition.
								<ol>
									<li>Prince 20045093</li>
									<li>Vedant Chitnis 20045139</li>
									<li>Kushagra Singh 18045059</li>
								</ol>
								Get ready for the more exciting OsmoCross 2 coming on 9th April.
								</div>
							</div>
						</div>
                    </TimelineItem>

					<TimelineItem
						key="003"
						dateText="28 March 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Osmocross</h3>
								<div className="timeline-body">
								The Society of Chemical Engineers has organized value-added workshops and events in the ongoing session. It's time to bring in some fun. Osmoze'21  is just round the corner, therefore we are planning to initiate the exciting streak of events. <br/>
								Here we announce the inception of the pre-events of Osmoze 2021.
								</div>
							</div>
						</div>
                    </TimelineItem>

                  	<TimelineItem
						key="002"
						dateText="28 March 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Osmo-Click</h3>
								<div className="timeline-body">
								Hola people!<br/>
								Dipped in hues of love and trust, the festival of colors is here. Team Osmoze sends you best wishes for a Holi filled with sweet moments and memories to cherish for long.<br/>
								Osmoze is just about a month away, and we are all set to launch yet another exciting pre-event — Osmo-Click.<br/>
								It's an online contest where you must send photos of any events/activities in our daily lives that resemble any chemical phenomenon and provide a proper explanation for the same.<br/>
								Send your entries <a href="https://www.instagram.com/sochem_iitbhu/">here!</a>
								</div>
							</div>
						</div>
                    </TimelineItem>

					<TimelineItem
						key="001"
						dateText="26 March 2021"
						dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
						bodyContainerStyle={{background: '#ddd',padding: '20px',borderRadius: '8px',boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
					}}>
						<div>
							<div className="timeline-item">
								<h3 className="timeline-header">Osmoze 2021</h3>
								<div className="timeline-body">
								We are delighted to declare the Chemical engineering extravaganza of IIT(BHU) Varanasi is to be held from 16th to 18th of April 2021. Get yourself ready for exciting events that shall truly lift up the spirit of this engineering gala in days to come!
								<br/>Until Then Stay Tuned!
								</div>
							</div>
						</div>
                    </TimelineItem>

                </Timeline>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Announcement;


{/* <TimelineItem
key="002"
dateText="04/2009 – 11/2010"
dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
bodyContainerStyle={{
background: '#ddd',
padding: '20px',
borderRadius: '8px',
boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
}}
>
		<div className="time-label">
			<span className="bg-red">31 March 2020</span>
		</div>
		<div>
			<i className="fas fa-envelope bg-blue"></i>
			<div className="timeline-item">
				<span className="time"><i className="fas fa-clock"></i> 14:00</span>
				<h3 className="timeline-header">Chemathon Test Lined Up Today</h3>

				<div className="timeline-body">
					<strong>CHEMATHON REGISTERED PARTICIPANTS PLEASE CHECK YOUR MAIL</strong><br/>
					<strong>Time:</strong> 6 pm sharp<br/>
					<strong>Test Duration</strong>: 1 hour<br/><br/>

					Important Instruclions for Test
					<ol>
					<li>Go To: <a href="https://www.classNamemarker.com/register/" target="_blank">www.classNamemarker.com/register/</a></li>
					<li>Select: 'Test Takers' option</li>
					<li>Enter your Registration Code: (Sent to the Registered Participants through mail)</li>
					<li>Enter your details on the page that opens. Make sure you enter them correctly.</li>
					</ol>
					<br/>
					<br/>
					<strong>NOTE: There will be a login window to the platform of only 30 minutes (i.e., till 6:30 pm), after which your attempt won't be counted.</strong>
				</div>
			</div>
		</div>
</TimelineItem> */}
