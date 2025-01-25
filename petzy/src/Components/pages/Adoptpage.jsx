import React from "react";
import { Link } from "react-router-dom";
import { Typography, Tabs, Tab, Paper } from "@mui/material";

const Adoptpage = () => {
  return (
    <Paper
      sx={{
        width: "100%", // Full width
        height: "100vh", // Full viewport height
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Stack content vertically
        justifyContent: "flex-start", // Align content to the top
        alignItems: "center", // Horizontally center content
        padding: 4,
        borderRadius: 3,
        boxShadow: 4,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontFamily: "'Poppins', sans-serif",
          color: "rgb(60, 52, 216)",
        }}
      >
        Find Your Paws
      </Typography>

      <Tabs
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        <Tab
          label="Our Pets"
          component={Link}
          to="/pets"
          sx={{ fontWeight: "bold" }}
        />
        <Tab
          label="Dogs"
          component={Link}
          to="/dogs"
          sx={{ fontWeight: "bold" }}
        />
        <Tab
          label="Cats"
          component={Link}
          to="/cats"
          sx={{ fontWeight: "bold" }}
        />
        <Tab
          label="Birds"
          component={Link}
          to="/birds"
          sx={{ fontWeight: "bold" }}
        />
        <Tab
          label="Others"
          component={Link}
          to="/others"
          sx={{ fontWeight: "bold" }}
        />
      </Tabs>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontFamily: "'Poppins', sans-serif",
          color: "#333",
        }}
      ></Typography>
    </Paper>
  );
};

export default Adoptpage;
