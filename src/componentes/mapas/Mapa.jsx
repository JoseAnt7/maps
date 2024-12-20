import React from "react";

const containerStyle = {
    width: '400px',
    height: '400px'
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};

export const Mapa = () => {

    return (
        <LoadScript googleMapsApiKey="TU_API_KEY">
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