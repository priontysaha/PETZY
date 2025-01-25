import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";

const Home = () => (
  <Container
    sx={{
      textAlign: "center",
      mt: { xs: 10, sm: 20, md: 30 },
      maxWidth: "500px",
    }}
  >
    <Paper
      sx={{
        padding: 4,
        borderRadius: 4,
        boxShadow: 6,
        backgroundColor: "#ffffff",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          color: "rgb(60, 52, 216)",
        }}
      >
        Welcome to Petzy
      </Typography>
      <Typography
        sx={{
          mb: 2,
          textAlign: "center",
          lineHeight: 1.6,
          fontSize: "1rem",
          fontFamily: "'Poppins', sans-serif",
        }}
        color="text.secondary"
      >
        "Saving one pet won't change the world, but for that pet, the world will
        change forever."
      </Typography>
      <Typography
        sx={{
          mb: 4,
          textAlign: "center",
          lineHeight: 1.6,
          fontSize: "1rem",
          fontFamily: "'Poppins', sans-serif",
        }}
        color="text.secondary"
      >
        Find your perfect companion today and give them the loving home they
        deserve.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Link to="/adopt" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                padding: "1rem 3rem",
                borderRadius: 2,
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#3498db",
                fontFamily: "'Poppins', sans-serif",
              }}
              aria-label="Adopt a pet"
            >
              Adopt Now
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/donate" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                padding: "1rem 3rem",
                borderRadius: 2,
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#2ecc71",
                fontFamily: "'Poppins', sans-serif",
              }}
              aria-label="Support our cause"
            >
              Support Us
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default Home;
