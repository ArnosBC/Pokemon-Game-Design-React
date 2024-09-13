import React, { useState } from "react";
import back from "../assets/atras.png";
import rigth from "../assets/derecha.png";
import left from "../assets/izquierda.png";
import swipeUp from "../assets/swipeUp.png";
import pokebola from "../assets/Pokebola.png";
import perfil from "../assets/Profile.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const InfoPokemon = ({ Pokemons }) => {
  const { id } = useParams();
  const pokemon = Pokemons[id];

  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    if (pokemon.name.toLowerCase() === "charizard") {
      setTimeout(() => {
        setIsAnimating(false);
        navigate("/fightPokemon");
      }, 500);
    } else {
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <header>
        <div className="flex justify-between mt-4">
          <Link
            to="/"
            className="bg-[#373737] w-[45px] h-[45px] p-3.5 rounded-lg flex justify-center ml-4"
          >
            <img src={back} alt="" />
          </Link>
          <div className="w-[45px] h-[45px] mr-4">
            <img src={perfil} alt="" />
          </div>
        </div>
      </header>
      <main className="relative flex flex-col">
        <div
          className={`flex justify-center`}
          style={{ filter: `drop-shadow(0px -100px 200px ${pokemon.color})` }}
        >
          <div className={`${pokemon.fondo.fondoImage}`}>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <h1 className="text-white font-semibold text-[35px]">
            {pokemon.name}
          </h1>
          <p
            className={`text-sm font-medium text-center w-[70px] rounded-full py-1 bg-[${pokemon.fondoContainer}] border-[#FFF]`}
          >
            {pokemon.type}
          </p>
          <p className="text-[#dddddd] text-[14px] text-center w-[360px]">
            {pokemon.description}
          </p>
          <a className="font-medium text-[white] underline" href="#">
            View Stats
          </a>
        </div>
        <div className="flex justify-between">
          <div className="mt-[-60px]">
            <img src={rigth} alt="Right Arrow" />
          </div>
          <div className="flex flex-col items-center gap-2 mt-12">
            <div className="bg-white flex flex-col items-center w-[55px] rounded-full py-1.5 px-1 shadow-[0_10px_30px_-10px_white]">
              <img className="w-[40px]" src={swipeUp} alt="Swipe Up" />
              <div>
                <img
                  className={`w-[40px] pokebolaSwipeUp ${
                    isAnimating ? "animate" : ""
                  }`}
                  onClick={handleClick}
                  src={pokebola}
                  alt=""
                />
              </div>
            </div>
            <p className="text-white font-medium">Swipe up to select</p>
          </div>
          <div className="mt-[-60px]">
            <img src={left} alt="Left Arrow" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoPokemon;
