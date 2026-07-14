import React, {useState} from 'react';
import {
 Mail,
 Phone,
 MapPin,
 Send,
 Github,
 Linkedin,
 MessageCircle
} from 'lucide-react';

import {Profile, SocialLink} from '../types/portfolio';

import emailjs from 'emailjs-com';


interface ContactProps {
 profile:Profile;
 socialLinks:SocialLink[];
}



const Contact:React.FC<ContactProps> = ({
 profile,
 socialLinks
})=>{


const [formData,setFormData]=useState({

name:'',
email:'',
subject:'',
message:''

});



const handleChange=(
e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};





const handleSubmit=(e:React.FormEvent)=>{

e.preventDefault();


emailjs.send(
'service_rnvcd7y',
'template_kd56qeg',
formData,
'-WUHpBIwWKNvCv7Qk'
)
.then(()=>{

setFormData({
name:'',
email:'',
subject:'',
message:''
});

});


};





return (

<section
id="contact"
className="
py-24
bg-[#020617]
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
mb-14
"
>


<p
className="
text-blue-400
uppercase
tracking-widest
text-sm
"
>
Contact
</p>


<h2
className="
text-4xl
md:text-5xl
font-bold
text-white
mt-3
"
>
Let's Build Something Together
</h2>


<p
className="
text-gray-400
mt-5
max-w-2xl
text-lg
"
>
Have a project, business idea, or remote opportunity?
Feel free to contact me.
</p>


</div>





<div
className="
grid
lg:grid-cols-2
gap-12
"
>




{/* Information */}


<div
className="
space-y-8
"
>


<div>

<h3
className="
text-2xl
text-white
font-semibold
"
>
Get in touch
</h3>


<p
className="
text-gray-400
mt-3
"
>
I work on Laravel, React, REST API,
and business management applications.
</p>


</div>





<div
className="
space-y-5
"
>



<div className="flex gap-4 items-center">

<div
className="
p-3
rounded-lg
bg-white/5
border
border-white/10
"
>
<Mail className="text-blue-400"/>
</div>

<div>

<p className="text-white">
Email
</p>

<p className="text-gray-400">
{profile.email}
</p>

</div>

</div>





<div className="flex gap-4 items-center">

<div
className="
p-3
rounded-lg
bg-white/5
border
border-white/10
"
>
<MessageCircle className="text-green-400"/>
</div>


<div>

<p className="text-white">
WhatsApp
</p>

<a
href="https://wa.me/93798338570"
className="text-gray-400 hover:text-white"
>
+93 798 338 570
</a>

</div>

</div>





<div className="flex gap-4 items-center">

<div
className="
p-3
rounded-lg
bg-white/5
border
border-white/10
"
>
<MapPin className="text-blue-400"/>
</div>


<div>

<p className="text-white">
Location
</p>

<p className="text-gray-400">
{profile.location}
</p>

</div>

</div>



</div>







<div className="flex gap-3 pt-5">


<a
href="https://github.com/wasihpayman"
target="_blank"
className="
p-3
bg-white/5
border
border-white/10
rounded-lg
text-gray-400
hover:text-white
"
>
<Github/>
</a>



<a
href="https://www.linkedin.com/in/wasih-payman-0b9b02262/"
target="_blank"
className="
p-3
bg-white/5
border
border-white/10
rounded-lg
text-gray-400
hover:text-white
"
>
<Linkedin/>
</a>


</div>



</div>








{/* Form */}


<div
className="
bg-[#111827]
border
border-white/10
rounded-2xl
p-8
"
>


<form
onSubmit={handleSubmit}
className="space-y-5"
>



<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your name"

className="
w-full
bg-black/20
border
border-white/10
rounded-lg
px-4
py-3
text-white
outline-none
focus:border-blue-400
"

/>



<input

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Your email"

className="
w-full
bg-black/20
border
border-white/10
rounded-lg
px-4
py-3
text-white
outline-none
focus:border-blue-400
"

/>



<input

name="subject"

value={formData.subject}

onChange={handleChange}

placeholder="Subject"

className="
w-full
bg-black/20
border
border-white/10
rounded-lg
px-4
py-3
text-white
outline-none
focus:border-blue-400
"

/>




<textarea

name="message"

value={formData.message}

onChange={handleChange}

rows={6}

placeholder="Tell me about your project..."

className="
w-full
bg-black/20
border
border-white/10
rounded-lg
px-4
py-3
text-white
outline-none
focus:border-blue-400
"

/>





<button

className="
w-full
bg-blue-600
hover:bg-blue-500
text-white
py-3
rounded-lg
font-medium
flex
justify-center
gap-2
transition
"

>

<Send size={20}/>

Send Message

</button>



</form>


</div>




</div>



</div>


</section>


);


};


export default Contact;