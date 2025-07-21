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
  swansea_uni,
  tesla,
  shopify,
  carrent,
  raytracing,
  jobit,
  tripguide,
  threejs,
  java,
  python,
  vega_lite,
  roomcal,
  crypto,
  yoshan,
  vidhi,
  jd_power,
  palantir,
  datatables,
  hc_portfolio,
  milestone
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
    title: "AWS Cloud Development",
    icon: web,
  },
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Data Processing",
    icon: mobile,
  },
  {
    title: "Data Visualisation",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "vega_lite",
    icon: vega_lite,
  },
  {
    name: "datatables",
    icon: datatables,
  },
  {
    name: "palantir",
    icon: palantir,
  },
];

const experiences = [
  {
    title: "Junior Cloud DevOps Engineer",
    company_name: "Milestone Systems",
    icon: milestone,
    iconBg: "#FFFFFF",
    date: "April 2025 - Present",
    points: [
      "Develop and maintain a robust cloud-based backend infrastructure that supports centralized monitoring and management of multiple dispersed systems using AWS services such as EC2, ECS, RDS, DynamoDB, SQS.",
      "Deliver actionable insights through advanced analytics and logging.",
      "Build a scalable and modular foundation with Terraform and Infrastructure as Code (IaC) principles.",
    ],
  },
  {
    title: "Graduate Software Developer",
    company_name: "JD Power",
    icon: jd_power,
    iconBg: "#FFFFFF",
    date: "September 2023 - April 2025",
    points: [
      "Build new interactive dashboards and visualisations to illustrate comparative quality analyses that supports J.D Power’s benchmarking survey data",
      "Re-design and improve bespoke customer interfaces to meet their specific needs.",
      "Design, develop and maintain data sources relating to automotive quality and benchmarking analysis.",
      "Engage with designers and customers throughout the design, development and support phases.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Swansea University",
    icon: swansea_uni,
    iconBg: "#FFFFFF",
    date: "September 2021 - June 2023",
    points: [
      "Assessing, assisting, and guiding undergraduate and postgraduate computer science students with their laboratory exercises.",
      "Explaining difficult concepts about concurrency, functional and logic programming, and web application development to students with different levels of technical abilities.",
      "Working alongside experienced lecturers and students.",
      "Gaining technical and communication skills.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Swansea University",
    icon: swansea_uni,
    iconBg: "#FFFFFF",
    date: "June 2021 - July 2021",
    points: [
      "Maintained the Careers website of Swansea University, using different technologies such as Nuxt.js, Vue.js, MySQL, HTML and CSS.",
      "Used version control to collaborate with team members and track changes to the code.",
      "Ensured all milestones and deadlines were met in time.",
      "Collaborated with many people, internal and external to the university, to contribute to the success of the university.",
      "Worked on a meaningful project that aligns with the employability team’s strategy.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Talented, enthusiastic, and incredibly hard working.",
    name: "Yoshan (Graduate Software Developer @ Virtual Arts)",
    image: yoshan,
  },
  {
    testimonial:
      "I have worked with Stefani on many projects. She's one of the most driven and easiest people to work with. It has been a pleasure to be her colleague.",
    name: "Vidhi (Graduate Data Engineer @ Shell)",
    image: vidhi,
  },
];

const projects = [
  {
    name: "Handball Portfolio",
    description:
      "A website with information about a Bulgarian Handball Club. It is using Mantine - a React components library.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mantine",
        color: "green-text-gradient",
      },
    ],
    image: hc_portfolio,
    source_code_link:
      "https://github.com/stefanidmtrv/handball-portfolio",
  },
  {
    name: "Room Calendar",
    description:
      "The aim of this project was to have running touch screen tablets affixed to the outside of each room in the university, showing whether the room is currently free together with the schedule of the room.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "web development",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: roomcal,
    source_code_link: "https://github.com/stefanidmtrv/RoomCalendar",
  },
  {
    name: "Cryptocurrency Mining App",
    description:
      "A website which gives information about cryptocurency mining and its impact on the environment.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "cryptocurrencies",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/stefanidmtrv/Web-app-4th-year",
  },
];

export { services, technologies, experiences, testimonials, projects };
