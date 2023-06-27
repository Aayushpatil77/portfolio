"use client";
import { motion, AnimatePresence, MotionConfig, useCycle } from "framer-motion";
import MenuButton from "./MenuButton";

import twitter from "@/public/assets/icons/twitter.svg";
import gmail from "@/public/assets/icons/gmail.svg";
import linkedin from "@/public/assets/icons/linkedin.svg";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [mobileNav]);

  return (
    <div className="max-sm:mx-6">
      {/* Desktop Navbar */}

      <nav className="max-sm:hidden flex justify-between items-center my-5">
        <div className="flex items-end">
          <h1 className="text-3xl font-bold"><Link href="/">Ayush</Link></h1>
          <span className="mb-3 ml-1 w-2 h-2 bg-white"></span>
        </div>
        <ul className="flex gap-4 font-bold">
          <li>
            <p className="text-base cursor-pointer">
              <Link href="/templates">Templates</Link>
            </p>
          </li>
          <li>
            <p className="text-base cursor-pointer">
              <a href="/#services">Services</a>
            </p>
          </li>
          <li>
            <p className="text-base cursor-pointer">Blog</p>
          </li>
          <li>
            <p className="text-base cursor-pointer">About</p>
          </li>
        </ul>
        <Link
          target="_blank"
          href="https://bit.ly/3qWbvP4"
          className="focus:border-white focus:border-dashed transition-all duration-200 ease-in-out focus:outline-none border-dashed border border-white text-base px-4 py-1 rounded-md hover:bg-sky-500 hover:border-sky-500 font-medium"
        >
          {"Let's Talk"}
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden flex justify-between items-center my-5">
        <div className="flex items-end">
          <h1 className="text-3xl font-bold">Ayush</h1>
          <span className="mb-3 ml-1 w-2 h-2 bg-white"></span>
        </div>
        <MenuButton mobileNav={mobileNav} toggleMobileNav={toggleMobileNav} />
        {/* Mobile Navbar Items */}
        <AnimatePresence>
          {mobileNav ? (
            <MotionConfig>
              <motion.div
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.0099,
                      when: "afterChildren",
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.0099,
                      when: "beforeChildren",
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="absolute left-0 p-10 top-0 w-2/3 z-10 overflow-hidden h-screen bg-sky-500"
              >
                <motion.ul
                  variants={{
                    hide: {
                      x: "-45%",
                      opacity: 0,
                      transition: {
                        type: "spring",
                        bounce: 0.0099,
                      },
                    },
                    show: {
                      x: "0%",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.099,
                      },
                    },
                  }}
                  className="flex gap-4 font-bold flex-col"
                >
                  <li>
                    <p className="text-2xl cursor-pointer ">Templates</p>
                  </li>
                  <li>
                    <p
                      className="text-2xl cursor-pointer"
                      onClick={(e) => {
                        toggleMobileNav();
                      }}
                    >
                      <a href="/#services">Services</a>
                    </p>
                  </li>
                  <li>
                    <p className="text-2xl cursor-pointer ">Blog</p>
                  </li>
                  <li>
                    <p className="text-2xl cursor-pointer ">About</p>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white my-5"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex items-center gap-x-4"
                >
                  <li>
                    <Image src={twitter} width={36} height={36} alt="twitter" />
                  </li>
                  <li>
                    <Image src={gmail} width={38} height={38} alt="gmail" />
                  </li>
                  <li>
                    <Image
                      src={linkedin}
                      width={32}
                      height={32}
                      alt="linkedin"
                    />
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          ) : null}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
