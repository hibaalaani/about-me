// pages/Projects.js
import React, {useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
const [projects, setProjects]= useState([])
const [isLoaded, setIsLoaded] = useState(false);
  const fetchProjects = async () => {
    console.log(import.meta.env);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/api/projects/`);
      console.log(response)
      const data = await response.json();
      setProjects(data); // Update your state with the fetched data
      setIsLoaded(true);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };
  
useEffect(()=>{

  fetchProjects()


},[])

  // const projects = [
  //   {
  //     title: 'Candy Color',
  //     description: 'A brief description of Project One.',
  //     imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/Candy.png`,
  //     link: "https://alaani-candy-color.netlify.app/",
  //   },
  //   {
  //       title: "Color Game",
  //       description: "A beautiful image gallery.",
  //       imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/gameColor.png`,
  //       link: "https://color-game-guess.netlify.app/",
  //     },
  //     {
  //       title: "The Image Gallery",
  //       description: "A beautiful image gallery.",
  //       imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/Gallery.png`,
  //       link: "https://alaani-image-gallery.netlify.app/",
  //     },
  
  //   {
  //     title: 'Tgif',
  //     description: 'A brief description of Project Two.',
  //     imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/Tgif.png`,
  //     link: "https://alaani-tgif.netlify.app/",
  //   },
  //   {
  //       title: "More Info , if you like more automation with Python",
  //       description: "Double Check my GITHUB",
  //       imageUrl: `${import.meta.env.VITE_API_URL}/assets/img/download.jpg`,
  //       link: "https://github.com/hibaalaani",
  //     },
  // ];

  // const getAnimationClass = (index) => {
  //   switch (index) {
  //     case 0:
  //       return "animate-from-left";
  //     case 1:
  //       return "animate-from-right";
  //     case 2:
  //       return "animate-from-top";
  //     case 3:
  //       return "animate-from-bottom";
  //     case 4:
  //       return "animate-from-left";
  //     case 5:
  //       return "animate-from-right";
  //     default:
  //       return "";
  //   }
  // };
  const getAnimationDirection = (index) => {
    const directions = ['left', 'right', 'top', 'bottom'];  // Define possible directions
    return directions[index % directions.length];  // Cycle through directions
  };

  return (
    <section  className="py-10  bg-gray-500 bg-gray-100">
    
      <h2 className="text-3xl text-white font-bold text-center my-10">Projects</h2>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoaded && projects.map((project, index) => (
          <ProjectCard key={index} {...project}   imageUrl ={`${import.meta.env.VITE_BACK_END_URL}/media/${project.image_url}`}  animationDirection={getAnimationDirection(index)} />
        ))}
     </div>
      </div>
    </section>
  );
};

export default Projects;
