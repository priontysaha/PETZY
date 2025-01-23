import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import Logout from "./Logout";
const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          {" "}
          PETZY
        </Typography>
        <Button variant="contained" to="/login" component={Link}>
          Login
        </Button>
        <Button variant="contained" to="/register" component={Link}>
          Register
        </Button>
        <Logout />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
