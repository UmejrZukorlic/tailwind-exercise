import React from "react";
import photo from "../assets/logoTest.png";

const Layout = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-center items-center bg-black">
        <ul className="w-11/12 list-none flex justify-evenly items-center  text-white">
          <li>
            <img src={photo} alt="slika" className="max-h-24" />
          </li>
          <li>Pocetna</li>
          <li>O Nama</li>
          <li>Stanovi u ponudi</li>
          <li>Ulazi</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
