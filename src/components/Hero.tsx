import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Download } from 'lucide-react';
import { Profile, SocialLink } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

const Hero: React.FC<HeroProps> = ({ profile, socialLinks }) => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Github: <Github size={24} />,
      Linkedin: <Linkedin size={24} />,
      Twitter: <Twitter size={24} />,
      Mail: <Mail size={24} />
    };
    return icons[iconName] || <Mail size={24} />;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#gradient)"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-purple-400/30 shadow-2xl mx-auto mb-8 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fadeIn">
            {profile.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 font-light animate-fadeIn animation-delay-300">
            {profile.title}
          </h2>
          
          <div className="flex items-center justify-center text-gray-300 mb-8 animate-fadeIn animation-delay-500">
            <MapPin size={16} className="mr-2" />
            <span>{profile.location}</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-fadeIn animation-delay-700">
            {profile.bio}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-fadeIn animation-delay-900">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-purple-600/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              {getIcon(social.icon)}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-1000">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View My Work
          </button>
          <button>
            <a
              href="Payman_cv.pdf"          // مسیر فایل CV
              download               // باعث می‌شود فایل دانلود شود
              className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-600/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;