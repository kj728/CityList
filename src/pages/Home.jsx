import { useState } from "react";
import { CityDisplayComponent } from "../components/CityDisplay";
import { FooterComponent } from "../components/Footer";
import { HeaderComponent } from "../components/Header";
import { HeroComponent } from "../components/Hero";
import { WelcomeComponent } from "../components/Welcome";
import { allCities } from "../js/cities";


export function HomePageComponent() {

    // Initialize state with the imported allCities array
      const [cities, setCities] = useState(allCities);
    
      //function to search for a specific city
      function searchCity(name) {
        setCities(
          allCities.filter(
            city =>
              city.cityName.toLowerCase().includes(name.toLowerCase()) ||
              city.country.toLowerCase().includes(name.toLowerCase())
          )
        );
      }
      
    return (
        <>

            <div className='wrapper'>
                <HeroComponent />
                <HeaderComponent setCities={searchCity} />
                <WelcomeComponent />
                <CityDisplayComponent cities={cities} />
                <FooterComponent />
            </div>
        </>
    )

}