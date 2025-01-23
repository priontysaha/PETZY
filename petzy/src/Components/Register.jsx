import {
  Button,
  Grid,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Register = () => {
  const heading = { fontSize: "2.5rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 10px",
  };
  const row = { display: "flex", marginTop: "2rem" };
  const btnStyle = {
    marginTop: "2rem",
    fontSize: "1.2rem",
    fontWeight: "700",
    backgroundcolor: "blue",
    borderRadius: "0.5rem",
  };
  return (
    <>
      <Grid align="center">
        <Paper
          style={paperStyle}
          sx={{
            width: {
              xs: "80vw",
              sm: "50vw",
              md: "40vw",
              lg: "30vw",
              xl: "20vw",
            },
            height: "60vh",
          }}
        >
          <Typography style={heading}>Register</Typography>
          <form>
            <TextField style={row} label="Enter Name"></TextField>
            <TextField style={row} label="Enter E-mail"></TextField>
            <TextField style={row} label="Enter Password"></TextField>
            <Button variant="contained" style={btnStyle}>
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;
