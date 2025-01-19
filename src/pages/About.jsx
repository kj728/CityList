
import { Link } from 'react-router-dom'
import { FooterComponent } from '../components/Footer'
import './About.css'

export function AboutPageComponent() {
    return (
        <>
            <div className="about-page">
                <div className="about-content">
                    <Link to="/" className='nav-link'>Home</Link>
                    <h1>About This Project</h1>
                    <p>
                        Welcome to the City List App! This project is a collection of some of
                        the most famous cities around the world. Each city is accompanied by
                        key details, including population, country, and a stunning image.
                    </p>
                    <p>
                        As a developer learning React, this project is a fun exercise to
                        explore building dynamic and interactive applications.
                    </p>
                    <p>
                        From adding rich features to making the app responsive, this project
                        has been a wonderful learning experience. I hope you enjoy browsing
                        through the list of cities as much as I enjoyed creating it!
                    </p>
                </div>

                <div className="about-disclaimer">
                    <h2>Disclaimer</h2>
                    <p>
                        The information provided in this app is for entertainment purposes
                        only. The rankings are subjective and may not reflect actual global
                        standings. Visitors are encouraged to verify population data from
                        trusted sources.
                    </p>
                    <p>
                        All images used in this project were obtained from Unsplash and Pexels
                        under free license agreements.Please note that the list does not
                        exhaustively include all cities in the world.
                    </p>

                </div>


                <div className="">
                    <p>Yours truly,</p>
                    <p>KJ</p>

                </div>
            </div>

            <FooterComponent />


        </>
    )
}