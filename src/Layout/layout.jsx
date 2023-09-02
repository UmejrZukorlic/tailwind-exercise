import React, { useState } from "react";
import photo from "../assets/logoTest.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Layout = (props) => {
  const [arrow, setArrow] = useState(false);
  const [arrow2, setArrow2] = useState(false);

  console.log(arrow);
  return (
    <div>
      <nav className=" w-full flex justify-between items-center px-10 py-1 bg-cyan-900">
        <img src={photo} alt="slika" className="max-h-24 mx-0" />
        <ul className="w-2/3 list-none  flex justify-center items-center  text-white text-lg font-mono">
          <li className="px-10 py-1 hover:bg-cyan-800 transition-all">
            POCETNA
          </li>
          <li className="border-s-2 border-e-2 px-10 py-1 hover:bg-cyan-800 transition-all">
            O NAMA
          </li>
          <li
            className="px-10 py-1 hover:bg-cyan-800 transition-all"
            onClick={() => {
              setArrow(!arrow);
              setArrow2(false);
            }}>
            <div className="flex items-center active:bg-cyan-90  transition-all">
              <p>STANOVI U PONUDI</p>
              {!arrow ? (
                <MdKeyboardArrowDown className="text-xl" />
              ) : (
                <MdKeyboardArrowUp className="text-xl" />
              )}
            </div>

            {arrow && (
              <div className="bg-cyan-900 absolute mt-5 p-2 z-10">
                <ul>
                  <li> </li>
                  <li className="py-1 px-3 hover:bg-cyan-800 transition-all">
                    Garsonjere i Jednosobni Stanovi
                  </li>
                  <li className="py-1 px-3 hover:bg-cyan-800 transition-all">
                    Jednosobni Stanovi
                  </li>
                  <li className="py-1 px-3 hover:bg-cyan-800 transition-all">
                    Dvosobni Stanovi
                  </li>
                  <li className="py-1 px-3 hover:bg-cyan-800 transition-all">
                    Dvoiposobni Stanovi
                  </li>
                  <li className="py-1 px-3 hover:bg-cyan-800 transition-all">
                    Trosobni Stanovi
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li
            className="px-10 py-1 border-s-2 border-e-2 hover:bg-cyan-800 transition-all"
            onClick={() => {
              setArrow2(!arrow2);
              setArrow(false);
            }}>
            <div className=" flex items-center active:bg-cyan-800 transition-all">
              <p>ULAZI</p>
              {!arrow2 ? (
                <MdKeyboardArrowDown className="text-xl" />
              ) : (
                <MdKeyboardArrowUp className="text-xl" />
              )}
            </div>
            {arrow2 && (
              <div className="bg-cyan-900 absolute mt-5 p-2 z-10">
                <ul>
                  <li className="w-40 py-1 px-3 hover:bg-cyan-800 transition-all">
                    ULAZ A{" "}
                  </li>
                  <li className="w-40 py-1 px-3 hover:bg-cyan-800 transition-all">
                    ULAZ B{" "}
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="px-10 py-1 hover:bg-cyan-800 transition-all">
            KONTAKT
          </li>
        </ul>
      </nav>
      {props.children}
    </div>
  );
};

export default Layout;
