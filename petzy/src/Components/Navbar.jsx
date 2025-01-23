import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}> PETZY</Typography>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Register</Button>
        <Button variant="contained">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
