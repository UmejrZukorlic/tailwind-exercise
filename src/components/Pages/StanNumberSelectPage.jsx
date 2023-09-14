import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { StanContext } from "../context";
import stanoviData from "../../assets/stanoviData.json";
import Iskustvo from "../Sections/Iskustvo";
import Benefits from "../Sections/Benefits";
import { Link } from "react-router-dom";

const StanNumberSelectPage = () => {
  const { ulaz, stanType, setFullStan } = useContext(StanContext);
  const [data, setData] = useState([]);
  const [lamela, setLamela] = useState(null);
  const [type, setType] = useState();
  const [stanArray, setStanArray] = useState([]);
  const [dep, setDep] = useState(false);
  useEffect(() => {
    if (ulaz === "A") {
      setLamela("lamelaA");
    } else if (ulaz === "B") {
      setLamela("lamelaB");
    } else {
      setLamela(null);
    }

    if (lamela) {
      setData(stanoviData[lamela]);
    } else {
      setData(stanoviData);
    }

    setType(stanType?.toLowerCase());

    if (lamela && type) {
      setStanArray(data[type]);
    } else if (type) {
      setStanArray(data.lamelaA[type].concat(data.lamelaB[type]));
      setDep(true);
    }

    console.log(type);
    console.log(ulaz);
    console.log(lamela);
    console.log(stanArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ulaz, lamela, data, type, stanType, dep]);

  return (
    <Layout>
      <div className="relative z-10 bkg flex flex-col items-center">
        <div className="w-full flex justify-center items-center bg-teal-300 py-12">
          <h1 className="text-white text-4xl bg-t">
            {ulaz && "ULAZ " + ulaz + " - "} {stanType?.toUpperCase()}{" "}
          </h1>
        </div>
        <div className="w-[80%] py-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
          {stanArray?.map((el, i) => {
            return (
              <div
                key={i}
                className="border-2 border-solid border-teal-600 bg-white py-4 text-xl"
                onClick={() => {
                  setFullStan(el);
                }}>
                <Link to="/stan">
                  <h1 className="text-center">{el.name.toUpperCase()}</h1>
                  <p className="text-center pb-4">
                    POVRŠINA STANA:{" "}
                    <span className="font-bold">{el.površinaStana}</span> m
                    <sup>2</sup>
                  </p>
                  <img src={el.imgUrl} alt="slika" />
                  {!lamela && (
                    <p className="text-center mt-4">ULAZ {el.ulaz}</p>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
        <Iskustvo />
        <Benefits />
      </div>
    </Layout>
  );
};

export default StanNumberSelectPage;
