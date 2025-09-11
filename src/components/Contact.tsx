import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Profile, SocialLink } from '../types/portfolio';
import emailjs from 'emailjs-com';
interface ContactProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

const Contact: React.FC<ContactProps> = ({ profile, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

 

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_rnvcd7y',     
    'template_kd56qeg',     
    formData,               
    '-WUHpBIwWKNvCv7Qk'       
  ).then(
    (result) => {
      console.log('Email sent!', result.text);
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    (error) => {
      console.error('Email error:', error.text);
    }
  );
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 text-lg mb-8">
                I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">{profile.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.slice(0, 3).map((social) => {
                  const getIcon = () => {
                    switch (social.icon) {
                      case 'Github': return <Github size={20} />;
                      case 'Linkedin': return <Linkedin size={20} />;
                      default: return <Mail size={20} />;
                    }
                  };

                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-600/30 transition-all duration-300 hover:scale-110"
                    >
                      {getIcon()}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;