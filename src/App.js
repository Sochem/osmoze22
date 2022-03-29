import React from "react";
import './App.css';
import './css/background.css';
import Footer from './components/Footer'
import Team from './components/Team'
import HomePage from './components/Homepage'
import Announcement from './components/Announcement'
import NewNavBar from './components/newnavbar'
import Events from './components/events'
import Chemcoding from './components/chemcoding';
import Chemathon from './components/chemathon';
import Adhyayan from './components/Adhyayan';
import Udhyog from './components/udhyog';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
				<Router>
          <NewNavBar />
					<Switch>
          <Route exact path = "/" component = {HomePage}/>
            <Route path = "/events" component = {Events}/>
            <Route path = "/team" component = {Team}/>
            <Route path = "/announcement" component = {Announcement}/>
            <Route path = "/events/chemcoding" component = {Chemcoding}/>
            <Route path = "/events/chemathon" component = {Chemathon}/>
            <Route path = "/events/adhyayan" component = {Adhyayan}/>
            <Route path = "/events/udhyog" component = {Udhyog}/>
						<Redirect to="/" />
					</Switch>
        <Footer />  
				</Router>
		</ React.Fragment>
  );
}

export default App;
