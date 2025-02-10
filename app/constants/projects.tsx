export interface ProjectI {
    title: string;
    description: string;
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
};


// insira os dados de projetos que voce possui aqui.
export const projects: ProjectI[] = [
    // template para projetos 
    // {
    //     title: "Portfólio", // titulo do seu projeto.
    //     description:
    //         "Projeto pessoal e template open-source, utilizando Remix e TailwindCSS.", // breve descricao do seu projeto
    //     imageUrl: "/assests/portfolioImage.png", // imagem de banner do seu projeto, recomendo que coloque na pasta /assets/ na pasta public
    //     liveUrl: "https://portfolio-pinuya.vercel.app/", // link do seu site deployado (se n houver pode deletar a linha)
    //     repoUrl: "https://github.com/pinuya/portfolio-template", // link do seu rep
    // },


    {
        title: "Portfólio",
        description:
            "Projeto pessoal e template open-source, utilizando Remix e TailwindCSS.",
        imageUrl: "/assests/portfolioImage.png",
        liveUrl: "https://portfolio-pinuya.vercel.app/",
        repoUrl: "https://github.com/pinuya/portfolio-template",
    },
    {
        title: "Sylvanian Families Store",
        description:
            "Projeto em desenvolvimento, uma lojinha de e-commerce de Sylvanian Families.",

        imageUrl: "/assests/sylvanianStore.png",
        liveUrl: "https://github.com/pinuya",
        repoUrl: "https://github.com/pinuya",
    },
    {
        title: "TicTacToe",
        description:
            "Projeto que refatorei recentemente de um jogo da velha para jogar com amigos.",

        imageUrl: "/assests/ticTacToe.png",
        liveUrl: "https://pinuya.github.io/tic-tac-toe/",
        repoUrl: "https://github.com/pinuya/tic-tac-toe",
    },
];