import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Navbar/Menubar' ;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Donate from "./Donate/Donate" ;
import AboutPage from "./AboutPage/AboutPage" ;
import ContactPage from "./ContactPage/ContactPage" ;
import Gallery from "./Gallery/Gallery" ;
function App() {
    return (
        <div>
            
        <Router>
            <Menubar />
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/donate" component={Donate} />
            <Route path="/aboutus" component={AboutPage} />
            <Route path="/contactus" component={ContactPage} />
            <Route path="/gallery" component={Gallery} />

            </Switch>      
          </Router>
        </div>
    );
}

export default App;