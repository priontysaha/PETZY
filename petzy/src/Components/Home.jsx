import React from "react";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      {" "}
      <Button color="warning" variant="contained" to="/home" component={Link}>
        Home
      </Button>
    </>
  );
};

export default Home;
