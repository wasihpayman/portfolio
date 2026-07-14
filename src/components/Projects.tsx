import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

  return (
    <section 
      id="projects" 
      className="py-24 relative"
    >

      <div className="max-w-6xl mx-auto px-6">


        {/* Header */}

        <div className="mb-14">

          <p className="
            text-blue-400
            text-sm
            font-medium
            mb-3
            uppercase
            tracking-widest
          ">
            My Work
          </p>


          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mb-4
          ">
            Featured Projects
          </h2>


          <p className="
            text-gray-400
            max-w-2xl
            text-lg
          ">
            Real-world applications and systems I have designed and developed using modern web technologies.
          </p>


        </div>




        {/* Projects Grid */}

        <div className="
          grid
          md:grid-cols-2
          gap-8
        ">


          {
            projects.map((project)=>(


              <article
                key={project.id}
                className="
                group
                bg-[#111827]
                border
                border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-blue-400/50
                transition-all
                duration-300
                "
              >



                {/* Image */}

                <div className="
                  h-56
                  overflow-hidden
                  bg-black/30
                ">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                    "
                  />

                </div>





                <div className="p-6">


                  {/* Badge */}

                  {
                    project.featured && (

                      <div className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-blue-400
                      mb-3
                      "
                      >

                        <Star size={14}/>

                        Featured Project

                      </div>

                    )
                  }




                  <h3 className="
                    text-xl
                    font-semibold
                    text-white
                    mb-3
                  ">
                    {project.title}
                  </h3>




                  <p className="
                    text-gray-400
                    leading-relaxed
                    mb-5
                    line-clamp-4
                  ">
                    {project.description}
                  </p>





                  {/* Tech Stack */}

                  <div className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  ">

                    {
                      project.technologies.map((tech,index)=>(

                        <span
                          key={index}
                          className="
                          px-3
                          py-1
                          text-xs
                          rounded-md
                          bg-white/5
                          border
                          border-white/10
                          text-gray-300
                          "
                        >
                          {tech}
                        </span>

                      ))
                    }


                  </div>






                  {/* Links */}

                  <div className="flex gap-3">


                    {
                      project.link && (

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-lg
                          bg-blue-500
                          text-white
                          text-sm
                          hover:bg-blue-600
                          transition
                          "
                        >

                          <ExternalLink size={15}/>

                          Live Demo

                        </a>

                      )
                    }





                    {
                      project.github && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-lg
                          border
                          border-white/10
                          text-gray-300
                          text-sm
                          hover:text-white
                          hover:border-blue-400
                          transition
                          "
                        >

                          <Github size={15}/>

                          Code

                        </a>

                      )
                    }



                    {
                      !project.link && !project.github && (

                        <span
                          className="
                          text-sm
                          text-gray-500
                          "
                        >
                          Private Project
                        </span>

                      )
                    }


                  </div>



                </div>


              </article>


            ))
          }



        </div>



      </div>


    </section>
  );
};


export default Projects;