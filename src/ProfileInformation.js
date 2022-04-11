
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/lehi.jpg";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

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
import cs236 from "./assets/cs236.jpeg";
import cs235 from "./assets/cs235.jpg";
import nodeJS from "./assets/nodeJS.png";
import it347 from "./assets/it347.jpg";
import todolist from "./assets/todolist.png";
import it327 from "./assets/it327.jpeg";
import it252 from "./assets/it252.png";
import cs2810 from "./assets/cs2810.png";
import cs100 from "./assets/cs100.jpg";
import it210 from "./assets/it210.jpg";
import eng316 from "./assets/eng316.jpg";
import info2450 from "./assets/info2450.jpg";
import cs1410 from "./assets/cs1410.png";
import cs1400 from "./assets/cs1400.jpg";
import it344 from "./assets/it344.jpg";
import arduinoIoT from "./assets/arduinoIoT.png";




import resume from "./assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Lehi";
let lastName = "Alcantara";
let title = "Software Engineer";
let bio = `Masters in Information Technology from Brigham Young University and working as a software engineer at BYU OIT where I work full stack using Nodejs & Vue.js. Feel free to check out some of my past projects below, browse some code on my github profile, or just reach out to say hi!`;

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
    link: "https://ylehilds.github.io/portfolioOG/forensics"
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
    imageUrl: arduinoIoT,
    title: "Arduinio IoT",
    description: "Cloud Management",
    link: "https://github.com/ylehilds/ArduinoIoT"
  },
  {
    imageUrl: cyberSecurity,
    title: "IT 567",
    description: "Cyber Security & Pen Test",
    link: "https://github.com/ylehilds/PortScanner"
  },
  {
    imageUrl: NETLab,
    title: "NET Lab",
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
  },
  {
    imageUrl: nodeJS,
    title: "NodeJS",
    description: "Certification Preparation",
    link: "https://github.com/ylehilds/NODE.JS-APPLICATION-DEVELOPMENT-LFW211"
  },
  {
    imageUrl: it347,
    title: "IT 347",
    description: "Computer Networks",
    link: "https://github.com/ylehilds/IT347"
  },
  {
    imageUrl: it344,
    title: "IT 344",
    description: "Operating Systems",
    link: "https://github.com/ylehilds/IT344"
  },
  {
    imageUrl: todolist,
    title: "IT 344 Project",
    description: "ToDoList Android App",
    link: "https://github.com/ylehilds/ToDoList"
  },
  {
    imageUrl: it327,
    title: "IT 327",
    description: "Digital Communications",
    link: "https://github.com/ylehilds/IT327"
  },
  {
    imageUrl: it252,
    title: "IT 252",
    description: "Computer Architecture & Organization",
    link: "https://github.com/ylehilds/IT252"
  },
  {
    imageUrl: cs100,
    title: "CS 100",
    description: "Fundamentals of Computing",
    link: "https://github.com/ylehilds/CS100"
  },
  {
    imageUrl: it210,
    title: "IT 210",
    description: "Fundamentals of Web-Based IT",
    link: "https://github.com/ylehilds/it210"
  },
  {
    imageUrl: cs236,
    title: "CS 236",
    description: "Discrete Structure",
    link: "https://github.com/ylehilds/CS236"
  },
  {
    imageUrl: cs235,
    title: "CS 235",
    description: "Data Structures",
    link: "https://github.com/ylehilds/CS235"
  },
  {
    imageUrl: eng316,
    title: "ENG 316",
    description: "Technical Communication",
    link: "https://github.com/ylehilds/ENG316"
  },
  {
    imageUrl: info2450,
    title: "INFO 2450",
    description: "Web Application Design",
    link: "https://github.com/ylehilds/INFO2450"
  },
  {
    imageUrl: cs2810,
    title: "CS 2810",
    description: "Computer Organization & Architecture",
    link: "https://github.com/ylehilds/CNS2810"
  },
  {
    imageUrl: cs1410,
    title: "CS 1410",
    description: "Object-Oriented Programming",
    link: "https://github.com/ylehilds/CNS1410"
  },
  {
    imageUrl: cs1400,
    title: "CS 1400",
    description: "Fundamentals Of Programming",
    link: "https://github.com/ylehilds/CNS1400"
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
