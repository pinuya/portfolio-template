import React from "react";
import { skills, SkillI } from "../constants/skills";


const SkillIcon = ({ skill }: { skill: SkillI }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <skill.icon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer" />
      </div>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded-md whitespace-nowrap">
          <p>{skill.name}</p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black" />
        </div>
      )}
    </div>
  );
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: SkillI[];
}) => (
  <div className="flex items-center flex-col">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map(skill => <SkillCategory title={skill.title} skills={skill.skills} />)}
    </div>
  );
}
