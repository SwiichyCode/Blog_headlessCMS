import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LocationWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  letter-spacing: -0.36px;
`;

const Location = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          getLocationDetails(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    };

    const getLocationDetails = async (latitude: number, longitude: number) => {
      try {
        // Make an API call to a geocoding service to get location details
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=c467e296d0ea83f73a0738bc1e822ff8`
        );
        const data = await response.json();
        if (data.length > 0) {
          const city = data[0].name;
          const countryCode = data[0].country;
          setLocation(`${city}, ${countryCode}`);
        }
      } catch (error: any) {
        console.error("Error fetching location details:", error.message);
      }
    };

    getLocation();
  }, []);

  return <LocationWrapper>{location ? location : "Paris, FR"}</LocationWrapper>;
};

export default Location;
