import { useState } from "react";

import "./App.css";
import Home from "./views/Home";
import Bar from "./components/Bar";
import ContextProvider from "./context/ContextAPI";
import { Route, Routes } from "react-router-dom";
import Pokemones from "./views/Pokemones";

function App() {
  return (
    <>
      <ContextProvider>
      <Bar></Bar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemones" element={<Pokemones />} />



      </Routes>
      </ContextProvider>{" "}
    </>
  );
}

export default App;
