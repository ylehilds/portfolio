
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/lehi.jpg";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import recrootBox from "./assets/recrootBox_site.png";
import campRank from "./assets/camprank_site.png";
import blogApp from "./assets/blogapp-site.png";
import taskyv from "./assets/taskyv_site.png";
import bookThinks from "./assets/bookThinks.png";
import forensics from "./assets/cyber-forensics-1.jpg";
import distributedMonitoringSystems from "./assets/distributedMonitoringSystems.jpeg";
import WirelessNetworks from "./assets/WirelessNetworks.jpg";
import cyberSecurity from "./assets/cyberSecurity.jpeg";
import iot from "./assets/iot.jpg";
import NETLab from "./assets/NETLab.png";
import homeworkFirst from "./assets/homeworkFirst.png";
import softwareStartup from "./assets/softwareStartup.jpeg";
import socialMediaAnalytics from "./assets/socialMediaAnalytics.png";
import technicalInterviewPreparation from "./assets/technicalInterviewPreparation.png";
// import puppy from "./assets/lehi.jpg";


import resume from "./assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Lehi";
let lastName = "Alcantara";
let title = "Software Engineer";
let bio = `Currently studying Masters in Information Technology at Brigham Young Universirty and working as a software engineering at BYU OIT where I work with Nodejs & Vue.js. 

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
//     imageUrl: recrootBox,
//     title: "Recroot Box",
//     description: "Easy to user porfolio-site template",
//     link: "https://ylehilds.github.io/recrootBox/"
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
    title: "IoT Systems Engineering Labs",
    description: "IoT Systems Engineering Labs & Project",
    link: "https://ylehilds.github.io/portfolio/IoTSystemsEngineering/labs/main/"
  },
  {
    imageUrl: forensics,
    title: "Forensics Tools List",
    description: "My Forensics Tools List Compilation",
    link: "https://ylehilds.github.io/portfolio/forensics"
  },
  {
    imageUrl: distributedMonitoringSystems,
    title: "IT 515R - Data Engineering - Distributed Monitoring Systems",
    description: "IT 515R - Data Engineering - Distributed Monitoring Systems",
    link: "https://github.com/ylehilds/distributed-monitoring-systems"
  },
  {
    imageUrl: WirelessNetworks,
    title: "ECEN 522R - Introduction to Wireless Project",
    description: "ECEN 522R - Introduction to Wireless Project",
    link: "https://github.com/ylehilds/wireless-networking-project"
  },
  {
    imageUrl: iot,
    title: "IT 548 - Cyber-Physical Systems - Smart Scale Project",
    description: "IT 548 - Cyber-Physical Systems - Smart Scale Project",
    link: "https://github.com/ylehilds/smart-scale"
  },
  {
    imageUrl: cyberSecurity,
    title: "IT 567 - Cyber Security & Pen Test - PortScanner Project",
    description: "IT 567 - Cyber Security & Pen Test - PortScanner Project",
    link: "https://github.com/ylehilds/PortScanner/settings"
  },
  {
    imageUrl: NETLab,
    title: "Net Lab Analyzing Mongolia Air Quality Sensors Project",
    description: "Net Lab Analyzing Mongolia Air Quality Sensors Project",
    link: "https://ylehilds.github.io/analyzing-mongolia/"
  },
  {
    imageUrl: softwareStartup,
    title: "IS 590R - Managing a Software Startup",
    description: "IS 590R - Managing a Software Startup",
    link: "https://ylehilds.github.io/homework-first/"
  },
  {
    imageUrl: homeworkFirst,
    title: "IS 590R - Managing a Software Startup Prototype Homework First",
    description: "IS 590R - Managing a Software Startup Prototype Homework First",
    link: "https://www.figma.com/proto/0w3lRmFOZbzDypJ5yepasj/Prototyping-in-Figma?node-id=0%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2"
  },
  {
    imageUrl: socialMediaAnalytics,
    title: "IT 670 - Web and Social Media Analytics",
    description: "IT 670 - Web and Social Media Analytics",
    link: "https://github.com/ylehilds/it670-project-streaming"
  },
  {
    imageUrl: technicalInterviewPreparation,
    title: "IS 590R - Seminar in Information Systems",
    description: "IS 590R - Seminar in Information Systems",
    link: "https://github.com/ylehilds/TechnicalInterviewCourse"
  }

  
  // {
  //   imageUrl: recrootBox,
  //   title: "Recroot Box",
  //   description: "Easy to user porfolio-site template",
  //   link: "https://ylehilds.github.io/recrootBox/"
  // },
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
