import React from 'react';
import IconLink from './IconsLink';
import Form from './Form';
import Map from './Map';
const Contact = () => {
    return (
        <>
        <div className="contact_us_wrapper margin_top">
            <h2 className="text-center pt-5"> CONTACT </h2> 
            <h4 className="text-center pt-2"> Sed ut perspiciatis unde omnis iste natus error sit 
            voluptatem accusantium doloremque</h4>

                <Map />

        <div className="contact_wrap">
            <div className="container">
                <div className="row">
                        <div className="col-md-5"> 
                            <IconLink />
                        </div>
                        <div className="col-md-7">
                            <Form />
                      </div>
                </div>
            </div>
        </div>

        </div>
     </>
    )
}

export default Contact;
