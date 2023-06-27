import { Box, RadioGroup, Switch, HStack } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {
  apiKey: string;
}

const GoogleMap = ({ apiKey }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapType, setMapType] = useState<"technicians" | "jobs">("technicians");

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
    const map = new window.google.maps.Map(mapRef.current!, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 10,
    });
  };

  const handleMapTypeChange = (value: "technicians" | "jobs") => {
    setMapType(value);
  };

  return (
    <Box mt={20}>
      <RadioGroup value={mapType} onChange={handleMapTypeChange}>
        <HStack spacing={4} mb={4}>
          <Switch
            size="md"
            colorScheme="teal"
            value="technicians"
            isChecked={mapType === "technicians"}
            onChange={() =>
              handleMapTypeChange(
                mapType === "technicians" ? "jobs" : "technicians"
              )
            }
          >
            Show technicians locations
          </Switch>
          <Switch
            size="md"
            colorScheme="teal"
            value="jobs"
            isChecked={mapType === "jobs"}
            onChange={() =>
              handleMapTypeChange(mapType === "jobs" ? "technicians" : "jobs")
            }
          >
            Show jobs locations
          </Switch>
        </HStack>
      </RadioGroup>
      <div ref={mapRef} style={{ height: "500px", width: "100%" }} />
    </Box>
  );
};

export default GoogleMap;
