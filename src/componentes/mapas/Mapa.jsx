import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '1900px',
    height: '1080px'
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};

export const Mapa = () => {

    return (
        <LoadScript googleMapsApiKey="AIzaSyCY8RgJeHwHxnKmoIM1TQ_1g0WTnSNE2T0">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
          </GoogleMap>
        </LoadScript>
      )


}