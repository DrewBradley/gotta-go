import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './SearchMap.css';
import SearchBar from '../Search/SearchBar';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const mapStyles = {
  position: 'relative',  
  width: '100%',
  height: '100%'
};

const SearchMap = () => {
  const [location, setLocation] = useState(
    {lat: 37.42216, lng: -122.08427,}
    )
  const [bathrooms, setBathrooms] = useState([])
  
  const bathroom = {
    address: 'Denver, CO',
    lat: 39.73104,
    lng: -104.98891,
  }

  return (
      <div className="map">
        <SearchBar 
          setLocation={setLocation} 
          location={location} 
          setBathrooms={setBathrooms}/>

        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.REACT_APP_WEATHER_API_KEY}}
          defaultCenter={bathroom}
          defaultZoom={14}
        >
          <LocationPin
            dataWidth={30}
            lat={bathroom.lat}
            lng={bathroom.lng}
            text={bathroom.address}
          />
        </GoogleMapReact>
      </div>
  )
}

export default SearchMap