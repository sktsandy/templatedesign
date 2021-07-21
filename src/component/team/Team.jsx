import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TeamData from './TeamData';

const Team = () => {
    
    const [items, setItems] = useState(TeamData);
    
    return (
        <>
        <div className="our_team_wrapper">
            <h1 className="text-center mt-5"> TEAM </h1>
            <h4 className="text-center"> Sed ut perspiciatis unde omnis iste natus error
             sit voluptatem accusantium doloremque </h4>


            <div className="team_wrap">
                <div className="container">
                    <div className="row">

                    {
                        items.map((val, index) =>{
                            const {img, title, discription} =val;

                            return(
                                <div className="col-md-3" key={index}>
                                <div className="member">
                                     <img src={img} alt="team" />
                                </div>
                                <div className="team_discription">
                                    <h4> {title} </h4>
                                    <span> {discription} </span>
                                    <div className="social_icons">
                                        <TwitterIcon />
                                        <FacebookIcon />
                                        <InstagramIcon />
                                        <YouTubeIcon />
    
                                    </div>
    
                                </div>
                            </div>
                            );
                        })
                    }


                    </div>
                </div>
            </div>
        </div>

     </>
    )
}

export default Team;
