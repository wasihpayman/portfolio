import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ArrowRight
} from 'lucide-react';

import { Profile, SocialLink } from '../types/portfolio';


interface HeroProps {
  profile: Profile;
  socialLinks: SocialLink[];
}


const Hero: React.FC<HeroProps> = ({
  profile,
  socialLinks
}) => {


const getIcon = (iconName:string)=>{

 const icons:any={
  Github:<Github size={22}/>,
  Linkedin:<Linkedin size={22}/>,
  Mail:<Mail size={22}/>
 };

 return icons[iconName] || <Mail size={22}/>;

};





return (

<section
id="home"
className="
min-h-screen
flex
items-center
relative
overflow-hidden
bg-[#020617]
"
>


{/* Background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]
"
/>



<div
className="
relative
z-10
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
"
>



{/* Left Content */}

<div>


<p
className="
text-blue-400
font-medium
mb-4
tracking-widest
uppercase
text-sm
"
>
Full Stack Developer
</p>



<h1
className="
text-5xl
md:text-6xl
font-bold
text-white
leading-tight
"
>
{profile.name}
</h1>



<h2
className="
mt-5
text-2xl
text-gray-300
"
>
Laravel & React Developer
</h2>




<p
className="
mt-6
text-gray-400
text-lg
leading-relaxed
max-w-xl
"
>
Building scalable web applications, REST APIs, 
management systems and database-driven solutions 
for real-world business needs.
</p>




<div
className="
flex
items-center
gap-2
text-gray-400
mt-5
"
>

<MapPin size={18}/>

<span>
{profile.location}
</span>

</div>





{/* Stack */}

<div
className="
flex
flex-wrap
gap-3
mt-8
"
>


{
[
"Laravel",
"React",
"TypeScript",
"MySQL",
"REST API"
].map(item=>(

<span
key={item}
className="
px-4
py-2
rounded-lg
bg-white/5
border
border-white/10
text-gray-300
text-sm
"
>
{item}
</span>


))
}


</div>





{/* Buttons */}

<div
className="
flex
gap-4
mt-10
"
>


<a
href="#projects"
className="
px-6
py-3
bg-blue-600
rounded-lg
text-white
font-medium
flex
items-center
gap-2
hover:bg-blue-500
transition
"
>

View Projects

<ArrowRight size={18}/>

</a>



<a
href="Abdulwasih Payman cv.pdf"
download
className="
px-6
py-3
border
border-white/20
rounded-lg
text-white
flex
items-center
gap-2
hover:bg-white/5
transition
"
>

<Download size={18}/>

Download CV

</a>



</div>





{/* Social */}

<div
className="
flex
gap-4
mt-10
"
>


{
socialLinks.map(social=>(

<a
key={social.id}
href={social.url}
target="_blank"
rel="noopener noreferrer"

className="
p-3
rounded-lg
bg-white/5
border
border-white/10
text-gray-300
hover:text-white
hover:border-blue-400
transition
"
>

{getIcon(social.icon)}

</a>


))
}


</div>



</div>







{/* Right Image */}

<div
className="
flex
justify-center
"
>


<div
className="
relative
"
>


<div
className="
absolute
inset-0
bg-blue-500/20
blur-3xl
rounded-full
"
/>



<img

src={profile.image}

alt={profile.name}

className="
relative
w-72
h-72
object-cover
rounded-2xl
border
border-white/10
shadow-2xl
"

/>


</div>


</div>



</div>



</section>

);

};


export default Hero;