import React, { useContext } from "react";
import { StanContext } from "../context";
import Layout from "../Layout/layout";

const StanPage = () => {
  const { fullStan } = useContext(StanContext);
  console.log(fullStan);
  return (
    <Layout>
      <div className="relative z-10 bg-teal-50">
        <div className="w-full py-12 mt-20 md:mt-0  bg-teal-600 flex justify-center items-center gap-6">
          <h1 className="text-4xl text-white text-center">
            STAN 8, 18, 28, 38, 48 - Jednoiposoban
          </h1>
        </div>
        <div className="p-20 grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-20">
          <div className="text-center lg:w-[80%] w-full ">
            <h1 className="text-2xl w-full p-4 text-white bg-teal-600 mb-4">
              3D PRIKAZ STANA
            </h1>

            <img src={fullStan.triDPrikaz} alt="stan" className="w-full" />
          </div>
          <div className="text-center lg:w-[80%] w-full">
            <h1 className="text-2xl w-full p-4 text-white bg-teal-600 mb-4">
              ORIJENTACIJA STANA- ULAZ A
            </h1>

            <img src={fullStan.orijentacijaStana} alt="lamela" />
          </div>
          <div className="text-center lg:w-[80%] w-full">
            <h1 className="text-2xl w-full p-4 text-white bg-teal-600 mb-4">
              RASOPRED PROSTORIJA
            </h1>
            <img src={fullStan.rasporedProstorija} alt="rasporedProstorija" />
          </div>
          <div className="text-center lg:w-[80%] w-full">
            <h1 className="text-2xl w-full p-4 text-white bg-teal-600 mb-4">
              OSNOVA STANA
            </h1>
            <img src={fullStan.osnovaStana} alt="osnovaStana" />
          </div>
          <div className="text-center w-[120%]">
            <h1 className="text-2xl w-full p-4 text-white bg-teal-600 mb-4">
              KVADRATURA PROSTORIJA
            </h1>
            <table className="border border-gray-600 w-full break-all">
              <tbody>
                <tr className="border border-gray-600">
                  <td className="border border-gray-600">BROJ</td>
                  <td className="border border-gray-600">PROSTORIJE</td>
                  <td className="border border-gray-600">Pm²</td>
                  <td className="border border-gray-600">Om²</td>
                  <td className="border border-gray-600">POD</td>
                  <td className="border border-gray-600">ZID</td>
                  <td className="border border-gray-600">PLAFON</td>
                </tr>
                {fullStan.kvadraturaProstorija.map((el) => {
                  return (
                    <tr className="border border-gray-600">
                      <td className="border border-gray-600">{el.raspored}</td>
                      <td className="border border-gray-600">{el.type}</td>
                      <td className="border border-gray-600">{el.povrsina}</td>
                      <td className="border border-gray-600">{el.obim}</td>
                      <td className="border border-gray-600">{el.pod}</td>
                      <td className="border border-gray-600">{el.zid}</td>
                      <td className="border border-gray-600">{el.plafon}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="text-center lg:w-[80%] w-full">
            <h1 className="text-2xl w-full p-4 text-white bg-teal-600 mb-4">
              DOSTUPNOST STANOVA
            </h1>
            <table className="border border-gray-600 bg-gray-400 w-full">
              <tbody>
                <tr className="border border-gray-600">
                  <td className="border border-gray-600">BROJ STANA</td>
                  <td className="border border-gray-600">SPRAT</td>
                  <td className="border border-gray-600">PRODAT</td>
                </tr>
                {fullStan.dostupnost.map((el) => {
                  return (
                    <tr className="border border-gray-600">
                      <td className="border border-gray-600">{el.brojStana}</td>
                      <td className="border border-gray-600">{el.sprat}</td>
                      <td className="border border-gray-600">{el.prodat}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StanPage;
