import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login';
import SignIn from './components/SignIn';
import District from './components/District';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import history from './components/History';
import HospitalData from './components/HospitalData';
import CardData from './components/Card';
import States from './components/States';
import Appointment from './components/Appointment';
import Pincode from './components/pincode';
import  GoogleMapApi from './components/GoogleMapApi';
import PincodeCardData from './components/PincodeCardData';
import CombinedPinDist from './components/CombinedPinDist';
import EnterPin from './components/EnterPin';
import GetHospitalList from './components/GetHospitalList';

function App() {
  return (
    
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          
          <Route path="/registration" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/dist" exact component={District} />
          <Route path="/info" exact component={Info} />
          <Route path="/hospital" exact component={HospitalData} />
          <Route path="/card" exact component={CardData} />
          <Route path="/st" exact component={States} />
          <Route path="/appointment" exact component={Appointment} />
          <Route path="/pin" exact component={Pincode} />
          <Route path="/map" exact component={GoogleMapApi} />
          <Route path="/pinData" exact component={PincodeCardData} />
          <Route path="/combined" exact component={CombinedPinDist} />
          <Route path="/enterpin" exact component={EnterPin} />
          <Route path="/getdata" exact component={GetHospitalList} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
