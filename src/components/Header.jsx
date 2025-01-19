
import PropTypes from 'prop-types';
import './Header.css'
import { SearchComponent } from './Search'
import { Link } from 'react-router-dom';


export function HeaderComponent({ setCities }) {
    return (
        <>
            <nav className='nav-bar'>

                <div className="logo">
                    <h2>CITY LIST</h2>

                    <ul>
                        <Link to="/" className='nav-link'>Home</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                    </ul>
                </div>

                <div className="search">
                    <SearchComponent onSubmit={setCities} />
                </div>
            </nav>
        </>
    )
}

HeaderComponent.propTypes = {
    setCities: PropTypes.func.isRequired, // setCities is a required function
};