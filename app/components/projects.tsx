// tipo para os dados do projeto
type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

// mock de exemplo para os projetos
const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfólio Pessoal",
    description:
      "Portfólio pessoal construído com Remix, Tailwind CSS e TypeScript.",
    imageUrl: "/assets/portfolioImage.png",
    tags: ["React", "Remix", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "2",
    title: "E-commerce Completo",
    description:
      "E-commerce completo com integração de pagamentos e gerenciamento de produtos.",
    imageUrl: "/assets/sylvanianStore.png",
    tags: ["React", "Remix", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "Jogo da Velha",
    description: "Jogo da velha interativo com pontuação e modo multiplayer.",
    imageUrl: "/assets/ticTacToe.png",
    tags: ["React", "TypeScript", "CSS"],
  },
];

export function Projects() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-center text-4xl">Projetos</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={`Imagem do projeto ${project.title}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="border-b border-gray-200 p-5 dark:border-gray-700">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>

      <div className="flex-grow p-5">
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
