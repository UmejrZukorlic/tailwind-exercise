import React, { useState, useEffect } from "react";
import photo from "../assets/logoTest.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { IoArrowUp } from "react-icons/io5";
import { Drawer, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Layout = (props) => {
  const [arrow, setArrow] = useState(false);
  const [arrow2, setArrow2] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div>
      <div className="fixed z-30 bottom-10 right-10">
        <a href="#nav">
          <IoArrowUp className="text-5xl p-2 bg-black/30 text-cyan-400 transition-all hover:bg-black/50 hover:text-white" />
        </a>
      </div>
      {screenSize.width > 860 ? (
        <nav
          className=" w-full flex justify-between items-center px-10 py-1 bg-cyan-900 relative z-10"
          id="nav">
          <img src={photo} alt="slika" className="max-h-24 mx-0" />
          <ul className="w-2/3 list-none  flex justify-center items-center  text-white text-lg font-mono">
            <Link to="/">
              <li className="cursor-pointer px-10 py-1 hover:bg-cyan-800 transition-all">
                POCETNA
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer border-s-2 border-e-2 px-10 py-1 hover:bg-cyan-800 transition-all">
                O NAMA
              </li>
            </Link>
            <li
              className="cursor-pointer px-10 py-1 hover:bg-cyan-800 transition-all"
              onClick={() => {
                setArrow(!arrow);
                setArrow2(false);
              }}>
              <Link to="/stanovi">
                <div className="flex items-center active:bg-cyan-90  transition-all">
                  <p>STANOVI U PONUDI</p>
                  {!arrow ? (
                    <MdKeyboardArrowDown className="text-xl" />
                  ) : (
                    <MdKeyboardArrowUp className="text-xl" />
                  )}
                </div>
              </Link>

              {arrow && (
                <div className="bg-cyan-900 absolute mt-5 p-2 z-10">
                  <ul>
                    <li> </li>
                    <li className="cursor-pointer py-1 px-3 hover:bg-cyan-800 transition-all">
                      Garsonjere i Jednosobni Stanovi
                    </li>
                    <li className="cursor-pointer py-1 px-3 hover:bg-cyan-800 transition-all">
                      Jednosobni Stanovi
                    </li>
                    <li className="cursor-pointer py-1 px-3 hover:bg-cyan-800 transition-all">
                      Dvosobni Stanovi
                    </li>
                    <li className="cursor-pointer py-1 px-3 hover:bg-cyan-800 transition-all">
                      Dvoiposobni Stanovi
                    </li>
                    <li className="cursor-pointer py-1 px-3 hover:bg-cyan-800 transition-all">
                      Trosobni Stanovi
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="cursor-pointer px-10 py-1 border-s-2 border-e-2 hover:bg-cyan-800 transition-all"
              onClick={() => {
                setArrow2(!arrow2);
                setArrow(false);
              }}>
              <Link to="/ulazi">
                <div className=" flex items-center active:bg-cyan-800 transition-all">
                  <p>ULAZI</p>
                  {!arrow2 ? (
                    <MdKeyboardArrowDown className="text-xl" />
                  ) : (
                    <MdKeyboardArrowUp className="text-xl" />
                  )}
                </div>
              </Link>
              {arrow2 && (
                <div className="bg-cyan-900 absolute mt-5 p-2 z-10">
                  <ul>
                    <li className="cursor-pointer w-40 py-1 px-3 hover:bg-cyan-800 transition-all">
                      ULAZ A{" "}
                    </li>
                    <li className="cursor-pointer w-40 py-1 px-3 hover:bg-cyan-800 transition-all">
                      ULAZ B{" "}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <Link to="/contact">
              <li className="cursor-pointer px-10 py-1 hover:bg-cyan-800 transition-all">
                KONTAKT
              </li>
            </Link>
          </ul>
        </nav>
      ) : (
        <nav
          className=" w-full flex justify-between items-center px-10 py-1 bg-cyan-900 fixed top-0 z-30"
          id="nav">
          <img src={photo} alt="slika" className="max-h-24 mx-0" />
          <div
            className="space-y-2 bg-cyan-600/40 p-4 rounded transition-all hover:bg-cyan-200/50"
            onClick={openDrawerRight}>
            <span className="block w-8 h-0.5 bg-cyan-400"></span>
            <span className="block w-8 h-0.5 bg-cyan-400"></span>
            <span className="block w-5 h-0.5 bg-cyan-400"></span>
          </div>
          <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4 bg-cyan-900 text-white">
            <div className="h-4/5 mb-6 flex flex-col items-end z-50">
              <IconButton
                variant="text"
                color="cyan"
                onClick={closeDrawerRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-12 w-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
              <ul className="h-4/5 list-none flex flex-col items-end justify-evenly mt-8 text-xl">
                <Link to="/">
                  <li className="cursor-pointer hover:text-cyan-600 transition-all">
                    POČENTA
                  </li>
                </Link>
                <Link to="/about">
                  <li className="cursor-pointer hover:text-cyan-600 transition-all">
                    O NAMA
                  </li>
                </Link>
                <Link to="/stanovi">
                  <li className="cursor-pointer hover:text-cyan-600 transition-all">
                    STANOVI U PONUDI
                  </li>
                </Link>
                <Link to="/ulazi">
                  <li className="cursor-pointer hover:text-cyan-600 transition-all">
                    ULAZI
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="cursor-pointer hover:text-cyan-600 transition-all">
                    KOTNAKT
                  </li>
                </Link>
              </ul>
              <img
                src={photo}
                alt="logo"
                className="bg-cyan-900 absolute bottom-0 right-0"
              />
            </div>
          </Drawer>
        </nav>
      )}
      {props.children}
      <footer className="sticky bottom-0 left-0 w-full z-0 bg-cyan-900 pt-16">
        <div className="w-full flex md:flex-row justify-evenly text-white pb-16 flex-col px-10">
          <div className="md:w-1/4 w-full">
            <div>
              <h3 className="font-thin text-xl">Navigacija sajta</h3>
            </div>
            <ul className="pt-4 list-none w-full">
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Naslovna</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>O nama</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Stanovi u ponudi</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulazi</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Naše zgrade</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Kontakt</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 w-full">
            <div>
              <h3 className="font-thin text-xl">Strukture stanova</h3>
            </div>

            <ul className="pt-4 list-none">
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Garsonjere i jednosobni</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Jednosobni</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Dvosobni</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Dvoiposobni</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Trosobni</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Četvorosobni</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 w-full">
            <div>
              <h3 className="font-thin text-xl">Ulazi</h3>
            </div>

            <ul className="pt-4 list-none">
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulaz A</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
                <a
                  className="cursor-pointer flex items-center gap-4 text-white no-underline text-lg hover:text-cyan-600"
                  href="/">
                  <IoIosArrowDropright />
                  <p>Ulaz B</p>
                </a>
              </li>
              <li className="cursor-pointer pb-2 w-full border-b border-solid border-gray-400 hover:border-cyan-600 transition-all">
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
