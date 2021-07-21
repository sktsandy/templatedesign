import React, { useState } from 'react';
import TabData from './TabData';
import Tabcard from './Tabcard';
import TabButton from './TabButton';
import { purple } from '@material-ui/core/colors';

const allcategory = [...new Set(TabData.map((curElm) => curElm.category )),'all']

//console.log(allcategory);

const Tabs = () => {
    const [items, setItems] = useState(TabData);
    const [catItems, setCatItems] = useState(allcategory);
    const filterItem = (catItem) => {

        if (catItem === "all") {
            setItems(TabData); 
            return;
        }

      const updatedItem = TabData.filter((crruntElm) =>{
          return crruntElm.category === catItem;
      });
      
      setItems(updatedItem);
    }


    return (
        <>
            <div className="portfolio_tabs_wrapper">
                    <h1 className="text-center pt-5"> PORTFOLIO </h1>
                    <h4 className="text-center"> Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque </h4>

                        <TabButton filterItem={filterItem} catItems = {catItems}/>

                    <div className="container">
                        <div className="tab_wrap">
                        <div className="row">

                        {
                            items.map((elm, index)=>{
                                const {img, title} = elm;

                                return(
                                        <Tabcard 
                                            key = {index}
                                            img = {img}
                                            title = {title}
                                        />
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

export default Tabs;
