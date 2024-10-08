"use client";

import React, { useState } from "react";
import { Grid, Box, Card, CardContent, Button, Typography, Chip, Avatar, Slide } from "@mui/material";

const countryStateData = {
  Australia: ["Victoria"],
  India: ["Goa", "Madhya Pradesh", "Maharashtra", "Rajasthan"],
  "United States": ["California", "Texas", "New York"],
};

export default function CountryStateSelector() {
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Box className="p-10">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-4">
                Countries
              </Typography>
              <Box className="flex flex-col items-center">
                {Object.keys(countryStateData).map((country) => (
                  <Button
                    key={country}
                    variant={selectedCountry === country ? "contained" : "outlined"}
                    color={selectedCountry === country ? "primary" : "secondary"}
                    fullWidth
                    className="mb-3 transition-transform duration-300 hover:scale-105"
                    onClick={() => handleCountrySelect(country)}
                  >
                    {country}
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h5" className="text-center mb-4">
                {selectedCountry} States:
              </Typography>
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Box className="flex flex-wrap gap-3">
                  {countryStateData[selectedCountry].map((state) => (
                    <Chip
                      key={state}
                      label={state}
                      avatar={<Avatar>{state.charAt(0)}</Avatar>}
                      color="primary"
                      className="transition-transform duration-300 hover:scale-110"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Slide>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
