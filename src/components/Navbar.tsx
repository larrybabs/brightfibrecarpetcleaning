"use client";
import React, { useState, useRef, useEffect } from "react";
import bfcLogo from "@/assets/img/bfcLogo.png";
import Facebook from "@/assets/icon/facebook.svg";
import Instagram from "@/assets/icon/instagram.svg";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  type NavBarItem = {
    title: string;
    url: string;
    submenu?: { title: string; url: string }[];
  };

  const navBar: NavBarItem[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    {
      title: "Services",
      url: "/services",
      submenu: [
        { title: "Carpet Cleaning", url: "/carpet-cleaning" },
        { title: "Upholstery Cleaning", url: "/upholstery-cleaning" },
        { title: "Commercial Cleaning", url: "/commercial-cleaning" },
        { title: "Chair Cleaning", url: "/chair-cleaning" },
        { title: "Stain Removal", url: "/stain-removal" },
        { title: "Vehicle Interior", url: "/vehicle-cleaning" },
      ],
    },
    { title: "Gallery", url: "/gallery" },
    { title: "Contact", url: "/contact" },
  ];

  const [nav, setNav] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleNav = () => {
    setNav(!nav);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const handleMouseEnter = (idx: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredItem(idx);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setHoveredItem(null), 300);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (nav && !(event.target as Element).closest(".mobile-menu")) {
        setNav(false);
        setActiveSubmenu(null);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [nav]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [nav]);

  return (
    <>
      <header className="w-full bg-primary bg-opacity-45 backdrop-blur-lg duration-300 relative z-40">
        {/* Top bar - Hidden on mobile */}
        <div className="bg-black text-white py-2 sm:py-3 hidden sm:block">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-0">
              {/* Location */}
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>United Kingdom</span>
              </div>

              {/* Contact and Social */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <Link
                      href="tel:07835756064"
                      className="hover:underline duration-300 truncate"
                    >
                      07835756064
                    </Link>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <Link
                      href="mailto:Brightfibercarpetcleaning@gmail.com"
                      className="hover:underline duration-300 truncate"
                    >
                      Brightfibercarpetcleaning@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/Brightfibercarpetclean/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={Facebook.src}
                      alt="Facebook"
                      width={18}
                      height={18}
                      className="sm:w-5 sm:h-5"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/brightfibercarpetcleaning/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={Instagram.src}
                      alt="Instagram"
                      width={18}
                      height={18}
                      className="sm:w-5 sm:h-5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={bfcLogo.src}
                alt="Bright Fibre Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navBar.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.submenu ? "/" : item.url}
                    className="text-white hover:text-secondary flex items-center px-3 py-4 duration-300 text-sm xl:text-base"
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
                  </Link>
                  {item.submenu && (
                    <div
                      className={`absolute left-0 top-full w-56 bg-white shadow-xl rounded-lg py-2 transform transition-all duration-200 z-50 ${
                        hoveredItem === idx
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.submenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.url}
                          className="block px-4 py-3 mx-2 rounded-xl text-gray-800 hover:bg-primary hover:text-white transition-colors duration-200 text-sm"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:block text-primary font-semibold bg-secondary py-2 px-4 xl:py-3 xl:px-6 rounded-full hover:bg-secondary/90 duration-300 text-sm xl:text-base whitespace-nowrap"
            >
              Get free quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleNav}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {nav ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleNav}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-primary text-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={toggleNav}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Contact Info */}
        <div className="px-6 py-4 border-b border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <Link
              href="tel:07835756064"
              className="hover:text-secondary transition-colors"
            >
              07835756064
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <Link
              href="mailto:Brightfibercarpetcleaning@gmail.com"
              className="hover:text-secondary transition-colors break-all"
            >
              Brightfibercarpetcleaning@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="https://www.facebook.com/Brightfibercarpetclean/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={Facebook.src} alt="Facebook" width={20} height={20} />
            </Link>
            <Link
              href="https://www.instagram.com/brightfibercarpetcleaning/"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={Instagram.src} alt="Instagram" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {navBar.map((item, idx) => (
              <li key={idx}>
                <button
                  className="w-full text-left px-6 py-3 flex justify-between items-center hover:bg-white/10 transition-colors duration-200"
                  onClick={() =>
                    item.submenu
                      ? toggleSubmenu(idx)
                      : (() => {
                          window.location.href = item.url;
                          setNav(false);
                        })()
                  }
                >
                  <span className="font-medium">{item.title}</span>
                  {item.submenu && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeSubmenu === idx ? "rotate-180" : ""
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
                </button>

                {/* Submenu */}
                {item.submenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeSubmenu === idx
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white/5">
                      {item.submenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.url}
                          className="block px-12 py-3 text-sm hover:bg-white/10 transition-colors duration-200"
                          onClick={() => setNav(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile CTA Button */}
        <div className="p-6 border-t border-white/20">
          <Link
            href="/contact"
            className="block text-center bg-secondary text-primary font-semibold py-3 px-6 rounded-full hover:bg-secondary/90 transition-colors duration-300"
            onClick={() => setNav(false)}
          >
            Get free quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
