import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "/logo s.png";
import Github from "/github-alt.svg";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(true);

  const Links = [
    { name: "HOME", link: "/home" },
    { name: "ABOUT", link: "/about" },
    { name: "SKILL", link: "/skill" },
    { name: "PROJECT", link: "/portofolio" },
    { name: "CONTACT", link: "/contact" },
    {
      name: (
        <a
          href="https://github.com/sihabuddinrifqi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            className="w-6 h-6 mx-auto lg:w-8 lg:h-8"
            alt="GitHub"
          />
        </a>
      ),
    },
  ];
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      if (isTop !== scrolling) {
        setScrolling(isTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolling ? "bg-sky-500" : "bg-pink-500"
      }`}
    >
      <div
        className={`md:flex items-center justify-between  py-5 md:px-5 px-7 transition-all duration-400 ease-in ${
          open ? "h-26" : "h-16"
        }`}
      >
        <div className="flex items-center">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-Poppins text-gray-800">
            <a
              href=""
              className="text-white font-bold text-xl flex items-center gap-3 md:text-lg"
            >
              <img src={Logo} alt="Logo" className="text-white w-10 h-10" />
              UDDIN-S
            </a>
          </div>
          <button
            onClick={handleToggle}
            className="text-3xl text-white font-Poppins py-3 px-6 md:hidden transition-all duration-600 ease-in-out ml-4 fixed right-0 "
          >
            {open ? (
              <i className="uil uil-times"></i>
            ) : (
              <i className="uil uil-align-right"></i>
            )}
          </button>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-3 absolute md:static ${
            open ? "bg-sky-500 " : "bg-transparent"
          } opacity-95 lg:opacity-100 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "top-16" : "top-[-290px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-1 flex cursor-pointer"
            >
              {link.link ? (
                <ScrollLink
                  to={link.link.substring(1)}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className={`text-white hover:text-indigo-200 hover:border-b-4 border-white rounded p-2 duration-200`}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <a
                  href={link.link}
                  className={`text-white hover:text-indigo-200 hover:border-b-4 border-white rounded p-2 duration-200`}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
