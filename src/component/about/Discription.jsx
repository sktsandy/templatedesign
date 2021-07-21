import React, { useState } from 'react';
import DisData from './DisData';
const Discription = () => {
    const [data, setData] = useState(DisData);
    return (
        <> 

        {
            data.map((val, index) => {
                const {icon, heading, text} =val;
                
                return(
                <div className="about_description" key={index}> 
                    <div className="icon"> {icon} </div>                                   
                    <h3> {heading}</h3>
                    <p> {text} </p>    
                </div>
                
                );
            })
        }


        </>
    )
}

export default Discription;
