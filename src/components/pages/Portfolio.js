import React from 'react';
import Project from '../Project';

// this will loop thru the array of projects fields (title, image, githubURL, link to livesite), creating a 'Project' component for each

const projects = [
  {
    key: '1',
    title: 'BuySomeGames',
    description: 'MERN stack project',
    imgSrc: './assets/images/video-game.jpg',
    gitHubUrl: 'https://github.com/tjr1387/buy_some_games',
    liveSiteUrl: 'https://calm-peak-12756.herokuapp.com/',
  },
  {
    key: '2',
    title: 'The Boozy Chef',
    description: 'Front-end project',
    imgSrc: './assets/images/boozy-chef-pic.jpg',
    gitHubUrl: 'https://github.com/Anukhadka19/food-drinks-ordering-service',
    liveSiteUrl: 'https://anukhadka19.github.io/food-drinks-ordering-service/',
  },
  {
    key: '3',
    title: 'Weather Dashboard',
    description: 'Front-end only',
    imgSrc: './assets/images/weather-dashboard-pic.jpg',
    gitHubUrl: 'https://github.com/tjr1387/weather-dashboard',
    liveSiteUrl: 'https://tjr1387.github.io/weather-dashboard',
  },
  {
    key: '4',
    title: 'Tech Blog',
    description: 'Full Stack, pre-React',
    imgSrc: './assets/images/tech-blog-pic.jpg',
    gitHubUrl: 'https://github.com/tjr1387/tech-blog-with-users',
    liveSiteUrl: 'https://calm-tundra-85233.herokuapp.com/',
  },
  {
    key: '5',
    title: 'Mock E-commerce App',
    description: 'Back-end only w/ MySQL',
    imgSrc: './assets/images/e-commerce-pic.jpg',
    gitHubUrl: 'https://github.com/tjr1387/mock-ecommerce-back-end',
    liveSiteUrl: 'https://drive.google.com/file/d/11nXoOeJyvw8CBdxRpNpfdMWGx7ErUmJJ/view',
  },
  {
    key: '6',
    title: 'Mock Social Network API',
    description: 'Back-end only w/ MongoDB',
    imgSrc: './assets/images/social-net-pic.jpg',
    gitHubUrl: 'https://github.com/tjr1387/mock-social-network-api',
    liveSiteUrl: 'https://drive.google.com/file/d/1FhUu6AaAWHYUQGHAN-ukRrGOMdSpDKIb/view',
  },
];

// this will map thru each object of the projects array
export default function Portfolio() {
  return (
    <>
    <h1>My Projects</h1>
    <div className="projects-container">
      {projects.map(project => 
        <Project key={project.key} title={project.title} description={project.description} imgSrc={project.imgSrc} gitHubUrl={project.gitHubUrl} liveSiteUrl={project.liveSiteUrl} />
      )}
    </div>
    </>
  )
};