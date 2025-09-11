import React from 'react';
import { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Others',
    other: 'Other'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">
                {categories[category as keyof typeof categories]}
              </h3>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-purple-500/30"
                        style={{
                          width: `${skill.percentage}%`,
                          animationDelay: `${Math.random() * 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;