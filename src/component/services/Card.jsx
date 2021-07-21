import React from 'react'

const Card = (props) => {
    return (
        <>                                          
            <div className="col-md-4 mx-auto">
                 <div className="services_box">
                    <div className="service_icon">
                        {props.icon}
                    </div>
                        <h3> {props.heading} </h3>
                        <p> {props.discription} </p>
                </div>
            </div>
        </>
    )
}

export default Card;
