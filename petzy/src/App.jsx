import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Pet from "./Components/pages/Pet";
import Pet_Store from "./Components/pages/Pet_Store";
import Donation from "./Components/pages/Donation";
import Adoptpage from "./Components/pages/Adoptpage";
import Donatepage from "./Components/pages/Donatepage";

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
          <Route path="/adopt" element={<Adoptpage />} />
          <Route path="/donate" element={<Donatepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
