import React, { useState } from "react";
import photo from "../assets/logoTest.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Layout = () => {
  const [arrow, setArrow] = useState(false);
  console.log(arrow);
  return (
    <div>
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 bg-green-800">
        <img src={photo} alt="slika" className="max-h-24 " />
        <ul className="w-2/3 list-none  flex justify-evenly items-center  text-white font-mono">
          <li className="w-22">POCETNA</li>
          <li className="w-22">O NAMA</li>
          <li className="w-22">
            <Menu
              placement="bottom-start"
              onClick={() => {
                console.log(arrow);
                setArrow(!arrow);
              }}>
              <MenuHandler
                className="bg-transparent shadow-none flex items-center hover:shadow-none active:opacity-100 focus:opacity-100"
                onChange={() => {
                  console.log(arrow);
                  setArrow(!arrow);
                }}>
                <Button className="bg-transparent shadow-none flex items-center">
                  <p className="text-base font-medium">Stanovi U Ponudi</p>
                  {!arrow ? (
                    <MdKeyboardArrowDown className="text-xl" />
                  ) : (
                    <MdKeyboardArrowUp className="text-xl" />
                  )}
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>Garsonjere i Jednosobni Stanovi</MenuItem>
                <MenuItem>Jednosobni Stanovi</MenuItem>
                <MenuItem>Dvosobni Stanovi</MenuItem>
                <MenuItem>Dvoiposobni Stanovi</MenuItem>
                <MenuItem>Trosobni Stanovi</MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li className="w-22">
            <Menu placement="bottom-start">
              <MenuHandler className=" w-full bg-transparent shadow-none  hover:shadow-none active:opacity-100 focus:opacity-100">
                <Button className=" w-full bg-transparent shadow-none ">
                  <p className="w-full font-sans text-base font-medium ">
                    ULAZI
                  </p>
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>ULAZ A</MenuItem>
                <MenuItem>ULAZ B</MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li className="w-22">KONTAKT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
