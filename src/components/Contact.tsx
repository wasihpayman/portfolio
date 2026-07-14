import React, { useState } from 'react';

import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle
} from 'lucide-react';

import { Profile, SocialLink } from '../types/portfolio';

import emailjs from 'emailjs-com';


interface ContactProps {
  profile: Profile;
  socialLinks: SocialLink[];
}


const Contact: React.FC<ContactProps> = ({
  profile,
  socialLinks
}) => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const [statusMessage, setStatusMessage] = useState('');

  const [isSending, setIsSending] = useState(false);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };




  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setIsSending(true);
    setStatusMessage('');



    emailjs.send(
      'service_rnvcd7y',
      'template_kd56qeg',
      formData,
      '-WUHpBIwWKNvCv7Qk'
    )

    .then(() => {


      setStatusMessage(
        "Message sent successfully! Thank you for contacting me. I will review your message and get back to you as soon as possible. For urgent inquiries, feel free to contact me on WhatsApp."
      );


      setFormData({
        name:'',
        email:'',
        subject:'',
        message:''
      });


      setIsSending(false);


    })


    .catch(() => {


      setStatusMessage(
        "Something went wrong. Please try again or contact me directly through WhatsApp."
      );


      setIsSending(false);


    });


  };




  return (

<section
id="contact"
className="py-24 bg-[#020617]"
>


<div className="max-w-6xl mx-auto px-6">


<div className="mb-14">


<p className="text-blue-400 uppercase tracking-widest text-sm">
Contact
</p>



<h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
Let's Build Something Together
</h2>



<p className="text-gray-400 mt-5 max-w-2xl text-lg">
Have a project, business idea, or remote opportunity?
Feel free to contact me.
</p>


</div>




<div className="grid lg:grid-cols-2 gap-12">



<div className="space-y-8">


<div>

<h3 className="text-2xl text-white font-semibold">
Get in touch
</h3>


<p className="text-gray-400 mt-3">
I work on Laravel, React, REST API,
and business management applications.
</p>


</div>



<div className="space-y-5">


<div className="flex gap-4 items-center">


<div className="p-3 rounded-lg bg-white/5 border border-white/10">

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


<div className="p-3 rounded-lg bg-white/5 border border-white/10">

<MessageCircle className="text-green-400"/>

</div>


<div>

<p className="text-white">
WhatsApp
</p>


<a
href="https://wa.me/93798338570"
target="_blank"
rel="noreferrer"
className="text-gray-400 hover:text-green-400"
>

+93 798 338 570

</a>


</div>


</div>
<div className="flex gap-4 items-center">

<div className="p-3 rounded-lg bg-white/5 border border-white/10">

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
rel="noreferrer"
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
rel="noreferrer"
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

required

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

required

type="email"

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

required

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

required

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

type="submit"

disabled={isSending}

className="
w-full
bg-blue-600
hover:bg-blue-500
disabled:opacity-50
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


{
isSending 
? "Sending..." 
: "Send Message"
}


</button>



</form>





{
statusMessage && (

<div
className="
mt-6
p-4
rounded-lg
bg-green-600/20
border
border-green-400/30
text-green-200
text-sm
leading-relaxed
"
>


<p>
{statusMessage}
</p>



<div className="mt-3">

For urgent inquiries:


<a
href="https://wa.me/93798338570"
target="_blank"
rel="noreferrer"
className="
ml-2
text-green-400
font-semibold
hover:text-green-300
"
>

Contact via WhatsApp

</a>


</div>



</div>

)

}




</div>




</div>



</div>


</section>


  );

};



export default Contact;