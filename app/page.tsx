import React from "react";
import "./fonts.css";
import "./globals.css";
import Header from "./ui/header";
import Frame from "./ui/frame";
import Portrait from "./ui/portrait";
import InfoBox from "./ui/infoBox";
import Profile from "./ui/profile";
import Skills from "./ui/skills";
import Head from "next/head";
import ContactForm from "./ui/contactForm";

export default function Page() {
  return (
    <>
      <Header />
      {/* <div className="fixed bottom-8 right-8">
        <img src="./icons/downarrow.svg" alt="" className="w-8 h-8" />
      </div> */}
      <div className="md:h-[250vh] flex md:flex-row flex-col w-full">
        <div className="block md:hidden relative h-80">
          <div className="flex justify-center mt-8">
            <Frame>
              <Portrait></Portrait>
            </Frame>
          </div>
        </div>
        <div className="flex w-full overflow-hidden md:overflow-visible md:w-[50%]">
          <div className=" flex flex-col items-center justify-start">
            <div className="h-[18vh]"></div>
            <InfoBox></InfoBox>
            <div className="h-[50vh] md:block hidden w-full"></div>
            <div id="about-me"></div>
          </div>
        </div>
        <div className="md:block hidden w-full h-[180vh]">
          <div className="sticky flex justify-end top-40">
            <div className="relative">
              <Profile>
                <Portrait></Portrait>
              </Profile>
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
      <div
        id="contact"
        className="w-full overflow-hidden md:overflow-visible h-[100vh]"
      >
        <div className="w-full p-8 h-full flex flex-col items-center justify-center text-center font-comfortaa font-bold text-[#ffd8d3] text-xl">
          <div className="mb-20">
            The contact formular will go just right here. While it's being
            developed take a look at my other pages:
          </div>
          <ContactForm />
          <div className="flex md:flex-row flex-col">
            <a
              href="https://wavy.hobden.one"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr my-8 mx-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Wavy (Work in Progress)</p>
            </a>
            <a
              href="https://linkedin.com/in/alexander-hobden-982a29204"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr my-8 mx-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Linked In</p>
            </a>
            <a
              href="https://github.com/alexhobden"
              className="text-[#ffffff] hover:text-blue-200 hover:cursor-pointer text-shadow-textr my-8 mx-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
