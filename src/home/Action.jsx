import React from 'react';
import { NavLink } from 'react-router-dom';

const Action = () => {
    return (
        <>
            <div className="call_to_action" style={{backgroundImage: `url("images/call-to-action-bg.jpg")`}}>
               <div className="call_to_action_contant">
                   <div className="row">
                       <div className="col-md-9">
                           <h2> Call To Action </h2>
                           <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum. </p> 
                        </div>                 
                       <div className="col-md-3">
                            <NavLink to='#'> <button className="Action_btn"> Call To Action </button> </NavLink>  
                       </div>                     
                   </div>
                </div> 
            </div>
        </>
    )
}

export default Action;
