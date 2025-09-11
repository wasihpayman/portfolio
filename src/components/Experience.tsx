import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Experience as ExperienceType } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start group">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className="ml-16 flex-1">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <h4 className="text-xl text-purple-300 font-semibold">{exp.company}</h4>
                      </div>
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-full border border-green-500/30 mt-2 sm:mt-0">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;