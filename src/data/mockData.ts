import { Profile, SocialLink, Project, Experience, Skill } from '../types/portfolio';
import fuelImage from '../portfolio/fuel.png';
import constructionImage from '../portfolio/constraction (1).png';
import sarafiImage from '../portfolio/gigs.png';
import goldImage from '../portfolio/main.png';
import mrnImage from '../portfolio/persona.png';

export const mockProfile: Profile = {
  id: '1',
  name: 'Abdulwasih Payman',
  title: 'Full Stack Developer',
  bio: 'Full Stack Developer specializing in Laravel and React. I build scalable web applications, management systems, REST APIs, and database-driven solutions for real-world business needs.',
  image: 'src/portfolio/photo.jpeg',
  location: 'Mazar-e-Sharif, Afghanistan',
  email: 'paymanwasih240@gmail.com',
  phone: '+93 798 338 570'
};


export const mockSocialLinks: SocialLink[] = [

{
id:'1',
platform:'GitHub',
url:'https://github.com/wasihpayman',
icon:'Github'
},

{
id:'2',
platform:'LinkedIn',
url:'https://www.linkedin.com/in/wasih-payman-0b9b02262/',
icon:'Linkedin'
},

{
id:'3',
platform:'Email',
url:'mailto:paymanwasih240@gmail.com',
icon:'Mail'
},

{
id:'4',
platform:'WhatsApp',
url:'https://wa.me/93798338570',
icon:'WhatsApp'
}

];

export const mockProjects: Project[] = [

{
 id:'1',
 title:'Fuel Station Management System',
 description:
 'A business management platform built for fuel station operations. Includes user management, fuel station management, wallet tracking, transaction records, reporting, and admin dashboard workflows.',
 link:'',
 github:'',
 image:fuelImage,
 technologies:[
  'Laravel',
  'React',
  'MySQL',
  'REST API'
 ],
 featured:true
},


{
 id:'2',
 title:'Construction Management System',
 description:
 'A full-stack construction management platform for managing projects, clients, contractors, materials, purchases, expenses, and financial workflows.',
 link:'',
 github:'',
 image:constructionImage,
 technologies:[
  'Laravel 12',
  'React',
  'TypeScript',
  'MySQL'
 ],
 featured:true
},


{
 id:'3',
 title:'Multi-Tenant Sarafi Management System',
 description:
 'A multi-tenant exchange management system with customer wallets, transaction workflows, approval processes, ledger-based accounting concepts, role permissions, and audit logging.',
 link:'',
 github:'',
 image:sarafiImage,
 technologies:[
  'Laravel API',
  'Flutter',
  'MySQL',
  'Redis'
 ],
 featured:true
},


{
 id:'4',
 title:'Gold Shop Management System',
 description:
 'A desktop management application for gold shop operations including inventory, sales, purchases, and accounting workflows.',
 link:'',
 github:'',
 image:goldImage,
 technologies:[
  'Laravel',
  'React',
  'Material UI',
  'Electron'
 ],
 featured:false
},


{
 id:'5',
 title:'MRN Market - E-commerce Platform',
 description:
 'An e-commerce platform with product management, customer workflows, backend APIs, database models, and administrative features.',
 link:'',
 github:'',
 image:mrnImage,
 technologies:[
  'Laravel',
  'React',
  'MySQL'
 ],
 featured:false
}

];



export const mockExperiences: Experience[] = [


{
 id:'1',
 company:'Freelance',
 role:'Full Stack Developer',
 duration:'2025 - Present',
 startDate:'2025-01-01',
 endDate:null,
 description:
 'Developing custom web applications using Laravel, React, TypeScript, and MySQL. Building REST APIs, dashboards, business management systems, and scalable backend solutions.',
 technologies:[
  'Laravel',
  'React',
  'TypeScript',
  'MySQL',
  'REST API'
 ],
 current:true
},



{
 id:'2',
 company:'AISTWORKS',
 role:'Founder & Full Stack Developer',
 duration:'2025',
 startDate:'2025-01-01',
 endDate:'2025-12-31',
 description:
 'Founded and managed a software development brand focused on web applications and digital solutions. Developed full-stack applications and managed development workflows.',
 technologies:[
  'Laravel',
  'React',
  'JavaScript',
  'MySQL'
 ],
 current:false
},



{
 id:'3',
 company:'Sky Soft',
 role:'Full Stack Developer',
 duration:'2025',
 startDate:'2025-01-01',
 endDate:'2025-05-01',
 description:
 'Worked as a full-time developer and continued remote collaboration. Developed Laravel applications, database structures, frontend components, and software improvements.',
 technologies:[
  'Laravel',
  'PHP',
  'JavaScript',
  'MySQL'
 ],
 current:false
},



{
 id:'4',
 company:'PAYDA YSH ZAMAN COMPANY',
 role:'Part-time Backend Developer',
 duration:'2023 - 2024',
 startDate:'2023-01-01',
 endDate:'2024-01-01',
 description:
 'Developed backend features, REST APIs, and database solutions for data-driven web applications.',
 technologies:[
  'PHP',
  'Laravel',
  'SQL',
  'REST API'
 ],
 current:false
}

];



export const mockSkills: Skill[] = [
  // Frontend
  { id:'1', name:'React.js', percentage:0, category:'frontend' },
  { id:'2', name:'TypeScript', percentage:0, category:'frontend' },
  { id:'3', name:'JavaScript', percentage:0, category:'frontend' },
  { id:'4', name:'HTML5', percentage:0, category:'frontend' },
  { id:'5', name:'CSS3', percentage:0, category:'frontend' },
  { id:'6', name:'Tailwind CSS', percentage:0, category:'frontend' },
  { id:'7', name:'Material UI', percentage:0, category:'frontend' },
  // Backend
  { id:'8', name:'Laravel', percentage:0, category:'backend' },
  { id:'9', name:'PHP', percentage:0, category:'backend' },
  { id:'10', name:'REST APIs', percentage:0, category:'backend' },
  { id:'11', name:'Authentication', percentage:0, category:'backend' },
  { id:'12', name:'Backend Architecture', percentage:0, category:'backend' },
  // Database
  { id:'13', name:'MySQL', percentage:0, category:'database' },
  { id:'14', name:'SQLite', percentage:0, category:'database' },
  { id:'15', name:'SQL', percentage:0, category:'database' },
  { id:'16', name:'Database Design', percentage:0, category:'database' },
  // Tools
  { id:'17', name:'Git', percentage:0, category:'tools' },
  { id:'18', name:'GitHub', percentage:0, category:'tools' },
  { id:'19', name:'Docker', percentage:0, category:'tools' },
  { id:'20', name:'Linux', percentage:0, category:'tools' },
  { id:'21', name:'CI/CD', percentage:0, category:'tools' },
  { id:'22', name:'Electron', percentage:0, category:'tools' },
  { id:'23', name:'Flutter', percentage:0, category:'tools' }
];
