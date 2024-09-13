import React from "react";
import Pokebola from "../assets/Pokebola.png";
import { Link, useNavigate } from "react-router-dom";
import back from "../assets/atras.png";
import perfil from "../assets/Profile.png";

const SelectPokemon = ({ Pokemons }) => {
  const navigate = useNavigate();
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
      <main className="flex flex-col relative">
        <div className="absolute top-[-35px] left-0 w-4/5 h-4/5 bg-[url('/src/assets/FondoPokeBola.png')] bg-cover bg-center opacity-60 z-[-1]"></div>
        <div className="text-white ml-4 mt-6">
          <h3 className="text-[34px] font-light">Select Your</h3>
          <h2 className="flex text-[45px] items-center font-semibold mt-[-15px]">
            Pokemon <img className="pl-3 pt-4" src={Pokebola} alt="" />
          </h2>
        </div>
        <div className="relative">
          <div className="text-white absolute bottom-32 ml-4">
            <p className="text-[20px] font-normal">
              3 Pokemon's <br /> in your <br />
              Pokedex
            </p>
          </div>
          <div className="pt-5 flex flex-col items-end gap-14 justify-center mr-[-70px] relative">
            {Pokemons.map((item, index) => (
              <div
                key={index}
                className={`${item.fondo.fondoImage} relative h-[220px] w-[350px] bg-[${item.fondo.fondoColor}] rounded-2xl group transition-transform duration-300 ease-in-out transform hover:scale-125 hover:z-10 cursor-pointer`}
                onClick={() => navigate(`/info-pokemon/${index}`)}
              >
                <img
                  className="absolute top-[-70px] right-0 w-[280px]"
                  src={item.image}
                  alt=""
                />
                <div className="absolute bottom-4 left-4">
                  <h1 className="font-bold text-[24px]">{item.name}</h1>
                  <div className="flex gap-3">
                    <h3
                      className={`flex items-center gap-1 justify-center bg-[${item.fondo.cartaColor}] py-1 px-3 rounded-full`}
                    >
                      <p className="font-semibold text-[16px]">{item.type}</p>
                    </h3>
                    <h3
                      className={`bg-[${item.fondo.cartaColor}] py-1 px-3 rounded-full`}
                    >
                      <p className="font-semibold text-[16px]">
                        {item.Evolution}
                      </p>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="hidden bg-[#B2FFE2]">
        <br className="bg-[#9ee2c9]" />
        <br className="bg-[#FFB444]" />
        <br className="bg-[#e6a23d]" />
        <br className="bg-[#A2DDF4]" />
        <br className="bg-[#91c4d7]" />
      </div>
    </div>
  );
};

export default SelectPokemon;
