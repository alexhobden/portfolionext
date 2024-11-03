import Image from "next/image";

const Portrait: React.FC = () => {
  return (
    <Image
      src="/images/desk2.jpg"
      alt=""
      className=" rounded-[4rem] w-full md:h-auto md:w-[20rem] object-contain shadow-glow self-center md:self-start"
    />
  );
};

export default Portrait;
