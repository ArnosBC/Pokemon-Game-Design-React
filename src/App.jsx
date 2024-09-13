import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";
import SelectPokemon from "./Components/SelectPokemon";
import { Pokemons } from "./data/Pokemons";
import InfoPokemon from "./Components/InfoPokemon";
import FightPokemon from "./Components/FightPokemon";
import { AlertCircle } from "react-feather";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
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
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative">
          <div className="bg-gray-900 bg-opacity-80 rounded-lg shadow-lg p-8 max-w-md w-full mx-4 text-center relative z-10">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-red-500 rounded-full border-8 border-white relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-gray-800"></div>
                </div>
              </div>
            </div>
            <h1
              className="text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Advertencia
            </h1>
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <p
              className="text-xl mb-6 text-white"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Solo se permite el uso para Mobile
            </p>
            <div className="text-sm text-gray-300">
              Por favor, accede desde un Mobilepara continuar tu aventura
              Pokémon.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
