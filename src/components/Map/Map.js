import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 40.067439,
    lng: 73.237617
};

export const Map = ({ current = {}, data }) => {
    const location = useCurrentLocation();

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBHAg852x7fYORQ0iGvHcDPJeKiFzZWMSQ"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: current.lat, lng: current.long }}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker position={{ lat: current.lat, lng: current.long }} />
            </GoogleMap>
        </LoadScript>
    )

}