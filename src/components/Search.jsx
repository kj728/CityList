import { useState } from 'react';
import './Search.css';

// eslint-disable-next-line react/prop-types
export function SearchComponent({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('');

    // This function handles the input change and calls onSubmit immediately
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSubmit(value); // Call onSubmit with the current input value
    };

    // This function handles form submission
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(searchTerm); // Call onSubmit with the search term
    }

    return (
        <>
            <div className='search-box'>
                <form onSubmit={handleSubmit}>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleChange} // Call handleChange on input change
                            placeholder='Search by city or country...'
                        />
                        <button type="submit"><span>&#x1F50D;</span></button>
                    </div>
                </form>
                <div className="dynamic-island">
                    {/* You can add dynamic suggestions or other UI elements here */}
                </div>
            </div>
        </>
    );
}
