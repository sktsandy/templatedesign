import React from 'react';
import Pheader from './Pheader';
import Card from './Card';
import Slider from './Slider';
import Summary from './Summary';

const Portfolio = () => {
    return (
        <>     
        <div className="portfolio_wrapper margin_top">
            {/******* portfolio header component here ***/}
            <Pheader />

            <div className="portfolio_details_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/******  portifolio Slider images here  ***/}                          
                            <Slider />
                        </div>
                                              
                        <div className="col-md-4">                       
                            {/******  portifolio detail card here  ***/}
                            <Card />
                            <Summary />   
                        </div>
                    </div>
                </div>
            </div>         
        </div>

     </>
    )
}

export default Portfolio;
