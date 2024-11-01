import SkillBox from "./skillBox";

interface SkillSetProps {
  handleSkillChange: (skill: string) => void;
}

const SkillSetMobile: React.FC<SkillSetProps> = ({ handleSkillChange }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <SkillBox changeSkill={handleSkillChange} skill="react"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="angular"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="python"></SkillBox>
      </div>
      <div className="flex flex-wrap justify-center">
        <SkillBox changeSkill={handleSkillChange} skill="java"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="javascript"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="typescript"></SkillBox>
      </div>
      <div className="flex flex-wrap justify-center">
        <SkillBox
          changeSkill={handleSkillChange}
          skill="shellscript"
        ></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="threejs"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="tailwind"></SkillBox>
      </div>
      <div className="flex flex-wrap justify-center">
        <SkillBox changeSkill={handleSkillChange} skill="visjs"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="rxjs"></SkillBox>
        <SkillBox
          changeSkill={handleSkillChange}
          skill="framermotion"
        ></SkillBox>
      </div>
      <div className="flex flex-wrap justify-center">
        <SkillBox changeSkill={handleSkillChange} skill="nodejs"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="css"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="daisyUI"></SkillBox>
      </div>
      <div className="flex flex-wrap justify-center">
        <SkillBox changeSkill={handleSkillChange} skill="figma"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="neo4J"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="axios"></SkillBox>
      </div>
      <div className="flex flex-wrap justify-center">
        <SkillBox changeSkill={handleSkillChange} skill="jest"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="blender"></SkillBox>
        <SkillBox changeSkill={handleSkillChange} skill="unity"></SkillBox>
      </div>
    </>
  );
};

export default SkillSetMobile;
