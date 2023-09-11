import React, { createContext, useState } from "react";

const StanContext = createContext();
export { StanContext };

const Context = (props) => {
  const [ulaz, setUlaz] = useState();
  const [stanType, setStanType] = useState();
  return (
    <StanContext.Provider value={{ ulaz, setUlaz, stanType, setStanType }}>
      {props.children}
    </StanContext.Provider>
  );
};

export default Context;
