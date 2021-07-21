import React from 'react';
import Heading from './Heading';
import Discription from './Discription';

const About = () => {
    return (
        <>

           <div className="About_section_wrapper margin_top">
               <div className="container">
                   <div className="row">
                       <div className="col-md-5">

                            <Heading />
                            
                            <Discription />
                       </div>   

                       <div className="col-md-7">
                           <img src="images/about-img.jpg" alt="about" />
                       </div>
                   </div>
               </div>
           </div>
         
        </>
    )
}

export default About;
