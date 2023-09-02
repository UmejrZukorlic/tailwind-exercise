import React from "react";
import photo from "../assets/logoTest.png";
import { PiHandCoinsDuotone } from "react-icons/pi";
import { BsBank } from "react-icons/bs";

const Benefits = () => {
  return (
    <>
      <div className="py-8 bg-cyan-900 flex flex-col items-center ">
        <img src={photo} alt="slika" className="max-h-20 scale-150" />
        <p className="text-xl text-white font-body">
          <span className="text-cyan-600">39</span> godina iskustva, sa
          izgrađenih preko
          <span className="text-cyan-600"> 400 000 m2</span> stambenog prostora.
        </p>
      </div>
      <div className="relatve pt-20 flex flex-col items-center bg-cyan-50">
        <div className="w-[80%] flex justify-evenly items-center">
          <div className="w-28 aspect-square flex justify-center items-center">
            <PiHandCoinsDuotone className="w-24 h-24" />
          </div>
          <div className="w-[35%] text-black">
            <h3 className="text-cyan-600 text-2xl font-thin ">KVALITETNO</h3>
            <p>
              Stanovi su izgradjeni po najnovijim visokim standardima, pažnja je
              posvećena svakom detalju.
            </p>
          </div>
          <div className="w-28 aspect-square flex justify-center items-center">
            <BsBank className="w-24 h-24" />
          </div>
          <div className="w-[35%] text-black">
            <h3 className="text-cyan-600 text-2xl font-thin">POVOLJNO</h3>
            <p>
              Ako uporedite cenu i kvalitet naših stanova, sa cenama drugih,
              sličnih, biće vam jasno zašto.
            </p>
          </div>
        </div>
        <div className="py-20 text-center">
          <h1 className=" text-3xl font-thin">
            Do danas, <span className="text-cyan-600"> preko 4300</span> ljudi
            već živi u domovima koje smo im mi napravili.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Benefits;
