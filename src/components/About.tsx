import React from 'react';
import { Code, Rocket, Users, Trophy } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  const stats = [
    { icon: <Code size={32} />, number: '19+', label: 'Projects Completed' },
    { icon: <Rocket size={32} />, number: '2+', label: 'Years Experience' },
    { icon: <Users size={32} />, number: '4+', label: 'Happy Clients' },
    { icon: <Trophy size={32} />, number: '2+', label: 'Awards Won' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About me"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Passionate About Creating Digital Excellence
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              With over 2 years of experience in full-stack development, I've had the privilege of working 
              with startups and established companies to bring their digital visions to life. My passion 
              lies in creating seamless user experiences backed by robust, scalable architectures.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. When I'm 
              not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or mentoring aspiring developers.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                Team Player
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                Innovation Driven
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;