const Projects = [
  {
    title: "Weather App",
    description: "Built with React and OpenWeather API.",
    image: "/assets/images/weather.png",
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app.vercel.app",
  },
  // Add more projects
];

export default Projects;

export interface Projects {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}