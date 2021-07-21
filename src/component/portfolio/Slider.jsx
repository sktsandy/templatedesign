import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <>
            <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false} showStatus={false}>
                    <img src="images/portfolio-details-1.jpg" alt="portfolio-detail" />
                    <img src="images/portfolio-details-2.jpg" alt="portfolio-detail" />
                    <img src="images/portfolio-details-3.jpg" alt="portfolio-detail" />
             </Carousel> 
        </>
    )
}

export default Slider;
