import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const styles = {
    heading: {
      fontSize: "2rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "1rem",
    },
    paper: {
      padding: "2rem",
      margin: "100px auto",
      borderRadius: "1rem",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    input: { marginTop: "1.5rem" },
    button: {
      marginTop: "2rem",
      fontSize: "1.2rem",
      fontWeight: "700",
      backgroundColor: "#1976d2",
      color: "#fff",
      borderRadius: "0.5rem",
      padding: "0.8rem 0",
    },
    linkText: { marginTop: "1.5rem", fontSize: "1rem" },
  };

  return (
    <Grid container justifyContent="center">
      <Paper
        style={styles.paper}
        sx={{
          width: { xs: "90vw", sm: "60vw", md: "40vw", lg: "30vw", xl: "25vw" },
          maxWidth: "450px",
        }}
      >
        <Typography style={styles.heading}>Create Your Account</Typography>
        <form>
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={styles.input}
            label="Full Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={styles.input}
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
            style={styles.input}
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" style={styles.button} fullWidth>
            Register
          </Button>
          <Typography style={styles.linkText}>
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Login here
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
