"use client";
import React, { useState, useRef, useEffect } from "react";
import bfcLogo from "@/assets/img/bfcLogo.png";

// import Logo from "./../../assets/365_Logo.svg";
// import hamburger from "./../../assets/hamburger.svg";
// import close from "./../../assets/X.svg";


const Header = () => {
  type NavBarItem = {
    title: string;
    url: string;
    submenu?: { title: string; url: string }[];
  };

  const navBar: NavBarItem[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services", submenu: [
      { title: "Carpet Cleaning", url: "/services/carpet-cleaning" },
      { title: "Upholstery Cleaning", url: "/services/upholstery-cleaning" },
    ] },
    { title: "Gallery", url: "/gallery" },
    { title: "Contact", url: "/contact" },
  ];

  const [nav, setNav] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setNav(!nav);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const handleMouseEnter = (idx: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(idx);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay before closing submenu
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:block bg-opacity-45 backdrop-blur-lg w-full  bg-primary duration-300">
        {/* <TopNav /> */}
        <nav className="hidden md:flex justify-between items-center py-1 container mx-auto text-white">
          <div>
            <a href="/" className="font-bold text-3xl cursor-pointer">
              <img src={bfcLogo.src} alt="Bright Fibre Cleaning Logo" width={100} height={100} className="mr-2" />
            </a>
        
          </div>
          <div className="flex items-center">
            <ul className="flex lg:ms-">
              {navBar.map((item, idx) => (
                <li
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.submenu ? "/" : item.url}
                    className="mx-3 hover:text-secondary flex items-center py-4 duration-300"
                    onClick={(e) => item.submenu && e.preventDefault()}
                  >
                    {item.title}
                    {item.submenu && (
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform ${
                          hoveredItem === idx ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                  {item.submenu && (
                    <div
                      className={`absolute left-0 top-full w-56 bg-white shadow-lg rounded-md py-2 transform transition-all duration-200 ${
                        hoveredItem === idx
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => handleMouseEnter(idx)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.submenu.map((subItem, subIdx) => (
                        <a
                          key={subIdx}
                          href={subItem.url}
                          className="block px-4 py-3 text-black hover:bg-gray-100 transition-colors duration-200"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/application"
            className="capitalize text-primary font-semibold bg-secondary  py-3 px-8 rounded-full hover:bg-secondary/90 duration-300"
          >
            Get free quote
          </a>
        </nav>
      </div>

     
    </div>
  );
};

export default Header;
