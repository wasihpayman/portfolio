import React from 'react';
import { Code2, Layers, Users, Database } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

const About: React.FC<AboutProps> = ({ profile }) => {

  const stats = [
    {
      icon: <Code2 size={32} />,
      number: '5+',
      label: 'Full Stack Projects'
    },
    {
      icon: <Layers size={32} />,
      number: '2+',
      label: 'Years Experience'
    },
    {
      icon: <Users size={32} />,
      number: '4+',
      label: 'Client Projects'
    },
    {
      icon: <Database size={32} />,
      number: '15+',
      label: 'Technologies'
    }
  ];


  return (
    <section id="about" className="py-24 relative">

      <div className="max-w-7xl mx-auto px-4">


        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4 
          bg-gradient-to-r from-purple-400 to-pink-400 
          bg-clip-text text-transparent">

            About Me

          </h2>


          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full Stack Developer focused on building scalable web applications,
            business management systems, and API-driven solutions.
          </p>

        </div>



        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">


          {/* Developer Image */}
          <div className="relative group">

            <div className="
            absolute inset-0 
            bg-gradient-to-r 
            from-purple-600 
            to-pink-600 
            rounded-3xl 
            blur-xl 
            opacity-20 
            group-hover:opacity-40 
            transition">
            </div>


            <img

              src="src/portfolio/about.jpeg"

              alt={profile.name}

              className="
              relative
              rounded-3xl
              shadow-2xl
              w-full
              h-[420px]
              object-cover
              border
              border-purple-500/30
              "
            />

          </div>




          {/* Content */}
          <div className="space-y-6">


            <h3 className="
            text-3xl 
            font-bold 
            text-white">

              Full Stack Developer Building Real-World Software Solutions

            </h3>



            <p className="
            text-gray-400 
            text-lg 
            leading-relaxed">

              I specialize in Laravel, React, and modern web technologies.
              I design and develop scalable applications, REST APIs,
              dashboards, and database-driven systems for businesses.

            </p>



            <p className="
            text-gray-400 
            text-lg 
            leading-relaxed">


              My experience includes developing management platforms such as
              fuel station systems, construction management software,
              exchange management systems, and e-commerce applications.
              I focus on clean architecture, maintainable code,
              and practical solutions.


            </p>




            <div className="flex flex-wrap gap-3 pt-4">


              {
                [
                  'Laravel Developer',
                  'React Developer',
                  'REST API',
                  'Database Design',
                  'AI & Computer Vision'
                ].map((item)=>(
                  
                  <span
                  key={item}
                  className="
                  px-4
                  py-2
                  bg-purple-600/20
                  text-purple-300
                  rounded-full
                  border
                  border-purple-500/30
                  text-sm
                  "
                  >

                    {item}

                  </span>

                ))
              }


            </div>


          </div>


        </div>





        {/* Stats */}

        <div className="
        grid 
        grid-cols-2 
        lg:grid-cols-4 
        gap-6">


          {
            stats.map((stat,index)=>(

              <div

              key={index}

              className="
              text-center
              p-8
              rounded-2xl
              bg-white/5
              backdrop-blur
              border
              border-purple-500/20
              hover:border-purple-500/50
              hover:-translate-y-2
              transition-all
              duration-300
              "

              >

                <div className="
                flex 
                justify-center 
                mb-5 
                text-purple-400">

                  {stat.icon}

                </div>



                <div className="
                text-4xl 
                font-bold 
                text-white 
                mb-2">

                  {stat.number}

                </div>


                <div className="text-gray-400">

                  {stat.label}

                </div>


              </div>

            ))
          }


        </div>


      </div>


    </section>
  );
};


export default About;