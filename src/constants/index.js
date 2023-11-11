import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  redux,
  tailwind,
  pytorch,
  mongodb,
  git,
  figma,
  docker,
  dlai,
  esisba,
  tensorflow,
  numpy,
  matplotlib,
  udacity,
  emailpd,
  echri,
  fordgobike,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "formation",
    title: "Formation",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "ML And DL Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI & Data Scientist Engineer",
    company_name: "ESI SBA",
    icon: esisba,
    iconBg: "#383E56",
    date: "September 2019 - July 2024",
    points: [
      "Applied advanced mathematical concepts and algebraic principles to solve complex problems in AI and data science.",
      "Proficient in multiple programming languages including Python, Java, JavaScript and PHP, with a focus on developing efficient and scalable solutions for AI applications.",
      "Implemented SQL and NoSQL databases to manage and analyze structured and unstructured data.",
      "Worked with big data technologies such as Apache Hadoop and Spark to process and analyze massive datasets.",
      "Applied machine learning algorithms to solve real-world problems, demonstrating a deep understanding of classification, regression and clustering.",
      "Applied deep learning algorithms to solve real-world problems, demonstrating a deep understanding of neural networks, complex architectures, encoders-decoders, transformers...",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Udacity",
    icon: udacity,
    iconBg: "#383E56",
    date: "December 2022 - March 2023",
    points: [
      "Covered topics such as data wrangling, exploratory data analysis, and data visualization",
      "Gained experience in Python programming and SQL databases",
      "Applying multiple analysing and plotting technics",
      "Introduction into machine learning",
    ],
  },
  {
    title: "NLP Specialist",
    company_name: "DeepLearning.ai",
    icon: dlai,
    iconBg: "#E6DEDD",
    date: "April 2023 - Jun 2023",
    points: [
      "Covered topics such as machine learning and deep learning in NLP, transformers, data processing and many more",
      "Practical data cleaning and preprocessing",
      "Applying advanced word embedding technics such as FastText and Word2Vec",
      "Understanding the Generative Ai and LLM different architectures",
    ],
  },



];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  
];

const projects = [
  {
    name: "Email Phishing Detection",
    description:
      " Email phishing detection using ML and DL technologies made by 4th year students as a  project of the end of the study year",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: emailpd,
    source_code_link: "https://drive.google.com/file/d/1fSd8uBwFbdQQDIE9G0tI16FYF5NXnm7_/view?usp=sharing",
  },
  {
    name: "Echri website",
    description:
      " Currently developing an ecommerce website that allows users to purchase products online with an integrated Epay",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: echri,
    source_code_link: "https://github.com/1DoraGON/Echri",
  },
  {
    name: "FordGoBike Analysis",
    description:
      "Investigated a Ford GoBike System Data using Python tools such as Pandas,Seaborn and NumPy",
    tags: [
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: fordgobike,
    source_code_link: "https://github.com/1DoraGON/FordGoBike",
  },
];

export { services, technologies, experiences, testimonials, projects };