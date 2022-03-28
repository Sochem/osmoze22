import './App.css';
import './css/background.css';
import Footer from './components/Footer'
import Team from './components/Team'
import HomePage from './components/Homepage'
import Announcement from './components/Announcement'
import {Switch, Route} from 'react-router-dom'
// import Navbar from './components/Navbar'
import NewNavBar from './components/newnavbar'
import Events from './components/events'
import Chemcoding from './components/chemcoding';
import Chemathon from './components/chemathon';
import Adhyayan from './components/Adhyayan';
import Udhyog from './components/udhyog';

function App() {
  return (
      <div>
        {/* <Navbar /> */}
        <NewNavBar />
        <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/events" component = {Events}/>
        <Route exact path = "/team" component = {Team}/>
        <Route exact path = "/announcement" component = {Announcement}/>
        <Route exact path = "/events/chemcoding" component = {Chemcoding}/>
        <Route exact path = "/events/chemathon" component = {Chemathon}/>
        <Route exact path = "/events/adhyayan" component = {Adhyayan}/>
        <Route exact path = "/events/udhyog" component = {Udhyog}/>
        </Switch>
        <Footer />  
      </div>
  );
}

export default App;
