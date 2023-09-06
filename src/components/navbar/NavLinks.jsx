import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import './Navbar.css'

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div className="z-50">
          <div className="px-3 text-left md:cursor-pointer group">
            <Link to={link.link}>
                <h1
                  className="py-7 flex justify-between items-center text-secondColor md:pr-0 pr-5 group"
                  onClick={() => {
                    heading !== link.name ? setHeading(link.name) : setHeading("");
                    setSubHeading("");
                  }}
                >
               
                <span className="hover-underline-animation">{link.name}</span>
                <span className="text-xl md:hidden inline">
                  <ion-icon
                    name={`${
                      heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                  ></ion-icon>
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
            </Link>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    
                  </div>
                  <div className="bg-firstColor text-white p-5 grid grid-cols-2 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <Link to={mysublinks.link} >
                            <h1 className="text-lg font-semibold">
                            {mysublinks.Head}
                            </h1>
                        </Link>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-white capitalize font-thin my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-secondColor"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <Link to={slinks.link} >
                    <div 
                        className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                        }`}
                    >
                        {slinks.sublink.map((slink) => (
                        <li className="py-3 pl-14">
                            <Link to={slink.link}>{slink.name}</Link>
                        </li>
                        ))}
                    </div>
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;