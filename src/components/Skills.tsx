import React from 'react';
import { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {


  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
    AI: 'AI & Academic'
  };



  const groupedSkills = skills.reduce((acc, skill) => {

    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }

    acc[skill.category].push(skill);

    return acc;

  }, {} as Record<string, Skill[]>);




  return (

    <section
      id="skills"
      className="py-24"
    >

      <div className="max-w-6xl mx-auto px-6">


        {/* Header */}

        <div className="mb-14">

          <p
            className="
            text-blue-400
            text-sm
            uppercase
            tracking-widest
            mb-3
            "
          >
            Technologies
          </p>


          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            mb-4
            "
          >
            Skills & Expertise
          </h2>


          <p
            className="
            text-gray-400
            text-lg
            max-w-2xl
            "
          >
            Technologies and tools I use to build scalable web applications and business solutions.
          </p>


        </div>





        {/* Skills */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >


          {
            Object.entries(groupedSkills).map(
              ([category, categorySkills]) => (


              <div
                key={category}
                className="
                bg-[#111827]
                border
                border-white/10
                rounded-2xl
                p-6
                hover:border-blue-400/40
                transition
                "
              >



                <h3
                  className="
                  text-lg
                  font-semibold
                  text-white
                  mb-5
                  "
                >
                  {
                    categories[
                      category as keyof typeof categories
                    ]
                  }
                </h3>





                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  "
                >

                  {
                    categorySkills.map((skill)=>(


                      <span
                        key={skill.id}
                        className="
                        px-3
                        py-2
                        rounded-lg
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                        text-sm
                        hover:text-white
                        hover:border-blue-400
                        transition
                        "
                      >

                        {skill.name}

                      </span>


                    ))
                  }


                </div>



              </div>


            ))
          }



        </div>


      </div>


    </section>

  );
};


export default Skills;