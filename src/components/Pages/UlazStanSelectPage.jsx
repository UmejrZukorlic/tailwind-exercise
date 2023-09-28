import React, { useContext } from "react";
import Layout from "../Layout/layout";
import StanTypeSelection from "../Sections/StanTypeSelection";
import Benefits from "../Sections/Benefits";
import { StanContext } from "../context";

const UlazStanSelectPage = () => {
  const { ulaz } = useContext(StanContext);
  return (
    <Layout>
      <div className="relative z-10 bg-teal-900 flex flex-col justify-center items-center mt-24 md:mt-24  lg:mt-0">
        <div className="bkg py-12 flex justify-center items-center w-full">
          <h1 className="text-4xl text-white font-bold  drop-shadow-[0_5px_9px_rgba(0,77,64,1)] text">
            ULAZ {ulaz}
          </h1>
        </div>
        <StanTypeSelection />
        <Benefits />
      </div>
    </Layout>
  );
};

export default UlazStanSelectPage;
