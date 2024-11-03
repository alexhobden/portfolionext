import Link from "next/link";
import HeaderButton from "./headerButton";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-20 items-center mx-auto w-full md:p-8 p-2 md:h-20 h-12 backdrop-blur-md  font-comfortaa font-bold flex">
      <Link
        href="/"
        className="text-[#ffd8d3] font-inria text-shadow-text inline-block p-2 px-4 md:text-2xl text-xl"
      >
        Hi. I AM ALEX HOBDEN
      </Link>
      <div className="flex-auto"></div>
      <div className="md:flex hidden md:block">
        <HeaderButton title="About Me" reference="about-me"></HeaderButton>
        <HeaderButton title="My Skills" reference="skills"></HeaderButton>
        <HeaderButton title="Contact Me" reference="contact"></HeaderButton>
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
  );
};

export default Header;
