import { motion } from "framer-motion";
import Image from "next/image";

interface SkillBoxProps {
  skill: string;
  changeSkill: (skill: string) => void;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill, changeSkill }) => {
  const setSkill = () => {
    changeSkill(skill);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onMouseEnter={setSkill}
      className="md:w-24 w-20 md:h-24 h-20 m-4 p-4 hover:cursor-pointer rounded-3xl border-2 flex items-center justify-center border-[#ffd8d3] border-opacity-60 shadow-boxglow backdrop-blur-md"
    >
      <div
        className="before-glow"
        style={{
          backgroundImage: `url(./skills/${skill}.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <Image
            src={`/skills/${skill}.png`}
            alt=""
            width={100}
            height={100}
            className="max-h-14 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBox;
