import './App.css';
import './css/background.css';
import Footer from './components/Footer'
import Team from './components/Team'
import HomePage from './components/Homepage'
import Announcement from './components/Announcement'
import {Switch, Route} from 'react-router-dom'
// import Navbar from './components/Navbar'
import NewNavBar from './components/newnavbar'

function App() {
  return (
      <div>
        {/* <Navbar /> */}
        <NewNavBar />
        <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/team" component = {Team}/>
        <Route exact path = "/announcement" component = {Announcement}/>
        </Switch>
        <Footer />  
      </div>
  );
}

export default App;
