import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({setLocation, location, setBathrooms}) => {
  const [zipCode, setZipCode] = useState("")
  const [city, setCity] = useState("")

  const handleZip = (event) => {
    setZipCode(event.target.value);
  }

  const handleCity = (event) => {
    setCity(event.target.value);
  }

  const returnLatLong = () => {
    fetch(`https://geocode.xyz/${zipCode}+${city}?json=1`)
    .then(response => response.json())
    .then(data => setLocation({lat: data.latt, lng: data.longt}))
  }

  const findBathrooms = (event) => {
    returnLatLong()
    event.preventDefault()
    fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=5&ada=true&unisex=true&lat=${location.lat}&lng=${location.lng}`)
    .then(response => response.json())
    .then(data => setBathrooms(data))
  }

  return (
      <form className="SearchBar">
        <input 
          type="text"
          name="zipcode"
          placeholder="Zip Code"
          value={zipCode}
          onChange={handleZip}
        />
        <input 
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={handleCity}
        />
        <button onClick={(e) => findBathrooms(e)}>Search</button>
      </form>
  )
}

export default SearchBar;