import { Component } from 'react';
import './Team.css';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [
                {
                    id: 0,
                    name: 'Anmol Gupta',
                    designation:'Vice-President',
                    image: '/assets/images/team/Anmol.jpg',
                    fb:'https://www.facebook.com/anmolg.gupta',
                    insta:'https://www.instagram.com/_anmol.gupta__/',
                    linkedin:'https://www.linkedin.com/in/anmol-gupta-9520a914a/',
                    },
                    {
                    id: 1,
                    name: 'Tarandeep Singh Wasu',
                    designation:'Osmoze Convenor',
                    image: '/assets/images/team/Tarandeep.jpg',
                    fb:'{#}',
                    insta:'https://www.instagram.com/tswasu/',
                    linkedin:'https://www.linkedin.com/in/tarandeep-singh-421a80186/',
                    },
                    {
                    id: 2,
                    name: 'Ajeet Patel',
                    designation:'Facilitator',
                    image: '/assets/images/team/ajeet.jpg',
                    fb:'https://www.facebook.com/ajeet.patel.549668',
                    insta:'https://www.instagram.com/i__am_heisenberg_/',
                    linkedin:'https://www.linkedin.com/in/ajeet-patel-b4a493189/',
                    },
                    {
                    id: 3,
                    name: 'Richa Singh',
                    designation:'General Secretary',
                    image: '/assets/images/team/Richa.jpeg',
                    fb:'https://www.facebook.com/RichaSingh099/',
                    insta:'https://www.instagram.com/singhricha234/',
                    linkedin:'https://www.linkedin.com/in/richa-singh-41aa1a173/',
                    },
                    {
                    id: 4,
                    name: 'Aman Ashish',
                    designation:'Informatics Head',
                    image: '/assets/images/team/Aman.jpeg',
                    fb:'https://www.facebook.com/amanashish123',
                    insta:'https://www.instagram.com/a_man909/',
                    linkedin:'https://www.linkedin.com/in/aman-ashish-b66953189/',
                    },
                    {
                    id: 5,
                    name: 'Yaman Thakur',
                    designation:'Public Relations Head',
                    image: '/assets/images/team/Yaman.jpg',
                    fb:'https://www.facebook.com/yaman.thakur.359',
                    insta:'https://www.instagram.com/yaman.thakur.359/',
                    linkedin:'https://www.linkedin.com/in/yaman-thakur-303834171/',
                    },
                    {
                    id: 6,
                    name: 'Yash Paliwal',
                    designation:'Design Team Head',
                    image: '/assets/images/team/Yash.jpg',
                    fb:'https://www.facebook.com/yash.paliwal.33633',
                    insta:'https://www.instagram.com/ypofficial_116/',
                    linkedin:'https://www.linkedin.com/in/yash-paliwal-102164170/',
                    },
                    {
                    id: 7,
                    name: 'Satyam Soni',
                    designation:'Industrial Relations Head',
                    image: '/assets/images/team/Satyam.jpg',
                    fb:'https://www.facebook.com/satyam.soni.5876',
                    insta:'https://www.instagram.com/satyam.soni01/',
                    linkedin:'https://www.linkedin.com/in/kumar-satyam-soni-809b57186/',
                    },
                    {
                    id: 8,
                    name: 'Abhishek Kumar Meena',
                    designation:'Events Head',
                    image: '/assets/images/team/Abhishek.jpeg',
                    fb:'https://www.facebook.com/abhishek.meena.56829446',
                    insta:'https://www.instagram.com/abhishek_k_umar/',
                    linkedin:'{#}',
                    } 
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
                    <span>{member.designation}</span>
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
