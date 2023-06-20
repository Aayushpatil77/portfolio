"use client";
import { MenuButtonProps } from "@/types";
import { motion } from "framer-motion";

const MenuButton = ({ mobileNav, toggleMobileNav }: MenuButtonProps) => {
  return (
    <motion.button
      className="z-20 cursor-pointer flex-col gap-1.5 bg-sky-500 p-3 rounded-full flex items-center justify-center"
      initial="hide"
      animate={mobileNav ? "show" : "hide"}
      onClick={() => toggleMobileNav()}
    >
      <motion.svg
        className="w-6 h-auto"
        viewBox="0 0 24 24"
        fill="#ffffff"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: 45,
              y: 6,
            },
          }}
        />
        <motion.line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            hide: {
              opacity: 1,
            },
            show: {
              opacity: 0,
            },
          }}
        />
        <motion.line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            hide: {
              rotate: 0,
            },
            show: {
              rotate: -45,
              y: -6,
            },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

export default MenuButton;
