import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const IconsLink = () => {
    return (
        <>
             <div className="contact_icon">
                 <span><LocationOnIcon /> </span>  <p> A108 Adam Street New York, NY 535022</p>
             </div>
                                                
             <div className="contact_icon">
                 <MailOutlineIcon /> <p> info@example.com</p>
             </div>  
             <div className="contact_icon">
                <PhoneAndroidIcon /> <p> +1 5589 55488 55s </p>
             </div>
             <div className="contact_social_link">
                 <TwitterIcon />
                <FacebookIcon />
                 <InstagramIcon />
                <YouTubeIcon />                              
             </div>

        </>
    )
}

export default IconsLink;
