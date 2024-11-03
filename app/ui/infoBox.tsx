"use client";

import { useEffect, useState } from "react";

const InfoBox: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);
  const scrollThreshold = 150;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxTranslation = 300;
      const isBelowMd = window.innerWidth < 768;

      if (isBelowMd && scrollPosition > scrollThreshold) {
        setScrollX(
          Math.min((scrollPosition - scrollThreshold) * 0.1, maxTranslation)
        );
      } else if (!isBelowMd) {
        setScrollX(Math.min(scrollPosition * 0.5, maxTranslation));
      } else {
        setScrollX(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center  md:block h-96 md:ml-40 md:-mt-4 w-full md:w-[50rem] font-inria text-[40px] md:p-8 p-2 text-white">
      <div className="md:pl-8 md:pr-16 md:pt-6 md:text-left text-center">
        <p
          style={{
            transform: `translateX(${scrollX * 3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          I\'M A WEB
        </p>
        <div
          className="flex md:items-end md:justify-start justify-center"
          style={{
            transform: `translateX(${scrollX * -2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h2 className="sm:text-4xl xl:text-9xl">DESIGNER</h2>
          <p className="ml-3">&</p>
        </div>
        <div
          className="sm:text-4xl xl:text-9xl rounded-3xl text-shadow-textr text-[#ffd8d3]"
          style={{
            transform: `translateX(${scrollX * 2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          DEVELOPER
        </div>
        <div
          className=" w-full flex justify-end"
          style={{
            transform: `translateX(${scrollX * -4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <p>BASED IN STUTTGART</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
