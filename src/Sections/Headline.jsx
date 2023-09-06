import React from "react";
import photo from "../assets/logoTest.png";
const Headline = () => {
  return (
    <div className="py-8 bg-cyan-900 flex flex-col items-center">
      <div className="my-6">
        <img src={photo} alt="slika" className="h-32 scale-150" />
      </div>
      <div className="my-6 text-5xl font-bold text-center text-gray-200">
        <h1>Bajrović Group</h1>
      </div>
      <div className="my-6">
        <h1 className="text-center m-0 text-3xl text-cyan-500">
          KVALITETNO | SIGRUNO | POVOLJNO
        </h1>
      </div>
      <div className="my-6 text-center text-lg w-10/12 md:w-2/3 text-gray-400">
        <p>
          Bajrović Group d.o.o. važi za jedno od najuspešnijih porodičnih
          građeviniskih preduzeća u Srbiji. Mi smo investitori, izvođači, a i
          vršimo direktnu prodaju naših viskokvalitetnih stanova kojima se
          ponosimo.
        </p>
      </div>
      <div className="my-6 w-2/3 flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-evenly">
        <button className="py-4 px-8 md:w-4/12 w-full  border-0 bg-cyan-700 text-white text-md font-body  transition-all hover:bg-cyan-400">
          STANOVI U PONUDI
        </button>
        <button className="py-4 px-8 md:w-4/12 w-full border-0 bg-cyan-700 text-white text-md font-body  transition-all hover:bg-cyan-400">
          OPŠIRNIJE O NAMA
        </button>
      </div>
    </div>
  );
};

export default Headline;
