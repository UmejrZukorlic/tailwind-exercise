import React from "react";
import Layout from "../Layout/layout";
import Lamela from "../Sections/Lamela";
import Iskustvo from "../Sections/Iskustvo";
import Benefits from "../Sections/Benefits";

const EntersPage = () => {
  return (
    <Layout>
      <div className="relative z-10 mt-24 md:mt-0">
        <Lamela />
        <Iskustvo />
        <Benefits />
      </div>
    </Layout>
  );
};

export default EntersPage;
