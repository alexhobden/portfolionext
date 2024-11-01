import HeaderButton from "./headerButton";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-20 items-center mx-auto w-full md:p-8 p-2 md:h-20 h-12 backdrop-blur-md  font-comfortaa font-bold flex">
      <div className="text-[#ffd8d3] font-inria text-shadow-text inline-block p-2 px-4 md:text-2xl text-xl">
        Hi. I AM ALEX HOBDEN
      </div>
      <div className="flex-auto"></div>
      <div className="md:flex hidden md:block">
        <HeaderButton title="About Me" reference="about-me"></HeaderButton>
        <HeaderButton title="My Skills" reference="skills"></HeaderButton>
        <HeaderButton title="Contact Me" reference="contact"></HeaderButton>
      </div>
    </div>
  );
};

export default Header;
