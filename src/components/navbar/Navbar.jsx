import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo2 } from "../../constants/images";
import Button from "./Button";
import NavLinks from "./NavLinks";
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
         <Link to="/">
          <img src={logo2} alt="logo" className="md:cursor-pointer h-14" />
         </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon  name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden  uppercase items-center gap-8 font-bold ">
          <li>
            <Link to="/" className="px-3 inline-block hover-underline-animation">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/About" className="px-3 inline-block hover-underline-animation">
             About
            </Link>
            <Link to="/Contacts" className="px-3 inline-block hover-underline-animation">
              Contact
            </Link>
          </li> 
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white text-secondColor fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-40 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="my-7 px-3 inline-block hover-underline-animation">
             Home
            </Link>
          </li>
          <li>
            <NavLinks className="hover-underline-animation px-3 inline-block hover-underline-animation" />
          </li>
          <li>
            <Link to="/About" className="my-7 px-3 inline-block hover-underline-animation">
            About
            </Link>
          </li>
          <li>
            <Link to="/Contacts" className="my-7 px-3 inline-block hover-underline-animation">
            Contact
            </Link>
          </li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;