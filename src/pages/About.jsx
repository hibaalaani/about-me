import React , {useState, useEffect} from 'react';

const About = () => {

  const [text, setText] = useState("");
  const name = "Hello I'm Hiba ALaani, a passionate web developer with a keen interest working with Python ,building websites responsive and user-friendly websites.Specializing in technologies such as React, Tailwind CSS, and JavaScript. In backend , I'm specializing in Python , Nodejs as well as Database"
   // Replace with your name
  const speed = 150; // Speed in milliseconds

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     if (index < name.length) {
  //       setText((prev) => prev + name[index]);
  //       index++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, speed);

  //   return () => clearInterval(interval);
  // }, []);





  return (
    <section  className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img 
              src={`${import.meta.env.VITE_API_URL}/assets/img/20220801_size.jpg`}
              alt="About Me" 
              className="rounded-full mx-auto w-60 h-60 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
            {/* <p className="text-lg leading-relaxed text-gray-300"> */}
             {/* <p  className="text-writer">{text}</p> */}
              
             <div className="text-writer">
    Hello, I'm Hiba AlAani, a passionate web developer.
  </div>
  <p className="about-paragraph">
    I build responsive and user-friendly websites. I have a background in frontend development, specializing in technologies such as React, Tailwind CSS, and JavaScript. I'm constantly exploring new ways to improve my skills and keep up with the latest trends in web development.
  </p>
          
            {/* <p className="text-lg leading-relaxed mt-4 text-gray-300">
              When I’m not coding, you can find me learning about new technologies, 
              working on side projects, or enjoying outdoor activities. 
              I am always open to collaborating on exciting projects and learning 
              from fellow developers.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
