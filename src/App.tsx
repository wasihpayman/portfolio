import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { mockProfile, mockSocialLinks, mockProjects, mockExperiences, mockSkills } from './data/mockData';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero profile={mockProfile} socialLinks={mockSocialLinks} />
      <About profile={mockProfile} />
      <Skills skills={mockSkills} />
      <Experience experiences={mockExperiences} />
      <Projects projects={mockProjects} />
      <Contact profile={mockProfile} socialLinks={mockSocialLinks} />
      <Footer socialLinks={mockSocialLinks} />
    </div>
  );
}

export default App;