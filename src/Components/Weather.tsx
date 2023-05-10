import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

const API_KEY = "944e06289ab841e9be5175303230805";

interface WeatherData {
  current: {
    temp_c: number;
    humidity: number;
  };
}

function Weather({ location }: { location: string }) {
  const { palette } = useTheme();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [location]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = weatherData.current.temp_c;
  const humidity = weatherData.current.humidity;

  return (
    <Box
      textAlign={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={"2rem"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      <Typography variant="h3" color={palette.primary[300]}>
        Weather for {location}
      </Typography>
      <Typography variant="h4" color={palette.secondary[300]}>
        Temperature: {temperature} °C
      </Typography>
      <Typography variant="h4" color={palette.secondary[300]}>
        Humidity: {humidity}%
      </Typography>
    </Box>
  );
}

export default Weather;
