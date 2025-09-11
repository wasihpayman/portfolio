import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-sm border border-yellow-500/30">
                    <Star size={12} className="fill-current" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-purple-400 rounded-lg text-purple-300 hover:bg-purple-600/20 transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;