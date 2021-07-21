import React from 'react';
import AttachmentIcon from '@material-ui/icons/Attachment';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';

const Tabcard = (props) => {
    return (
        <>
        <div className="col-md-4">
            <div className="tab_images">
                <img src={props.img} alt="tabs" />
                    <div className="overlay">
                        <div className="tab_details">
                        <span> {props.title} </span>
                      <NavLink to="/portfolio">  <AttachmentIcon /> </NavLink>     
                             <AddIcon />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Tabcard;
