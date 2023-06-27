import React, { useRef, useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {
  apiKey: string;
}

const Map = ({ apiKey }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = initializeMap;

    return () => {
      // Clean up the Google Maps API script
      document.head.removeChild(script);
    };
  }, [apiKey]);

  const initializeMap = () => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current!, {
      center: { lat: 37.7749, lng: -122.4194 }, // Set the initial center of the map
      zoom: 10, // Set the initial zoom level of the map
    });

    // Add any additional map features or markers as needed
  };

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default Map;
