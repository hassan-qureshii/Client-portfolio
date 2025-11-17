import { useEffect, useState } from "react";
import photoshop from "../assets/photoshop.png";
import illustrator from "../assets/illustrator.png";
import canva from "../assets/canva.png";
import figma from "../assets/figma.png";

interface Skill {
  name: string;
  img: string;
  level: number;
}

const skillsData: Skill[] = [
  { name: "Adobe Illustrator", img: illustrator, level: 90 },
  { name: "Adobe Photoshop", img: photoshop, level: 88 },
  { name: "Canva", img: canva, level: 85 },
  { name: "Figma", img: figma, level: 80 },
];

const SkillCard: React.FC<Skill> = ({ img, name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="shadow-lg rounded-xl p-5 w-full max-w-lg flex flex-col gap-3 border border-gray-100">
      {/* Top section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={img} alt={name} className="w-8 h-8" />
          <span className="font-semibold text-[#670D7F] text-xl">{name}</span>
        </div>
        <span className="text-[#670D7F] text-xl font-semibold">{level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white h-3 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] h-full rounded-full transition-all duration-[1200ms]"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-[#670D7F] via-[#851988] to-[#D63D98] py-16 px-4 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        <span className="text-white">Skills & Expertise</span>
      </h1>

      {/* Background container */}
      <div className="bg-white p-15 rounded-3xl shadow-xl w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.name}
              img={skill.img}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;