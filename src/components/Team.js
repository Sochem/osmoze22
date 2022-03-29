import { Component } from 'react';
import './Team.css';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                {
                    id: 0,
                    name: 'Bhani kaur',
                    designation:'General Secretary',
                    image: '/assets/images/team/Bhanikaur.jpeg',
                    fb:'https://www.facebook.com/bhani.kaur.58',
                    insta:'https://www.instagram.com/kaur_bkj01/',
                    linkedin:'https://www.linkedin.com/in/bhani-kaur-b3946918a',
                    },
                    {
                    id: 1,
                    name: 'Srishti Bansal',
                    designation:'Convener',
                    image: '/assets/images/team/shrishtibansal.jpeg',
                    fb:'https://m.facebook.com/100009353864375/',
                    insta:'https://www.instagram.com/_srishti.bansal/',
                    linkedin:'https://www.linkedin.com/in/arjupta/',
                    },
                    {
                        id: 2,
                        name: 'Rohil Shah',
                        designation:'Facilitator',
                        image: '/assets/images/team/rohil.jpeg',
                        fb:'#',
                        insta:'#',
                        linkedin:'https://www.linkedin.com/in/rohil-shah-97aa631a5',
                        },
                    {
                    id: 3,
                    name: 'Rudresh Gupta',
                    designation:'Tech Head (Web)',
                    image: '/assets/images/team/rudresh.jpeg',
                    fb:'https://www.facebook.com/rudresh.gupta.984/',
                    insta:'https://www.instagram.com/_its_rd_/',
                    linkedin:'https://www.linkedin.com/in/rudresh-gupta-b87a84190/',
                    },
                    {
                    id: 4,
                    name: 'Arjun Gupta',
                    designation:'Tech Head (App)',
                    image: '/assets/images/team/arjungupta.jpeg',
                    fb:'https://www.facebook.com/arjun.manas.1/',
                    insta:'https://www.instagram.com/arjupta/',
                    linkedin:'https://www.linkedin.com/in/arjupta/',
                    },
                    {
                    id: 5,
                    name: 'Neelam Deshmukh',
                    designation:'Design Head',
                    image: '/assets/images/team/neelam.jpeg',
                    fb:'https://www.facebook.com/neelam.deshmukh.581',
                    insta:'https://www.instagram.com/neelam_2611/',
                    linkedin:'https://www.linkedin.com/in/neelam-deshmukh/',
                    },
                    {
                    id: 6,
                    name: 'V Rudheer Pamar',
                    designation:'Design Head',
                    image: '/assets/images/team/rudheerCopy.jpeg',
                    fb:'https://www.facebook.com/v.rudheerpamar.vankudothu',
                    insta:'https://www.instagram.com/rudheer.pamar/',
                    linkedin:'https://www.linkedin.com/in/rudheer-pamar-19b8aa1a8/',
                    },
                    {
                    id: 7,
                    name: 'Aryaman Joshi',
                    designation:'Public Relations Head',
                    image: '/assets/images/team/aryaman.jpeg',
                    fb:'https://www.facebook.com/aryaman.joshi.5',
                    insta:'https://www.instagram.com/aryaman3900/',
                    linkedin:'https://www.linkedin.com/in/aryaman-joshi-04259417b/',
                    },
                    {
                    id: 8,
                    name: 'Abhinav Vinod Singh',
                    designation:'Marketing and Ind. relations head',
                    image: '/assets/images/team/abhinav.jpeg',
                    fb:'https://m.facebook.com/100005237973155/',
                    insta:'https://www.instagram.com/featuredhappy/',
                    linkedin:'https://www.linkedin.com/mwlite/in/abhinav-singh-9215671b7',
                    },
                     
            ],
        };
    }

    render() {

        const team = this.state.members.map((member)=> {
            return(
                <div class="team-info col-md-3 mx-md-3 col-sm-3 col-xs-3 mx-5" key={member.id} id={member.id}>
                <div class="team-member-img">
                    <img src={member.image} alt={member.name} />
                </div>
                <ul class="team-social-media">
                    <li><a href={member.fb} ><i class="fa fa-facebook"></i></a></li>
                    <li><a href={member.insta} ><i class="fa fa-instagram"></i></a></li>
                    <li><a href={member.linkedin} ><i class="fa fa-linkedin"></i></a></li>
                </ul>
                <div class="team-member-info">
                    <h2>{member.name}</h2>
                    <span style={{'fontSize':'0.75rem'}}>{member.designation}</span>
                </div>
            </div>
            

            );
        } )

        return(
            
            <div id="star">
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id="team" className="container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-md-offset-0 d-flex justify-content-center">
                            <div id="team-heading">
                                The Osmoze <span>Team</span>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                    <div className="row d-flex justify-content-around">
                        {team}
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }



}

export default Team;