import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  givenchy,
  nars,
  gl,
  ga,
  leehwa,
  carrent,
  jobit,
  tripguide,
  xmas,
  uglyshop,
  animal,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Sales Consultant",
    company_name: "Givenchy",
    icon: givenchy,
    iconBg: "#ffffff",
    date: "April 2018 - April 2021",
    points: [
      "Provide detailed information to customers, answer their queries, and make personalized recommendations based on their preferences.",
      "Building and maintaining strong relationships with clients and taking responsibility of nurturing long-term relationships with customers.",
      "Involve effective sales techniques, persuasive communication, and an ability to adapt to customer preferences.",
      // "Contributing to the overall visual experience of the store.",
    ],
  },
  {
    title: "Makeup Artist",
    company_name: "Nars",
    icon: nars,
    iconBg: "#000000",
    date: "Oct 2016 - Jun 2018",
    points: [
      "Demonstrating expertise in various makeup techniques.",
      "Provide accurate product recommendations and educate customers,to achieve their desired results.",
      // "Personalized advice on skincare and makeup routines.",
      "Building strong relationships with clients to deliver exceptional customer service.",
    ],
  },
  {
    title: "Beauty consultant",
    company_name: "Galeries Lafayette",
    icon: gl,
    iconBg: "#ffffff",
    date: "Nov 2015 - Sep 2016",
    points: [
      "Stay up-to-date with the latest beauty trends, to offer personalized recommendations and guidance to customers.",
      "Resolving concerns, and ensuring overall customer satisfaction",
      "Provide one-on-one consultations to customers, offering tailored solutions",
    ],
  },
  {
    title: "Store Manager & Trainer",
    company_name: "Giorgio Armani Beauty",
    icon: ga,
    iconBg: "#ffffff",
    date: "Apr 2012 - Feb 2014",
    points: [
      "Develop sales strategies, set performance goals, and drive the team to achieve results.",
      // "Fostering a customer-centric environment and ensuring that all customers receive personalized attention and assistance",
      "Provide ongoing coaching and support to maximize the team's performance and career growth",
      "Create a positive work environment, motivate and train staff, and drive sales performance.",
    ],
  },
  // {
  //   title: "Sales Consultant & Store Manager",
  //   company_name: "Lee-Hwa Jewelery",
  //   icon: leehwa,
  //   iconBg: "#ffffff",
  //   date: "Apr 2008 - Dec 2010",
  //   points: [
  //     "Identifying customer preferences, offering personalized recommendations",
  //     "Building strong relationships with clients, actively listening to their needs, and providing superior service,",
  //     "Setting sales targets, providing guidance and training to the team, and conducting performance evaluations.",
  //     "Responsible for implementing visually appealing displays and arranging jewelry in an enticing manner.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Merry X-mas",
    description:
      "Experience an exciting game on our platform. Hunt and click on boxes to earn points, adding thrill and entertainment to your browsing.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: xmas,
    source_code_link: "https://github.com/CrystineKoh/Merry-X-mas/tree/main",
  },
  {
    name: "Purrfect Ugly Shop",
    description:
      "Shop seamlessly with our React e-commerce app. Browse, add to cart, and securely purchase products in a modern and user-friendly interface. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: uglyshop,
    source_code_link: "https://github.com/CrystineKoh/purrfect-ugly-shop",
  },
  {
    name: "Wiggles & Purrs",
    description:
      "Discover and adopt your perfect pet with our comprehensive pet adoption platform. Connect with furry companions effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: animal,
    source_code_link: "https://github.com/CrystineKoh/front-wiggles-and-purrs",
  },
];

export { services, technologies, experiences, testimonials, projects };
