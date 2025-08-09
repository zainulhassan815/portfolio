export const Tags = [
  "Axios",
  "Biome",
  "Compose",
  "Coroutines",
  "Express.js",
  "Firebase",
  "Husky",
  "JavaScript",
  "Jetpack Compose",
  "Kotlin",
  "Mongoose",
  "NewsData.io",
  "Node.js",
  "Python",
  "React",
  "Retrofit",
  "Room",
  "shadcn/ui",
  "Tailwind CSS",
  "TanStack Query",
  "Vite",
  "Zod",
  "Zustand",
] as const;

export type Tag = (typeof Tags)[number];

export type Project = {
  name: string;
  description: string;
  url: string;
  technologies: Tag[];
  image: string;
};

export const projects: Project[] = [
  {
    name: "NewsLayer",
    description:
      "Get a personalized news feed with the stories you care about. Android app built with Kotlin, Jetpack Compose, Retrofit, Room, Hilt, and NewsData.io API.",
    url: "https://github.com/zainulhassan815/newslayer",
    technologies: ["Kotlin"],
    image: "/projects/newslayer.png",
  },
  {
    name: "Currency Converter",
    description:
      "A simple Android app developed with Kotlin and Compose UI to convert to multiple currencies at once. Uses Firebase Database and Cloud Functions.",
    url: "https://github.com/zainulhassan815/currency-converter",
    technologies: ["Kotlin", "Firebase", "Compose"],
    image: "/projects/currency-converter.png",
  },
  {
    name: "PocketMovies",
    description:
      "Explore movies from the YTS API. Android app written in Kotlin with Jetpack Compose, Coroutines, Hilt, and modern architecture components.",
    url: "https://github.com/zainulhassan815/pocketmovies",
    technologies: ["Kotlin", "Jetpack Compose"],
    image: "/projects/pocket-movies.png",
  },
  {
    name: "Formz-Kotlin",
    description:
      "A Kotlin Multiplatform library for structured, reusable form state management and validation. Inspired by Dart Formz, supports Android, iOS, and more.",
    url: "https://github.com/zainulhassan815/formz-kotlin",
    technologies: ["Kotlin"],
    image: "/projects/formz-kotlin.png",
  },
  {
    name: "React Production-Ready Starter",
    description:
      "A robust, feature-rich starter template for building modern React applications. Includes Vite, shadcn/ui, Tailwind CSS, TanStack Query, Axios, Husky, Biome, and more.",
    url: "https://github.com/zainulhassan815/react-starter-js",
    technologies: ["React", "JavaScript"],
    image: "/projects/react-js-starter.png",
  },
  {
    name: "Express Starter JS",
    description:
      "A robust and production-ready starter template for building RESTful APIs with Express.js. Features logging, Swagger docs, security, CORS, Mongoose, Zod validation, Husky, Biome, and more.",
    url: "https://github.com/zainulhassan815/express-starter",
    technologies: ["Node.js", "Express.js"],
    image: "/projects/express-starter.png",
  },
  {
    name: "TMDB Movie Explorer",
    description:
      "A modern React app for exploring movies using The Movie Database (TMDB) API. Features search, details, authentication, shadcn/ui, Tailwind CSS, TanStack Query, Zustand, and more.",
    url: "https://github.com/zainulhassan815/tmdb-movie-explorer",
    technologies: ["React", "JavaScript"],
    image: "/projects/tmdb-movie-explorer.png",
  },
  {
    name: "Play Store Scraper",
    description:
      "A Python script that scrapes app images from the Google Play Store based on a search query. Downloads screenshots and organizes them into folders.",
    url: "https://github.com/zainulhassan815/playstore-image-scraper",
    technologies: ["Python"],
    image: "/projects/play-store-scraper.png",
  },
  {
    name: "Bright MLS Scraper Bot",
    description:
      "A headless browser bot that logs into Bright MLS, scrapes property listings (price, beds, agent email, etc.), and sends the data to a Podio webhook via a Flask API.",
    url: "https://github.com/zainulhassan815/mls-bot",
    technologies: ["Python"],
    image: "/projects/mls-bot.png",
  },
];
