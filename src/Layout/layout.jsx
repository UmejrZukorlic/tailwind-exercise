import React, { useState } from "react";
import photo from "../assets/logoTest.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { IoArrowUp } from "react-icons/io5";
const Layout = (props) => {
  const [arrow, setArrow] = useState(false);
  const [arrow2, setArrow2] = useState(false);

  console.log(arrow);
  return (
    <div>
      <div className="fixed z-50 bottom-10 right-10">
        <a href="#nav">
          <IoArrowUp className="text-5xl p-2 bg-black/30 text-cyan-400 transition-all hover:bg-black/50 hover:text-white" />
        </a>
      </div>
      <nav
        className=" w-full flex justify-between items-center px-10 py-1 bg-cyan-900 relative z-10"
        id="nav">
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
      <footer className="sticky bottom-0 left-0 w-full z-0 bg-cyan-900 pt-16">
        <div className="w-[80%] flex justify-evenly text-white pb-16">
          <div className="w-1/4">
            <div>
              <h3 className="font-thin text-xl">Navigacija sajta</h3>
            </div>
            <ul className="pt-4 list-none w-full">
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Naslovna</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>O nama</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Stanovi u ponudi</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulazi</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Naše zgrade</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Kontakt</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <div>
              <h3 className="font-thin text-xl">Strukture stanova</h3>
            </div>

            <ul className="pt-4 list-none">
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Garsonjere i jednosobni</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Jednosobni</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Dvosobni</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Dvoiposobni</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Trosobni</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Četvorosobni</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <div>
              <h3 className="font-thin text-xl">Ulazi</h3>
            </div>

            <ul className="pt-4 list-none">
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulaz A</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulaz B</p>
                </a>
              </li>
              <li className="pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulaz C</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-7 py-5 bg-cyan-600 flex items-center justify-between text-white gap-20">
          <div className="flex flex-col items-center">
            <img src={photo} alt="slika" className="h-16 scale-150" />
            <p>2023 BAJROVIĆ GROUP d.o.o.</p>
          </div>
          <div className="flex justify-evenly gap-8 mr-20">
            <BsInstagram className="text-3xl transition-all hover:text-cyan-900" />
            <BsFacebook className="text-3xl transition-all hover:text-cyan-900" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
