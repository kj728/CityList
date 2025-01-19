import PropTypes from 'prop-types'
import './CityDisplay.css'

export function CityDisplayComponent({cities}) {

    return (
        <>
            <div className='city-display'>
            {cities.length === 0 && "Oops! You caught us...That city is not yet in our list!"}
                {cities.map((city) => (
                    <div className="city-card" key={city.id}>
                        <img src={city.imageUrl} alt="city-image" />
                        <div className="content">
                            <h3>#{city.id}</h3>
                            <h3>{city.cityName}</h3>
                            <h4>{city.country}</h4>
                            <h4>Population Size: {city.population.toLocaleString()}</h4>
                            <p>Known for: {city.knownFor}</p>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}


CityDisplayComponent.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      knownFor: PropTypes.string.isRequired
    })
  ).isRequired,
}


