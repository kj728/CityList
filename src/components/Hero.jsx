/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { filterImageUrls } from '../js/cities'
import './Hero.css'

export function HeroComponent() {

    const backgroundImages = filterImageUrls();
    const [currentImage, setCurrentImage] = useState(backgroundImages[0]);
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % backgroundImages.length; // Cycle through the images
            setCurrentImage(backgroundImages[index]);
        }, 4000); // Change image every 5 seconds
        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${currentImage})` }}>

                <div className='landing'>
                    <div className="div first">
                        <h1>WORLD&apos;S</h1>
                    </div>
                    <div className="div second">
                        <h1>MOST FAMOUS</h1>
                    </div>
                    <div className="div third">
                        <h1>CITIES</h1>
                    </div>
                </div>

            </div>
        </>
    )
}   
