import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Bar from "./components/Bar";
import ContextProvider from "./context/ContextAPI";
import Pokemones from "./views/Pokemones";
import DetallePokemon from "./views/DetallePokemon"; 
import './App.css'

function App() {
  return (

      <ContextProvider>
        <Bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<DetallePokemon />} /> 
        </Routes>
      </ContextProvider>
    
  );
}

export default App;
