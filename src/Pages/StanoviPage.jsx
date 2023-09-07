import React from "react";
import Layout from "../Layout/layout";
import Benefits from "../Sections/Benefits";

const StanoviPage = () => {
  const stanovi = [
    {
      id: 1,
      name: "GARSONJERE i JEDNOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/garsonjere-i-jednosobni-stanovi.jpg",
    },
    {
      id: 2,
      name: "JEDNOIPOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/jednoiposobni.jpg",
    },
    {
      id: 3,
      name: "DVOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvosobni.jpg",
    },
    {
      id: 4,
      name: "DVOIPOSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvoiposobni-stanovi.jpg",
    },
    {
      id: 5,
      name: "TROSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvosobni-18.jpg",
    },
    {
      id: 6,
      name: "ČETVOROSOBNI stanovi",
      imgUrl:
        "https://vuksainzenjering.com/wp-content/uploads/2021/07/dvosobni-18.jpg",
    },
  ];
  return (
    <Layout>
      <div className="relative z-10 bg-cyan-50">
        <div className="py-20 flex lg:flex-row flex-col justify-center items-center gap-10">
          <div className="lg:w-[40%] mt-10 text-center">
            <h1 className="text-6xl mb-2">Stanovi u ponudi</h1>
            <h2 className="text-4xl mb-8 text-cyan-600">
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
            <div className="w-1/2 rounded border-2 border-cyan-900 skew-x-12 border-solid overflow-hidden transition-all hover:bg-cyan-900 hover:text-white ">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925_1280.jpg"
                alt="sliak1"
                className="w-screen scale-x-125 h-3/4 skew-x-[-12deg]"
              />
              <h1 className="h-1/4 text-3xl flex justify-center items-center skew-x-[-12deg]">
                ULAZ A
              </h1>
            </div>
            <div className="w-1/2 rounded border-2 border-cyan-900 skew-x-12 border-solid overflow-hidden transition-all hover:bg-cyan-900 hover:text-white">
              <img
                src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
                alt="slika 2"
                className="w-screen scale-x-125 h-3/4 skew-x-[-12deg]"
              />
              <h1 className="h-1/4 text-3xl flex justify-center items-center skew-x-[-12deg]">
                ULAZ B
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-cyan-900">
          <div className="md:w-[80%] pt-20 text-cyan-600 flex justify-center items-center text-center gap-6">
            <span className="h-0 w-[30%] border border-solid border-cyan-600"></span>
            <h2 className="w-max font-extralight text-2xl">
              Odaberite željenu strukturu stana
            </h2>
            <span className="h-0 w-[30%] border border-solid border-cyan-600"></span>
          </div>
          <div className="w-[80%] py-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
            {stanovi.map((stan) => {
              return (
                <div
                  key={stan.id}
                  className="border-2 border-solid border-cyan-600">
                  <img src={stan.imgUrl} alt="stanovi" />
                  <h2 className="text-center text-white text-lg py-2 font-light">
                    {stan.name}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <Benefits />
      </div>
    </Layout>
  );
};

export default StanoviPage;
