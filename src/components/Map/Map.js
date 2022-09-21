import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 13.067439,
    lng: 80.237617
};

export const Map = () => {
    const location = useCurrentLocation();

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBHAg852x7fYORQ0iGvHcDPJeKiFzZWMSQ"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                {/* <Marker position={{lat,lng}}/> */}
            </GoogleMap>
        </LoadScript>
    )

}