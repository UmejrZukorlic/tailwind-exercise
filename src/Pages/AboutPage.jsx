import React from "react";
import Layout from "../Layout/layout";
import photo from "../assets/logoTest.png";

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center relative z-10 bg-cyan-50">
        <div className="w-[80%] flex flex-col items-center py-12  mt-20 md:mt-0 ">
          <div className="w-full flex justify-center items-center gap-8 text-center">
            <span className="w-[30%] border-b border-solid border-b-gray-700 hidden md:block"></span>
            <h2 className="md:text-4xl text-3xl font-thin text-cyan-900">
              Građevinska firma
            </h2>
            <span className="w-[30%] border-b border-solid border-b-gray-700 hidden md:block"></span>
          </div>
          <h1 className="m-5 md:text-5xl text-4xl text-center text-cyan-600">
            BAJROVIĆ GROUP D.O.O.
          </h1>
        </div>
        <div className="md:w-[80%] w-[90%] pt-4 pb-32 flex flex-col md:flex-row  justify-center items-center">
          <div className="md:w-[66%] w-full md:pr-4">
            <p className="text-justify text-xl mx-2">
              Naša firma uspešno posluje na teritoriji Beograda i važi za jedno
              od najuspešnijih porodičnih preduzeća u Srbiji.
            </p>
            <p className="text-justify text-xl mx-2">
              Na temelju <b>građevinske tradicije duge 35 godina</b> konstantno
              razvija savremena rešenja u oblasti gradnje, istovremeno poštujući
              ustanovljene i proverene tehnike i primenu građevinskih
              materijala, pa se može pohvaliti primenom opeke – sendvič fasadnih
              zidova, što obezbeđuje maksimalan kvalitet.
            </p>
            <p className="text-justify text-xl mx-2 text-cyan-600">
              Firma je osnovana kao građevinska zanatska radnja još 1975.
              godine, a od 2004. godine je registrovana kao društvo za
              građevinske poslove. Zahvaljujući proširivanju aktivnosti razvilo
              se u sistem koji obuhvata više funkcionalnih podcelina koje
              pokrivaju proces investiranja objekta, raseljavanja lokacije,
              projektovanje, gradnju i tehnički nadzor.
            </p>
            <p className="text-justify text-xl mx-2">
              U našem sistemu je zaposlen visokokvalifikovan i maksimalno obučen
              kadar, koji ima dugodišnje iskustvo u obavljanju ovih poslova.
            </p>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt="slika"
            className="md:w-[33%] w-full mt-8 md:mt-0"
          />
        </div>
      </div>
      <div className=" w-full bg-cyan-900 pt-20 pb-8 flex md:flex-row flex-col justify-center items-center relative z-10">
        <img
          src={photo}
          alt="logo"
          className="max-h-36 absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        />
        <div className="md:w-1/2 w-[95%] pt-8">
          <h1 className="text-cyan-400 ml-4 mb-4 text-3xl text-center md:text-start">
            Kvalitetno | Sigurno | Povoljno
          </h1>
          <p className="text-xl  text-gray-200 text-justify leading-2 py-2 px-4">
            Od osnivanja do danas izgradili smo preko 300 000m2 poslovnog i
            stambenog prostora na teritoriji Beograda i Srbije, a kao
            investitori preko 40 000m2 poslovnog i stambenog prostora na
            teritoriji Beograda; neke od lokacija su: Objekti u Ul. Todora
            Dukina, Ul. Cankarevoj, Ul. Garibaldijevoj, Ul. Franca Rozmana, Ul.
            Vojvode Vlahović…Trenutnim aktivnostima obuhvaćeno je oko 65 000m2
            poslovnog i stambenog prostora u izgradnji i delom u pripremi.
          </p>
          <p className="text-xl  text-cyan-400 text-justify leading-2 py-2 px-4">
            Trenutno smo okrenuti izgradnji objekata u Naselju Braće Jerković,
            Ul. Vojvode Vlahović, koja je jedna od urbanih lokacija u zoni grada
            koja je u razvitku kako za život, tako i za poslovanje.
          </p>
          <p className="text-xl  text-gray-200 text-justify leading-2 py-2 px-4">
            Agenti u sektoru za marketing i prodaju nekretnina pružiće vam sve
            potrebne informacije, oni vrše direktnu prodaju, bez posrednika, a
            obučeni su tako da vam na najbolji način približe prostor koji
            prodajemo.
          </p>
        </div>
        <div className="md:w-[30%] w-full flex justify-center">
          <div className="w-80 border border-aliceblue py-4 px-0 flex flex-col items-center text-gray-50 text-xl">
            <p>Podaci o firmi:</p>
            <p className="text-cyan-400">BAJROVIĆ GROUP D.O.O.</p>
            <p>Generala Zivkovica 23,</p>
            <p>36300 Novi Pazar</p>
            <p>Matični br.: 21876097</p>
            <p>Poreski br.: 113488034</p>
            <p>
              <a
                href="https://pretraga2.apr.gov.rs/EnterpriseWebSearchWeb/Details/Details?beid=13126369&rnd=F952AFFDD9C71E86C5BE50C938FBEC8C03FDE738"
                className="text-cyan-400 no-underline">
                Link ka APRu
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 text-center relative z-10 bg-cyan-50">
        <h1 className=" text-3xl font-thin">
          Do danas, <span className="text-cyan-600"> preko 4300</span> ljudi već
          živi u domovima koje smo im mi napravili.
        </h1>
      </div>
    </Layout>
  );
};

export default AboutPage;
