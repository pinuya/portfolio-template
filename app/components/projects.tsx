import type React from "react";
import { projects, ProjectI } from "../constants/projects";

const ProjectCard: React.FC<{ project: ProjectI }> = ({ project }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <img
        src={project.imageUrl || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full transition-colors duration-300"
            >
              Ver Site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium px-4 py-2 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
