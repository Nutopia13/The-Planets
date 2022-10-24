import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import hamb from "../assets/icon-hamburger.svg";
import Data from "../../data.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "./Icons/RightArrow";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white border-b-2 border-slate-700  ">
      <nav className=" hidden mx-auto nav_desk md:flex items-center md:max-w-[665px] py-8 justify-between lg:max-w-[1250px]">
        <Link to='/home'><h1 className="font-antonio text-3xl uppercase">The Planets</h1></Link>
        <ul className="font-spartan nav_anim  md:space-x-4 lg:space-x-8 w-[664px]  flex items-center justify-center tracking-wider uppercase text-xs font-bold">
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link mercury  relative
            "
            >
              <Link to="/mercury">Mercury</Link>
            </a>
          </li>
          <li className="hover:opacity-100  opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative venus
            "
            >
              <Link to="/venus">Venus</Link>
            </a>
          </li>
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative earth
            "
            >
              <Link to="/earth">Earth</Link>
            </a>
          </li>
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative mars
            "
            >
              <Link to="/mars">Mars</Link>
            </a>
          </li>
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative jupiter
            "
            >
              <Link to="/jupiter">Jupiter</Link>
            </a>
          </li>
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative saturn
            "
            >
              <Link to="/saturn">Saturn</Link>
            </a>
          </li>
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative uranus
            "
            >
              <Link to="/uranus">Uranus</Link>
            </a>
          </li>
          <li className="hover:opacity-100 opacity-70 duration-75 transition-all">
            <a
              className="nav_link relative neptune
            "
            >
              <Link to="/neptune">Neptune</Link>
            </a>
          </li>
        </ul>
      </nav>

      <nav className=" md:hidden">
        <div className="mx-auto flex justify-between items-center max-w-[327px] py-4">
          <h1 className="font-antonio uppercase text-3xl">The Planets</h1>
          {!isOpen ? (
            <img
              src={hamb}
              alt=""
              className="max-h-[24px] duration-75 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <img
              src={hamb}
              alt=""
              className="max-h-[24px] opacity-60 duration-75 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute z-50 w-full min-h-[100vh] bg-dark_bg"
            >
              <motion.ul
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1, delay: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-spartan  uppercase  mx-auto max-w-[327px]  text-base py-11 font-bold"
              >
                <li className="flex h-12 items-center  justify-between border-b-2 border-[#979797]  w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot1"></span>
                    <Link to="/mercury">Mercury</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex justify-between border-b-2 border-[#979797] h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot3"></span>
                    <Link to="/earth">Earth</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex justify-between border-b-2 border-[#979797]  h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot4"></span>
                    <Link to="/mars">Mars</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex justify-between border-b-2 border-[#979797] h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot2"></span>
                    <Link to="/venus">Venus</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex justify-between border-b-2 border-[#979797] h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot5"></span>
                    <Link to="/jupiter">Jupiter</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex border-b-2 border-[#979797] justify-between h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot6"></span>
                    <Link to="/saturn">Saturn</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex border-b-2 border-[#979797] justify-between h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot7"></span>
                    <Link to="/uranus">Uranus</Link>
                  </div>
                  <ArrowRight />
                </li>
                <li className="flex justify-between h-12 items-center w-full">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="space-x-6 flex items-center"
                  >
                    <span className="dot8"></span>
                    <Link to="/neptune">Neptune</Link>
                  </div>
                  <ArrowRight />
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
