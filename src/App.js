import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './include/header/Navbar';
import Home from './home/Home.js';
import About from './component/about/About';
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio';
import Team from './component/team/Team';
import Contact from './component/contact-us/Contact';
import Footer from './include/footer/Footer';



const App = () => {
    return (
        <>
        <Navbar />
            <div className="component_wrapper">
            <Switch>
                <Route  exact path='/' component = {Home}  /> 
                <Route  exact path='/about' component = {About}  /> 
                <Route  exact path='/services' component = {Services} /> 
                <Route  exact path='/portfolio' component = {Portfolio}  /> 
                <Route  exact path='/team' component = {Team}  /> 
                <Route  exact path='/contact' component = {Contact}  /> 
            </Switch>                            
            </div>
        <Footer />
        
        </>
    )
}

export default App;


