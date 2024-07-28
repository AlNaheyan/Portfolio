import {
    IoLogoJavascript, 
    IoLogoHtml5,
    IoLogoReact,
    IoLogoNodejs,
  } from "react-icons/io5";
  import { RiTailwindCssFill } from "react-icons/ri"; 
  import { SiMongodb } from "react-icons/si";

  export const PROFILE_DATA = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Al Naheyan",
    tagline: 'Second-year Computer Science student, becoming a Software Engineer. Currently a Software Engineering Intern at Unadat. My passion for solving problems brought me to the Grove School of Engineering at City College of New York and pursue for Software Engineering. During my free time, I enjoy playing video games and travelling.',
    jobTitle: 'Full Stack Software Engineer',
    location: "New York, USA",
    yearsOfExperience: 2,
    skills: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
      "Bootstrap",
      "Redux",
      "Node.js",
      "RESTful APIs",
    ],
    email: "Officialk2000@gmail.com",
    phone: "(347) 257 8567",
    website: "https://timetoprogram.com/",
  };

  export const SKILLS = [
    {
      id: "01",
      icon: IoLogoJavascript,
      title: "JavaScript",
      comment: "JavaScript is my bread and butter",
    },
    {
      id: "02",
      icon: IoLogoHtml5,
      title: "HTML",
      comment: "HTML is the foundation of every web application",
    },
    {
      id: "03",
      icon: IoLogoReact,
      title: "React JS",
      comment: "I'm deeply passionate about React.JS",
    },
    {
      id: "04",
      icon: IoLogoNodejs,
      title: "Node JS",
      comment: "Node.js is my go-to choice for building server-side applications",
    },
    {
      id: "05",
      icon: SiMongodb,
      title: "MongoDB",
      comment: "MongoDB's flexible document-based structure makes data handling easier",
    },
    {
      id: "06",
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
      comment: "Tailwind CSS has revolutionized the way I design UI",
    },
  ];

  export const WORK_EXPERIENCE = [ 
    {
      id: "01",
      company: "Tech Solutions Inc.", 
      position: "Senior Frontend Developer", 
      duration: "2018 - Present",
      description: "Lead the front-end development team in building scalable web applications",
    },
    {
      id: "02",
      company: "CodeCrafters LLC",
      position: "Frontend Developer",
      duration: "2016 - 2018",
      description: "Developed responsive and interactive user interfaces using modern frameworks",
    },
    {
      id: "03",
      company: "Digital Innovations Co.",
      position: "UI/UX Designer",
      duration: "2014 - 2016",
      description: "Designed and developed user interfaces that enhanced user experience",
    },
  ];

  export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm John Doe, an experienced React JS developer with a passion for building interactive web applications.",
    background: "I hold a Bachelor's degree in Computer Science from XYZ University.",
    skills: "I'm proficient in a variety of technologies including React, JavaScript, Node.js, and CSS.",
    projects: "Some of my notable projects include an e-commerce platform, a social media app, and a project management tool.",
    interests: "Outside of coding, I enjoy traveling to new places, reading tech blogs, and playing the guitar.",
    careerGoals: "In the future, I aim to continue honing my skills, contribute to open source projects, and take on leadership roles in tech.",
    stats: {
      yearsOfExperience: '11+', 
      numberOfProjects: 20,
      certificationsEarned: 8,
    },
  };