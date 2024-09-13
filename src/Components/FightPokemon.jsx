import React from "react";
import acuatico from "../assets/acuaticoVs.png";
import dragon from "../assets/dragonVs.png";
import player1 from "../assets/player-1.png";
import player2 from "../assets/Profile.png";
import live1 from "../assets/vidaPlayer-1.png";
import live2 from "../assets/vidaPlayer-2.png";
import line from "../assets/Line.png";
import position1 from "../assets/position-1.png";
import position2 from "../assets/position-2.png";
import position3 from "../assets/position-3.png";
import position4 from "../assets/position-4.png";

const FightPokemon = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <h1 className="font-medium text-[40px] text-center text-white">
          Battleground
        </h1>
        <div className="flex items-center justify-between">
          <div className="drop-shadow-[0_5px_40px_lightblue]">
            <img className="w-[150px]" src={acuatico} alt="" />
          </div>
          <div className="bg-[#23232399] rounded-lg py-2 px-2">
            <h2 className="text-[#757575] text-center">V/S</h2>
          </div>
          <div className="drop-shadow-[0_2px_40px_orange]">
            <img className="w-[150px]" src={dragon} alt="" />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-3 ml-6">
              <img src={player1} alt="" />
              <p className="text-white text-[17px]">Player 1</p>
            </div>
            <div className="w-[250px]">
              <img className="mt-[-50px]" src={live1} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3 mr-6">
              <p className="text-white font-semibold text-[17px]">You</p>
              <img src={player2} alt="" />
            </div>
            <div className="w-[250px]">
              <img className="mt-[-50px]" src={live2} alt="" />
            </div>
          </div>
        </div>
        <img className="w-full" src={line} alt="" />
        <h1 className="font-medium text-[#ffffff] text-center text-[34px]">
          Choose Your Attack
        </h1>
        <div className="flex flex-col items-center mt-12 gap-10">
          <div className="flex items-center gap-6">
            <div className="relative bg-[#ffe4dd] w-[200px] h-[150px] border-2 border-[#FF4210] rounded-lg">
              <img
                className="absolute top-[-30px] right-4 w-[150px]"
                src={position1}
                alt=""
              />
              <p className="absolute bottom-0 right-10 font-semibold text-[20px] text-[#FF4210] text-center">
                Giga Impact
              </p>
            </div>
            <div className="relative bg-[#222222] w-[200px] h-[150px] rounded-lg">
              <img
                className="absolute top-[-60px] right-1 w-[180px]"
                src={position2}
                alt=""
              />
              <p className="absolute bottom-0 right-14 font-semibold text-[20px] text-[#ffffff] text-center">
                Aerial Ace
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative bg-[#222222] w-[200px] h-[150px] rounded-lg">
              <img
                className="absolute top-[-45px] right-4 w-[150px]"
                src={position3}
                alt=""
              />
              <p className="absolute bottom-0 right-10 font-semibold text-[20px] text-[#FFFFFF] text-center">
                Flamethrower
              </p>
            </div>
            <div className="relative bg-[#222222] w-[200px] h-[150px] rounded-lg">
              <img
                className="absolute top-[-40px] right-1 w-[170px]"
                src={position4}
                alt=""
              />
              <p className="absolute bottom-0 right-14 font-semibold text-[20px] text-[#ffffff] text-center">
                Dragon Tail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightPokemon;
