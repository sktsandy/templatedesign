import { KeyboardReturnOutlined } from '@material-ui/icons';
import React from 'react'

const TabButton = ({ filterItem, catItems}) => {
    return (
        <>
            <div className="tab_btns">

                {
                    catItems.map((currElm, index) =>{
                      return  <button className="tab_btn" key={index} onClick={() => filterItem(currElm)}> {currElm} </button>
                    })
                }

                    { /*<button onClick={() => setItems(TabData)}> All </button> */}
                    
            </div>  
        </>
    )
}

export default TabButton;
