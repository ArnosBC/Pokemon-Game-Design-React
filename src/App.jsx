import { useState } from "react";
import "./App.css";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";
import SelectPokemon from "./Components/SelectPokemon";
import { Pokemons } from "./data/Pokemons";
import InfoPokemon from "./Components/InfoPokemon";
import FightPokemon from "./Components/FightPokemon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectPokemon Pokemons={Pokemons} />} />
          <Route
            path="/info-pokemon/:id"
            element={<InfoPokemon Pokemons={Pokemons} />}
          />
          <Route path="/fightPokemon" element={<FightPokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
