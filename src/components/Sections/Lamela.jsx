import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StanContext } from "../context";

const Lamela = () => {
  const { setUlaz } = useContext(StanContext);
  return (
    <div className="bkg flex flex-col items-center relative">
      <div className="md:w-7/12 w-3/4 flex justify-center items-center">
        <span className="md:w-40 h-px bg-gray-400"></span>
        <h1 className="px-4 py-8 text-2xl font-thin text-gray-500">
          ODABERETE ŽELJENI ULAZ
        </h1>
        <span className="md:w-40 h-px bg-gray-400"></span>
      </div>
      <p className="text-xl w-4/5 md:w-7/12 text-gray-900 text-center">
        Imamo preko 200 stanova u ponudi u Beogradu, na raskrsnici Beranske i
        Bulevara oslobođenja. U ponudi su garsonjere, 1.0, 1.5, 2.0, 2.5, 3.0 i
        4.0 stanovi izrađeni po najnovijim standardima.
      </p>
      <h3 className="text-2xl w-4/5 font-thin text-center py-4 text-teal-900">
        Svi stanovi imaju građevinsku dozvolu, lift i podzemnu garažu.
      </h3>
      <div className="flex justify-center py-10">
        <div
          className="w-1/3 rounded border-2 border-teal-900 skew-x-12 border-solid overflow-hidden transition-all hover:bg-teal-900 hover:text-white "
          onClick={() => {
            setUlaz("A");
          }}>
          <Link to="/enters/select-apartment">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925_1280.jpg"
              alt="sliak1"
              className="w-screen scale-x-125 h-3/4 skew-x-[-12deg]"
            />
            <h1 className="h-1/4 text-3xl flex justify-center items-center skew-x-[-12deg]">
              ULAZ A
            </h1>
          </Link>
        </div>
        <div
          className="w-1/3 rounded border-2 border-teal-900 skew-x-12 border-solid overflow-hidden transition-all hover:bg-teal-900 hover:text-white"
          onClick={() => {
            setUlaz("B");
          }}>
          <Link to="/enters/select-apartment">
            <img
              src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
              alt="slika 2"
              className="w-screen scale-x-125 h-3/4 skew-x-[-12deg]"
            />
            <h1 className="h-1/4 text-3xl flex justify-center items-center skew-x-[-12deg]">
              ULAZ B
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lamela;
