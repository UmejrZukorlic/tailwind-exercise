import React, { useContext, useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { StanContext } from "../context";
import stanoviData from "../../assets/stanoviData.json";

const StanNumberSelectPage = () => {
  const { ulaz } = useContext(StanContext);
  const [data, setData] = useState([]);
  const [lamela, setLamela] = useState(null);

  useEffect(() => {
    if (ulaz === "A") {
      setLamela("lamelaA");
    } else if (ulaz === "B") {
      setLamela("lamelaB");
    } else {
      setLamela(null); // Postavite lamelu na null ako nije A ni B
    }
  }, [ulaz]); // Postavite ulaz kao zavisnost kako bi se useEffect ponovo izvršavao kada se ulaz promeni

  useEffect(() => {
    // Postavite podatke kada se lamela promeni
    if (lamela) {
      setData(stanoviData[lamela]);
      console.log(data);
      console.log(lamela);
    }
  }, [lamela, data]);

  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export default StanNumberSelectPage;
