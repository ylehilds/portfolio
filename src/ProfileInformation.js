
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/lehi.jpg";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import campRank from "./assets/camprank_site.png";
import blogApp from "./assets/blogapp-site.png";
import taskyv from "./assets/taskyv_site.png";
import bookThinks from "./assets/bookThinks.png";
import forensics from "./assets/cyber-forensics-1.jpg";
import distributedMonitoringSystems from "./assets/distributedMonitoringSystems.jpg";
import WirelessNetworks from "./assets/WirelessNetworks.jpg";
import cyberSecurity from "./assets/cyberSecurity.jpeg";
import iot from "./assets/iot.jpg";
import NETLab from "./assets/NETLab.png";
import homeworkFirst from "./assets/homeworkFirst.png";
import softwareStartup from "./assets/softwareStartup.jpeg";
import socialMediaAnalytics from "./assets/socialMediaAnalytics.png";
import technicalInterviewPreparation from "./assets/technicalInterviewPreparation.jpg";
// import puppy from "./assets/lehi.jpg";


import resume from "./assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Lehi";
let lastName = "Alcantara";
let title = "Software Engineer";
let bio = `Masters in Information Technology from Brigham Young Universirty and working as a software engineer at BYU OIT where I work full stack using Nodejs & Vue.js. 

Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!`;

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.

let userIcons = true;

let links = [
  {
    name: "Email",
    link: "mailto:lehilds@gmail.com",
    icon: FaEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/ylehilds",
    icon: FaGithub
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lehi-alcantara/",
    icon: FaLinkedin
  },
  {
    name: "Resume",
    link: resume,
    icon: FaFileAlt
  }
];

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.

let portfolioTitle = "Recent Projects"
let portfolioSectionBackgroundColor = "#003344"
// let portfolioItems = [
//   {
//     imageUrl: taskyv,
//     title: "Taskyv",
//     description: "Sleek, sexy task manager",
//     link: "https://taskyv.herokuapp.com/"
//   },
//   {
//     imageUrl: bookThinks,
//     title: "BookThinks",
//     description: "Book-centric note recorder",
//     link: "https://bookthinks.herokuapp.com/"
//   },
//   {
//     imageUrl: campRank,
//     title: "CampRank",
//     description: "Post, rank and comment about your favorite campsites",
//     link: "https://desolate-falls-89173.herokuapp.com/"
//   },
//   {
//     imageUrl: blogApp,
//     title: "Blog App",
//     description: "Easy access blog app.",
//     link: "https://boiling-harbor-27900.herokuapp.com"
//   }
// ];

let portfolioItems = [
  {
    imageUrl: iot,
    title: "IT 515R",
    description: "Systems Engineering",
    link: "https://ylehilds.github.io/portfolioOG/IoTSystemsEngineering/labs/main/"
  },
  {
    imageUrl: forensics,
    title: "IT 566",
    description: "Digital Forensics",
    link: "https://ylehilds.github.io/portfolio/forensics"
  },
  {
    imageUrl: distributedMonitoringSystems,
    title: "IT 515R",
    description: "Data Engineering",
    link: "https://github.com/ylehilds/distributed-monitoring-systems"
  },
  {
    imageUrl: WirelessNetworks,
    title: "ECEN 522R",
    description: "Introduction to Wireless",
    link: "https://github.com/ylehilds/wireless-networking-project"
  },
  {
    imageUrl: iot,
    title: "IT 548",
    description: "Cyber-Physical Systems",
    link: "https://github.com/ylehilds/smart-scale"
  },
  {
    imageUrl: cyberSecurity,
    title: "IT 567",
    description: "Cyber Security & Pen Test",
    link: "https://github.com/ylehilds/PortScanner"
  },
  {
    imageUrl: NETLab,
    title: "Net Lab",
    description: "Analyzing Mongolia Air Quality Sensors",
    link: "https://ylehilds.github.io/analyzing-mongolia/"
  },
  {
    imageUrl: softwareStartup,
    title: "IS 590R",
    description: "Managing a Software Startup",
    link: "https://ylehilds.github.io/homework-first/"
  },
  {
    imageUrl: homeworkFirst,
    title: "IS 590R",
    description: "Prototype Homework First",
    link: "https://www.figma.com/proto/0w3lRmFOZbzDypJ5yepasj/Prototyping-in-Figma?node-id=0%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2"
  },
  {
    imageUrl: socialMediaAnalytics,
    title: "IT 670",
    description: "Web and Social Media Analytics",
    link: "https://github.com/ylehilds/it670-project-streaming"
  },
  {
    imageUrl: technicalInterviewPreparation,
    title: "IS 590R",
    description: "Seminar in Information Systems",
    link: "https://github.com/ylehilds/TechnicalInterviewCourse"
  }

  
  // {
  // {
  //   imageUrl: campRank,
  //   title: "CampRank",
  //   description: "Post, rank and comment about your favorite campsites",
  //   link: "https://desolate-falls-89173.herokuapp.com/"
  // },
  // {
  //   imageUrl: blogApp,
  //   title: "Blog App",
  //   description: "Easy access blog app.",
  //   link: "https://boiling-harbor-27900.herokuapp.com"
  // }
];


// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = false;

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor,
  selfie,
  showFooter,
  links,
  userIcons,
  darkModeSwitch,
  darkMode
};
