import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle
} from 'lucide-react';

import { SocialLink } from '../types/portfolio';


interface FooterProps {
 socialLinks: SocialLink[];
}


const Footer:React.FC<FooterProps> = ({
 socialLinks
}) => {



const getIcon=(icon:string)=>{

const icons:any={

 Github:<Github size={20}/>,
 Linkedin:<Linkedin size={20}/>,
 Mail:<Mail size={20}/>,
 WhatsApp:<MessageCircle size={20}/>

};


return icons[icon] || <Mail size={20}/>;


};





return (

<footer
className="
border-t
border-white/10
bg-[#020617]
py-12
"
>


<div
className="
max-w-6xl
mx-auto
px-6
"
>


<div
className="
grid
md:grid-cols-3
gap-10
"
>


{/* Brand */}

<div>

<h3
className="
text-xl
font-bold
text-white
mb-4
"
>
Abdulwasih Payman
</h3>


<p
className="
text-gray-400
leading-relaxed
"
>
Full Stack Developer specializing in Laravel,
React, REST APIs and scalable business applications.
</p>


</div>






{/* Navigation */}

<div>


<h4
className="
text-white
font-semibold
mb-4
"
>
Navigation
</h4>


<div
className="
space-y-2
"
>


{
[
"Home",
"About",
"Skills",
"Experience",
"Projects",
"Contact"
].map(item=>(


<button

key={item}

onClick={()=>{

const el=document.querySelector(
`#${item.toLowerCase()}`
);

el?.scrollIntoView({
behavior:'smooth'
});

}}

className="
block
text-gray-400
hover:text-blue-400
transition
"
>

{item}

</button>


))
}


</div>


</div>






{/* Contact */}

<div>


<h4
className="
text-white
font-semibold
mb-4
"
>
Connect
</h4>


<div
className="
flex
gap-3
"
>


{
socialLinks.map(link=>(


<a

key={link.id}

href={link.url}

target="_blank"

rel="noopener noreferrer"

className="
w-10
h-10
flex
items-center
justify-center
rounded-lg
bg-white/5
border
border-white/10
text-gray-400
hover:text-white
hover:border-blue-400
transition
"

>

{
getIcon(link.icon)
}


</a>


))
}


</div>


</div>



</div>






<div
className="
mt-10
pt-6
border-t
border-white/10
text-center
text-gray-500
text-sm
"
>

© {new Date().getFullYear()} Abdulwasih Payman. All rights reserved.

</div>




</div>


</footer>

);

};


export default Footer;