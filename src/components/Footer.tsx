import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { SocialLink } from '../types/portfolio';

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Github: <Github size={20} />,
      Linkedin: <Linkedin size={20} />,
      Twitter: <Twitter size={20} />,
      Mail: <Mail size={20} />
    };
    return icons[iconName] || <Mail size={20} />;
  };

  return (
    <footer className="bg-gray-900/50 border-t border-purple-500/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdul Wasih Payman
            </h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating beautiful, functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-600/30 transition-all duration-300 hover:scale-110"
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Abdul Wasih Payman. All rights reserved.
            </p>
            <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0 flex items-center">
              Made with <Heart size={16} className="mx-2 text-red-500" fill="currentColor" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;