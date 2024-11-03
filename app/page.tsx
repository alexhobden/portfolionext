import React from "react";
import "./fonts.css";
import "./globals.css";
import Header from "./ui/header";
import Frame from "./ui/frame";
import Portrait from "./ui/portrait";
import InfoBox from "./ui/infoBox";
import Profile from "./ui/profile";
import Skills from "./ui/skills";
import ContactForm from "./ui/contactForm";
import Footer from "./ui/footer";

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
      <div className="h-56"></div>
      <div
        id="contact"
        className="w-full overflow-hidden md:overflow-visible h-[140vh]"
      >
        <div className="w-full p-8 text-shadow-textr flex flex-col items-center justify-center gap-8 text-center font-comfortaa font-bold text-[#ffffff] text-2xl">
          <p className="text-7xl">Thanks for visiting!</p>
          <br />
          <p>Want to connect? I&apos;d love hearing from you</p>
          <p>Feel free to drop me a message below</p>
        </div>
        <div className="h-64"></div>
        <div className="font-comfortaa font-bold text-[#ffd8d3] text-xl flex flex-col items-center justify-center">
          <ContactForm />
        </div>
        <div className="flex md:flex-row flex-col"></div>
      </div>
      <Footer />
    </>
  );
}
