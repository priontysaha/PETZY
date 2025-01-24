import {
  Button,
  Grid,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
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
        <Typography style={heading}>Login</Typography>
        <form>
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={row}
            label="Enter E-mail"
            type="email"
          ></TextField>
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={row}
            label="Enter Password"
            type="password"
          ></TextField>
          <Button type="submit" variant="contained" style={btnStyle}>
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
