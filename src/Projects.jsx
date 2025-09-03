import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const portfolioData = {
    projects:[
      {
        id:1,
        title:'Tourism Website',
        description:'This is simple tourism website',
        techStack: ["HTML","CSS"],
        link:"https://kamwerudroid.github.io/Tourism_website/",
        imageUrl:'public/Image/Screenshot 2025-09-03 112133.png'
      },
      {
        id:2,
        title:'Budget Tracker',
        description:'This tracks expenses and income.',
        techStack: ["HTML","CSS","Javascript"],
        link:"https://kamwerudroid.github.io/Budget_tracker/",
        imageUrl:'public/Image/Screenshot 2025-09-03 112320.png'
      },
      {
        id:3,
        title:'Calorie Counter',
        description:'This tracks calories of food in a meal.',
        techStack: ["HTML","CSS","Javascript"],
        link:"https://kamwerudroid.github.io/Calorie-_counter/",
        imageUrl:'public/Image/Screenshot 2025-09-03 112546.png'
      },
      {
        id:4,
        title:'Movie App',
        description:'This is a website that allows you to add movies to it.',
        techStack: ["HTML","CSS","Javascript","React"],
        link:"https://movie-aa60k6h6g-kamwerudroids-projects.vercel.app/",
        imageUrl:'public/Image/Screenshot 2025-09-03 112701.png'
      },
      {
        id:5,
        title:'Hangman',
        description:'This is a game where you guess the letters in a word.',
        techStack: ["HTML","CSS","Javascript"],
        link:"https://kamwerudroid.github.io/Hangman/",
        imageUrl:'public\Image\Screenshot 2025-09-03 112800.png'
      },

    ]
  };
  return (
    <>
      <div>
        <h1>Projects</h1>
        <p>Here is a list of projects that I have worked on:</p>
        
      </div>
    </>
  );
}

export default Projects;
