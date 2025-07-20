const Projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    image: "/assets/images/portfolio-with-react.png",
    github: "https://github.com/Ramesh087/portfolio",
    demo: "https://portfolio.vercel.app",
  },
];

export default Projects;

export interface Projects {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}