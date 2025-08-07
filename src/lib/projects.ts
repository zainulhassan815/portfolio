export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    name: 'react-starter-js',
    description: 'A starter template for React.js projects.',
    url: 'https://github.com/zainulhassan815/react-starter-js',
    technologies: ['React', 'JavaScript'],
  },
  {
    name: 'express-starter',
    description: 'A production-ready starter template for Express.js applications.',
    url: 'https://github.com/zainulhassan815/express-starter',
    technologies: ['Node.js', 'Express.js'],
  },
  {
    name: 'formz-kotlin',
    description: 'A library for simplified form representation and validation in Kotlin.',
    url: 'https://github.com/zainulhassan815/formz-kotlin',
    technologies: ['Kotlin'],
  },
  {
    name: 'playstore-image-scraper',
    description: 'A Python tool to scrape featured app images from the Play Store.',
    url: 'https://github.com/zainulhassan815/playstore-image-scraper',
    technologies: ['Python'],
  },
  {
    name: 'mls-bot',
    description: 'A bot for MLS.',
    url: 'https://github.com/zainulhassan815/mls-bot',
    technologies: ['Python'],
  },
  {
    name: 'tmdb-movie-explorer',
    description: 'A movie explorer for TMDB.',
    url: 'https://github.com/zainulhassan815/tmdb-movie-explorer',
    technologies: ['React', 'JavaScript'],
  },
  {
    name: 'newslayer',
    description: 'A personalized news feed application built with Kotlin.',
    url: 'https://github.com/zainulhassan815/newslayer',
    technologies: ['Kotlin'],
  },
  {
    name: 'currency-converter',
    description: 'A currency converter app developed with Kotlin, Compose, and Firebase.',
    url: 'https://github.com/zainulhassan815/currency-converter',
    technologies: ['Kotlin', 'Compose', 'Firebase'],
  },
  {
    name: 'pocketmovies',
    description: 'A movie app.',
    url: 'https://github.com/zainulhassan815/pocketmovies',
    technologies: ['React Native'],
  },
];
