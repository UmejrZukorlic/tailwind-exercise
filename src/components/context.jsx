import React, { createContext, useState } from "react";

const StanContext = createContext();
export { StanContext };

const Context = (props) => {
  const [ulaz, setUlaz] = useState();
  return (
    <StanContext.Provider value={{ ulaz, setUlaz }}>
      {props.children}
    </StanContext.Provider>
  );
};

export default Context;
