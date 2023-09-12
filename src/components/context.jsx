import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const StanContext = createContext();
export { StanContext };

const Context = (props) => {
  const [ulaz, setUlaz] = useState();
  const [stanType, setStanType] = useState();
  const [fullStan, setFullStan] = useState();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <StanContext.Provider
      value={{ ulaz, setUlaz, stanType, setStanType, fullStan, setFullStan }}>
      {props.children}
    </StanContext.Provider>
  );
};

export default Context;
