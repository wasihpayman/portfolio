import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }

    setIsMobileMenuOpen(false);
  };


  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        isScrolled
        ? 'bg-[#0b0f19]/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'bg-transparent'
      }
      `}
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">


          {/* Developer Logo */}

          <button
            onClick={() => scrollToSection('#home')}
            className="group flex items-center gap-2"
          >

            <div className="
              w-10 h-10 
              rounded-lg
              border border-white/10
              bg-white/5
              flex items-center justify-center
              group-hover:border-blue-400
              transition
            ">
              <span className="text-blue-400 font-bold text-lg">
                AP
              </span>
            </div>


            <span className="
              hidden sm:block
              text-white
              font-semibold
              tracking-wide
            ">
              Abdulwasih Payman
            </span>

          </button>



          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-1">

            {
              navItems.map((item)=>(
                <button
                  key={item.name}
                  onClick={()=>scrollToSection(item.href)}
                  className="
                    px-4 py-2
                    text-sm
                    text-gray-400
                    rounded-lg
                    hover:text-white
                    hover:bg-white/5
                    transition-all
                  "
                >
                  {item.name}
                </button>
              ))
            }


            <a
              href="https://github.com/wasihpayman"
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-3
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                border border-white/10
                text-gray-300
                hover:text-white
                hover:border-blue-400
                transition
                text-sm
              "
            >
              <Github size={16}/>
              GitHub
            </a>


          </div>



          {/* Mobile Button */}

          <button
            className="
              md:hidden
              text-gray-300
              hover:text-white
            "
            onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
          >

            {
              isMobileMenuOpen
              ?
              <X size={26}/>
              :
              <Menu size={26}/>
            }

          </button>


        </div>


      </div>




      {/* Mobile Menu */}

      {
        isMobileMenuOpen && (

          <div
            className="
            md:hidden
            bg-[#0b0f19]
            border-t border-white/10
            "
          >

            <div className="px-6 py-5 space-y-2">

              {
                navItems.map((item)=>(
                  <button
                    key={item.name}
                    onClick={()=>scrollToSection(item.href)}
                    className="
                    block
                    w-full
                    text-left
                    px-4 py-3
                    rounded-lg
                    text-gray-400
                    hover:text-white
                    hover:bg-white/5
                    transition
                    "
                  >
                    {item.name}
                  </button>
                ))
              }


            </div>

          </div>

        )
      }


    </nav>
  );
};


export default Navbar;