import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";

const Home = () => (
  <Container sx={{ textAlign: "center", mt: 10 }}>
    <Paper
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
        Welcome to Petzy
      </Typography>
      <Typography sx={{ mb: 2 }}>
        "Saving one pet won't change the world, but for that pet, the world will
        change forever."
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Find your perfect companion today and give them the loving home they
        deserve.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link to="/adopt" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ padding: "0.8rem 2rem", borderRadius: 1 }}
            >
              Adopt Now
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/donate" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              sx={{ padding: "0.8rem 2rem", borderRadius: 1 }}
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
