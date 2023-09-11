import React, { useContext } from "react";
import Layout from "../Layout/layout";
import Benefits from "../Sections/Benefits";
import StanTypeSelection from "../Sections/StanTypeSelection";
import { Link } from "react-router-dom";
import { StanContext } from "../context";

const StanoviPage = () => {
  const { setUlaz } = useContext(StanContext);
  return (
    <Layout>
      <div className="relative z-10 bg-teal-50">
        <div className="py-20 flex lg:flex-row flex-col justify-center items-center gap-10">
          <div className="lg:w-[40%] mt-10 text-center">
            <h1 className="text-6xl mb-2">Stanovi u ponudi</h1>
            <h2 className="text-4xl mb-8 text-teal-600">
              Stanovi u izgradnji ------ --
            </h2>
            <p className="text-justify mb-2 text-xl px-8">
              Izgradnja objekta u Novom Pazaru, ulica ------- --, koja je jedna
              od urbanih lokacija u zoni grada koja je u razvitku kako za život,
              tako i za poslovanje.
            </p>
            <p className="text-justify mb-2 text-xl px-8">
              Agenti u sektoru za marketing i prodaju nekretnina pružiće vam sve
              potrebne informacije, oni vrše direktnu prodaju, bez posrednika, a
              obučeni su tako da vam na najbolji način približe prostor koji
              prodajemo.
            </p>
          </div>
          <div className="lg:w-[40%] w-[80%] flex justify-center py-10">
            <div
              className="w-1/2 rounded border-2 border-teal-900 skew-x-12 border-solid overflow-hidden transition-all hover:bg-teal-900 hover:text-white"
              onClick={() => {
                setUlaz("A");
              }}>
              <Link to="/ulazi/select-stan">
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
              className="w-1/2 rounded border-2 border-teal-900 skew-x-12 border-solid overflow-hidden transition-all hover:bg-teal-900 hover:text-white"
              onClick={() => {
                setUlaz("B");
              }}>
              <Link to="/ulazi/select-stan">
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
        <div className="flex flex-col items-center bg-teal-900">
          <div className="md:w-[80%] pt-20 text-teal-600 flex justify-center items-center text-center gap-6">
            <span className="h-0 w-[30%] border border-solid border-teal-600"></span>
            <h2 className="w-max font-extralight text-2xl">
              Odaberite željenu strukturu stana
            </h2>
            <span className="h-0 w-[30%] border border-solid border-teal-600"></span>
          </div>
          <div
            onClick={() => {
              setUlaz(false);
            }}
            className="flex justify-center items-center">
            <StanTypeSelection />
          </div>
        </div>
        <Benefits />
      </div>
    </Layout>
  );
};

export default StanoviPage;
