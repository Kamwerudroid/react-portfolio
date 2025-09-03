import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const portfolioData = {
    projects: [
      {
        id: 1,
        title: "Tourism Website",
        description: "This is simple tourism website",
        techStack: ["HTML", "CSS"],
        link: "https://kamwerudroid.github.io/Tourism_website/",
        imageUrl: "public/Image/Screenshot 2025-09-03 112133.png",
      },
      {
        id: 2,
        title: "Budget Tracker",
        description: "This tracks expenses and income.",
        techStack: ["HTML", "CSS", "Javascript"],
        link: "https://kamwerudroid.github.io/Budget_tracker/",
        imageUrl: "public/Image/Screenshot 2025-09-03 112320.png",
      },
      {
        id: 3,
        title: "Calorie Counter",
        description: "This tracks calories of food in a meal.",
        techStack: ["HTML", "CSS", "Javascript"],
        link: "https://kamwerudroid.github.io/Calorie-_counter/",
        imageUrl: "public/Image/Screenshot 2025-09-03 112546.png",
      },
      {
        id: 4,
        title: "Movie App",
        description: "This is a website that allows you to add movies to it.",
        techStack: ["HTML", "CSS", "Javascript", "React"],
        link: "https://movie-aa60k6h6g-kamwerudroids-projects.vercel.app/",
        imageUrl: "public/Image/Screenshot 2025-09-03 112701.png",
      },
      {
        id: 5,
        title: "Hangman",
        description: "This is a game where you guess the letters in a word.",
        techStack: ["HTML", "CSS", "Javascript"],
        link: "https://kamwerudroid.github.io/Hangman/",
        imageUrl: "public/Image/Screenshot 2025-09-03 112800.png",
      },
    ],
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 hover:bg-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
