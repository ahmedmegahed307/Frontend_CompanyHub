import GoogleMapReact from 'google-map-react'
import React from 'react'

const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyCI2PFz1BE74zQa13ssmP1A0DDEmlOXOGQ" }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
    
  </GoogleMapReact>  )
}

export default GoogleMap