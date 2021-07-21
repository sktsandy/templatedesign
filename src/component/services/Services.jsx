import React, { useState } from 'react';
import Sdata from './Sdata';
import Card from './Card';
const Services = () => {
    const [data, setData] = useState(Sdata);
    return (
        <>
        <div className="service_section_wrapper margin_top">
                <h1 className="text-center mt-5"> SERVICES </h1>
                <h4 className="text-center"> Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque </h4> 
            <div className="container">
                <div className="row">      
                    {
                        data.map((val, index)=>{
                        const {icon, heading, discription} = val;
                        return(
                            <Card 
                                key={index}
                                heading={heading}
                                icon={icon}
                                discription={discription}
                            />
                             );
                          })
                     }

                </div>
            </div>
        </div>
     </>
    )
}

export default Services;
