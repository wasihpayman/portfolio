import { Profile, SocialLink, Project, Experience, Skill } from '../types/portfolio';

export const mockProfile: Profile = {
  id: '1',
  name: 'Abdul Wasih Payman',
  title: 'Full Stack Developer',
  bio: 'Passionate developer with +2 years of experience building scalable web applications. I love creating beautiful, functional user experiences and robust backend systems.',
  image: 'photo.jpg',
  location: 'Mazar-e-sharif, Afghanistan',
  email: 'paymanwasih240@gmail.com',
  phone: '+93 798 338 570'
};

export const mockSocialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/wasihpayman',
    icon: 'Github'
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wasih-payman-0b9b02262/',
    icon: 'Linkedin'
  },
  {
    id: '4',
    platform: 'Email',
    url: 'paymanwasih240@gmail.com',
    icon: 'Mail'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Inventroy management system',
    description: 'A full-stack Inventory management system platform built with React, PHP, Laravel, and Mysql. Features include user authentication, payment processing, and admin dashboard.',
    link: 'https://inventroy-management.com',
    github: 'https://github.com/wasihpayman/inventroy',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'PHP', 'Mysql', 'Laravel'],
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, file sharing, and team collaboration features.',
    link: 'https://task.com',
    github: 'https://github.com/wasihpayman/Task-Management',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
    featured: true
  },
  {
    id: '3',
    title: 'onlinebusbooking',
    description: 'Online Bus Booking is a platform that lets users quickly search and book bus tickets online with real-time seat availability and instant confirmation.',
    link: 'https://booking rsdf.com',
    github: 'https://github.com/wasihpayman/onlinebusbooking',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Java script', 'PHP', 'PostgreSQL', 'Laravel'],
    featured: false
  }
];

export const mockExperiences: Experience[] = [
  {
    id: '1',
    company: 'Freelancer',
    role: 'Senior Full Stack Developer',
    duration: '2025 - Present',
    startDate: '2025-01-23',
    endDate: null,
    description: 'Full-stack developer creating web,  and desktop apps, with experience in AI, machine learning, and computer vision.',
    technologies: ['React', 'PHP', 'laravel', 'AWS', 'postgreSQL, mysql, machine learning, AI, computer vision'],
    current: true
  },
  {
    id: '2',
    company: 'AI ROOT',
    role: 'resarch and developer engineer',
    duration: '2024 - 2024',
    startDate: '2024-012-01',
    endDate: '2024-01-11',
    description: 'The project was How can Deep think How can Deep learn .',
    technologies: ['Machine Learning', 'Computer Vision', 'PHP', 'Python', 'GitLab CI'],
    current: false
  },
  {
    id: '3',
    company: 'Paydayesh Zaman',
    role: 'Full Stack Developer',
    duration: '2023 - 2024',
    startDate: '2023-12-05',
    endDate: '2023-04-28',
    description: 'Created responsive websites and web applications for various clients, focusing on user experience and performance.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'MySQL', 'React'],
    current: false
  }
];

export const mockSkills: Skill[] = [
  { id: '1', name: 'React', percentage: 95, category: 'frontend' },
  { id: '2', name: 'TypeScript', percentage: 90, category: 'frontend' },
  { id: '3', name: 'Vue.js', percentage: 85, category: 'frontend' },
  { id: '4', name: 'Node.js', percentage: 90, category: 'backend' },
  { id: '5', name: 'Laravel', percentage: 85, category: 'backend' },
  { id: '6', name: 'PHP', percentage: 85, category: 'backend' },
  { id: '7', name: 'PostgreSQL', percentage: 80, category: 'backend' },
  { id: '8', name: 'MySQL', percentage: 85, category: 'backend' },
  { id: '9', name: 'Docker', percentage: 75, category: 'tools' },
  { id: '10', name: 'AWS', percentage: 70, category: 'tools' },
  { id: '11', name: 'Git', percentage: 95, category: 'tools' },
  { id: '12', name: 'Machine Learning', percentage: 70, category: 'AI' },
  { id: '13', name: 'Computer Vision', percentage: 95, category: 'AI' }
];