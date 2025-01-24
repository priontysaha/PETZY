import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Pet from "./Components/pages/Pet";
import Pet_Store from "./Components/pages/Pet_Store";
import Donation from "./Components/pages/Donation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/pet" element={<Pet />}></Route>
          <Route path="/pet_store" element={<Pet_Store />}></Route>
          <Route path="/donation" element={<Donation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
