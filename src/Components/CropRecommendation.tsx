import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

const API_KEY = "944e06289ab841e9be5175303230805";
const CROP_RECOMMENDATIONS = {
  corn: {
    minTemp: 12,
    maxTemp: 30,
    minHumidity: 50,
    maxHumidity: 90,
    recommendation: "Corn is suitable for these conditions",
  },
  wheat: {
    minTemp: 7,
    maxTemp: 27,
    minHumidity: 30,
    maxHumidity: 80,
    recommendation: "Wheat is suitable for these conditions",
  },
  rice: {
    minTemp: 16,
    maxTemp: 30,
    minHumidity: 20,
    maxHumidity: 80,
    recommendation: "Rice is suitable for these conditions",
  },
  // Add more crop recommendations as needed
};

interface WeatherData {
  current: {
    temp_c: number;
    humidity: number;
  };
}

function CropRecommendation({ location }: { location: string }) {
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

  const suitableCrops = Object.entries(CROP_RECOMMENDATIONS)
    .filter(([_, { minTemp, maxTemp, minHumidity, maxHumidity }]) => {
      return (
        temperature >= minTemp &&
        temperature <= maxTemp &&
        humidity >= minHumidity &&
        humidity <= maxHumidity
      );
    })
    .map(([crop, { recommendation }]) => {
      return (
        <Typography
          variant="h4"
          color={palette.secondary[300]}
          key={crop}
          paddingBottom={"1rem"}
        >
          {recommendation}
        </Typography>
      );
    });

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
        Crop Recommendations based on current trends
      </Typography>
      {suitableCrops.length > 0 ? (
        <Typography variant="h4" color={palette.secondary[300]}>
          {suitableCrops}
        </Typography>
      ) : (
        <Typography variant="h4" color={palette.secondary[300]}>
          No suitable crops found for these conditions
        </Typography>
      )}
    </Box>
  );
}

export default CropRecommendation;
