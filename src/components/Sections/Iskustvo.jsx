import React from "react";
import photo from "../../assets/logoTest.png";

const Iskustvo = () => {
  return (
    <div className="w-full py-8 bg-teal-900 flex flex-col items-center">
      <img src={photo} alt="slika" className="max-h-20 scale-150" />
      <p className="text-xl text-white font-body w-4/5 text-center">
        <span className="text-teal-600">39</span> godina iskustva, sa izgrađenih
        preko
        <span className="text-teal-600"> 400 000 m2</span> stambenog prostora.
      </p>
    </div>
  );
};

export default Iskustvo;
