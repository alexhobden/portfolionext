"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProfileProps {
  children?: React.ReactNode;
}

const Profile: React.FC<ProfileProps> = ({ children }) => {
  const [showDiv, setShowDiv] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeightMin = window.innerHeight * 0.78;
      const triggerHeightMax = window.innerHeight * 1.7;
      if (
        scrollPosition >= triggerHeightMin &&
        scrollPosition <= triggerHeightMax
      ) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showDiv) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [showDiv]);

  return (
    <>
      <motion.div
        animate={showDiv ? { width: "55rem", x: "-26%" } : { width: "22rem" }}
        initial={{ width: "22rem", x: "0%" }}
        transition={{
          duration: 0.7, // Animation duration
          ease: "easeInOut", // Easing function
        }}
        className="text-white absolute flex justify-end rounded-[5rem] shadow-innerboxglow p-4 border-white border-2 md:top-4 right-[15vw]"
      >
        {showText && (
          <div className="w-full p-12 pr-16 font-inria text-xl">
            <p>
              Hello, my Name is Alex Hobden and I'm a web designer and developer
              from Germany.
            </p>
            <br />
            <p>
              I love both coding, but in addition to the code and logic, I like
              to implement my own designs with Figma and libraries such as
              Tailwind and Framer Motion.
            </p>
            <br />
            <p>I would love working with you!</p>
          </div>
          //   </motion.div>
        )}
        {children}
      </motion.div>
    </>
  );
};
export default Profile;
