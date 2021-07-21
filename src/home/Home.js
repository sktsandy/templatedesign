import React from 'react';
import About from '../component/about/About';
import Services from '../component/services/Services';
import Tabs from '../component/portfolio/tabs/Tabs';
import Action from './Action';
import Team from '../component/team/Team';
import Contact from '../component/contact-us/Contact';
const Home = () => {
    return (
        <>
           <div className="home_wrapper_section" style={{ 
             backgroundImage: `url("images/hero-bg.jpg")` 
              }}>
                <div className="home_section_contant">
                    <h1>WELCOME TO REACT</h1>
                    <h3> We are team of talented designers making websites with React </h3>
                    <button className="home_btn"> GET STARTED </button>
                </div>
           </div> 

                {/*******    All Components Are here show in home page    *******/}
                        <About />
                        <Services />
                        <Action />
                        <Tabs />
                        <Team />
                        <Contact />
        </>
    )
}

export default Home;
