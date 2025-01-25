import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const heading = { fontSize: "2.5rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
  };
  const row = { display: "flex", marginTop: "2rem" };
  const btnStyle = {
    marginTop: "2rem",
    fontSize: "1.2rem",
    fontWeight: "700",
    backgroundColor: "blue",
    color: "white",
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
          height: "auto",
        }}
      >
        <Typography style={heading}>Register</Typography>
        <form>
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={row}
            label="Enter Name"
            type="text"
            fullWidth
          />
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={row}
            label="Enter E-mail"
            type="email"
            fullWidth
          />
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={row}
            label="Enter Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" style={btnStyle} fullWidth>
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;

