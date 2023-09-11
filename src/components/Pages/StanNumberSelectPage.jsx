import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { StanContext } from "../context";
import stanoviData from "../../assets/stanoviData.json";
import Iskustvo from "../Sections/Iskustvo";
import Benefits from "../Sections/Benefits";

const StanNumberSelectPage = () => {
  const { ulaz, stanType } = useContext(StanContext);
  const [data, setData] = useState([]);
  const [lamela, setLamela] = useState(null);
  const [type, setType] = useState();
  const [stanArray, setStanArray] = useState([]);

  useEffect(() => {
    if (ulaz === "A") {
      setLamela("lamelaA");
    } else if (ulaz === "B") {
      setLamela("lamelaB");
    } else {
      setLamela(null);
    }
  }, [ulaz]);
  useEffect(() => {
    if (lamela) {
      setData(stanoviData[lamela]);
    } else {
      setData(stanoviData);
    }
    setType(stanType?.toLowerCase());
  }, [lamela, data, stanType]);
  useEffect(() => {
    if (lamela) {
      setStanArray(data[type]);
    } else {
      setStanArray(data);
    }
    // console.log(type);
    // console.log(ulaz);
    // console.log(lamela);
    // console.log(stanArray);
  }, [data, type, lamela, stanArray]);

  return (
    <Layout>
      <div className="relative z-10 bg-teal-50 flex flex-col items-center">
        <div className="w-full flex justify-center items-center bg-teal-300 py-12">
          <h1 className="text-white text-4xl bg-t">
            ULAZ {ulaz} - {stanType?.toUpperCase()}{" "}
          </h1>
        </div>
        <div className="w-[80%] py-8 grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
          {stanArray?.map((el) => {
            return (
              <div
                key={el.id}
                className="border-2 border-solid border-teal-600 bg-white py-4">
                <h1 className="text-center text-xl ">
                  {el.name.toUpperCase()}
                </h1>
                <p className="text-center text-xl pb-4">
                  POVRŠINA STANA:{" "}
                  <span className="font-bold">{el.površinaStana}</span> m
                  <sup>2</sup>
                </p>
                <img src={el.imgUrl} alt="slika" />
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
