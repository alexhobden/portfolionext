"use client";

import { useState } from "react";
import SkillSetMobile from "./skillsetMobile";
import SkillSet from "./skillset";

const Skills: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState<string>();

  const handleSkillChange = (skill: string) => {
    setCurrentSkill(skill);
  };
  return (
    <div className="w-full  md:h-[100vh]">
      <div
        id="skills"
        className="h-[45vh] flex flex-col items-center justify-center"
      >
        <div className="text-xl rounded-3xl font-comfortaa font-bold  mb-16 text-[#ffd8d3]">
          I work with
        </div>
        <div className="flex space-x-1 text-5xl rounded-3xl font-comfortaa font-extrabold text-shadow-textr text-[#ffd8d3]">
          {currentSkill
            ? (currentSkill.charAt(0).toUpperCase() + currentSkill.slice(1))
                .split("")
                .map((letter, index) => (
                  <span
                    key={`${letter}-${index}`}
                    className={`inline-block opacity-0 animate-fall`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {letter}
                  </span>
                ))
            : ""}
        </div>
      </div>
      <div></div>
      <div className="block md:hidden">
        <SkillSetMobile handleSkillChange={handleSkillChange}></SkillSetMobile>
      </div>
      <div className="md:block hidden">
        <SkillSet handleSkillChange={handleSkillChange}></SkillSet>
      </div>
    </div>
  );
};

export default Skills;
