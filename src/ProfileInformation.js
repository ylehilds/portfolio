
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/lehi.jpg";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import forensics from "./assets/cyber-forensics-1.jpg";
import distributedMonitoringSystems from "./assets/etlPipeline.png";
import WirelessNetworks from "./assets/WirelessNetworks.jpg";
import cyberSecurity from "./assets/cyberSecurity.jpeg";
import iot from "./assets/iot.jpg";
import cyberPhisicalSystems from "./assets/cyberPhisicalSystems.jpeg";
import NETLab from "./assets/NETLab.png";
import homeworkFirst from "./assets/homeworkFirst.png";
import softwareStartup from "./assets/softwareStartup.jpeg";
import socialMediaAnalytics from "./assets/socialMediaAnalytics.png";
import technicalInterviewPreparation from "./assets/technicalInterviewPreparation.jpg";
import cs236 from "./assets/cs236.jpeg";
import cs235 from "./assets/cs235.jpg";
import nodeJS from "./assets/nodeJS.png";
import it347 from "./assets/it347.jpg";
import todolist from "./assets/androidApp.png";
import it327 from "./assets/it327.jpeg";
import it252 from "./assets/it252.png";
import cs2810 from "./assets/cs2810.png";
import cs100 from "./assets/cs100.jpg";
import it210 from "./assets/it210.jpg";
import eng316 from "./assets/eng316.jpg";
import info2450 from "./assets/info2450.jpg";
import cs1410 from "./assets/cs1410.png";
import cs1400 from "./assets/cs1400.jpg";
import multipleDockerContainers from "./assets/docker-image.jpg";
import it344 from "./assets/it344.jpg";
import arduinoIoT from "./assets/arduinoIoT.png";
import cs260 from "./assets/webProgramming.png";
import is543 from "./assets/ios-development.png";
import recipes from "./assets/recipes3.png";
import resume from "./assets/Resume.pdf";
import automation from "./assets/automation.png";
import byuitcert from "./assets/LehiAlcantaraITCertification.pdf";
import googleanalyticsbeginner from "./assets/googleAnalyticsForBeginnersCourseCertificate.pdf";
import googleanalyticsadvanced from "./assets/advancedGoogleAnalyticsCourseCertificate.pdf";

let darkModeSwitch = true;
let darkMode = false;

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Lehi";
let lastName = "Alcantara";
let title = "Senior Software Engineer";
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
    link: "https://docs.google.com/document/d/11CkAcIsgB_CsAl3MeOWHkGfEtwMkPRzk8thyB4OraBo/edit?usp=sharing",
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
    imageUrl: cs260,
    title: "Full-Stack Web Application",
    tech: "Node.js, Express, React, MongoDB, HTML, CSS, Javascript, API Rest Service, WebSocket, Vite.",
    description: "A collection of full-stack technologies to create/Edit/Delete/Update a personal or shared Quiz Application addressing real user workflows by implementing REST APIs, responsive frontends, and persistent storage. Delivered production-like patterns (auth, validation, testing) so teams can iterate safely.",
    githubLink: "https://github.com/ylehilds/startup",
    demo: "http://129.153.82.90:8080/"
  },
  {
    imageUrl: is543,
    title: "iOS Mobile Apps Development",
      tech: "Swift, UIKit/SwiftUI, SwiftData, Foundation, AVFoundation, MapKit, MultiPicker, Xcode.",
    description: "Built modular iOS apps for interactive learning and task management with offline support. Implemented local persistence and clean architecture to ensure maintainability and smooth UX. Demonstrates professional iOS patterns and app lifecycle handling.",
      githubLink: "https://github.com/ylehilds/IS543-Mobile-Platform-Development"
  },
  {
    imageUrl: recipes,
    title: "iOS Recipe Management App",
      tech: "Swift,SwiftUI, Foundation, SwiftData, MarkdownUI, Xcode.",
    description: "Solved the need for personal recipe organization with a searchable, supporting categorization.  Implemented a catalog of recipes allowing user to view/add/remove/edit recipes/categories and responsive UI to support mobile usage with layout responding according to screen space (iPhone & Ipad). Shows MVVM data modeling and user flows.",
      githubLink: "https://github.com/ylehilds/Recipes"
  },
  {
    imageUrl: iot,
    title: "Systems Engineering",
    tech: "Arduino/ESP8266, Raspberry Pi, MQTT, Python, Highcharts.js, NodeJS, AWS Lambda, Slackbot, MQTT, Shell Scripting.",
    description: "In a series of seven IoT Systems Engineering projects, I progressively designed and implemented a small-scale IoT system using Raspberry Pi and Arduino-based microcontrollers. Started with a WiFi-controlled LED stoplight server. Then re-implemented this on the Wemos D1 Mini (ESP8266) to optimize hardware efficiency. Ten added a UC-SR04 ultrasonic sensor to measure distance and send GET requests to remotely control the lights through a REST protocol. Then replaced direct control with an event-bus architecture using topic-based messaging for coordination of multiple actuators. Then used relays and created a user interface to control it. Across the projects, I applied state-machine modeling, flowcharts, RESTful communication, and event-driven design—demonstrating embedded systems development, system scalability, and robust IoT architecture design.",
      githubLink: "https://ylehilds.github.io/portfolioOG/IoTSystemsEngineering/labs/main/"
  },
  // {
  //   imageUrl: forensics,
  //   title: "IT 566",
  //   description: "Digital Forensics",
  //   link: "https://ylehilds.github.io/portfolioOG/forensics"
  // },
  {
    imageUrl: distributedMonitoringSystems,
    title: "Data Engineering ETL Pipelines & Distributed Monitoring Systems",
    tech: "Python, Shell, Dockerfile, CockroachDB adapters.",
    description: "Built ETL pipelines that ingest, clean, validate, and transform raw data into analytics-ready datasets. A modular, Python-first toolkit for monitoring distributed infrastructure. The repo is organized into collectors and scrapers for data ingestion, storage adapters, and small utilities for health checks and security auditing. It includes example checks (e.g., SSH availability and login monitoring), CockroachDB, supporting shell scripts, and a Dockerfile for containerized workflows.",
      githubLink: "https://github.com/ylehilds/distributed-monitoring-systems"
  },
  {
    imageUrl: cyberPhisicalSystems,
    title: "IoT & Cyber-Physical Systems",
    tech: "Arduino/ESP32, Raspberry Pi, MQTT, Python, Highcharts.js",
    description: "A “smart scale” prototype where the system integrates physical hardware and software to measure weight and implements a reward system that triggers when users achieve specified goals (like hitting their target weight). Built an end-to-end IoT prototype connecting sensors, edge devices, and cloud dashboards; included MQTT pipelines and alerting. Demonstrated telemetry reliability and remote observability for field devices. Shows embedded-to-cloud engineering.",
      githubLink: "https://github.com/ylehilds/smart-scale",
      demo: "http://it-class-project-smart-scale.s3-website-us-west-2.amazonaws.com/"
  },
  // {
  //   imageUrl: arduinoIoT,
  //   title: "Arduinio IoT",
  //   description: "Cloud Management",
  //   link: "https://github.com/ylehilds/ArduinoIoT"
  // },
  // {
  //   imageUrl: cyberSecurity,
  //   title: "IT 567",
  //   description: "Cyber Security & Pen Test",
  //   link: "https://github.com/ylehilds/PortScanner"
  // },
  // {
  //   imageUrl: NETLab,
  //   title: "NET Lab",
  //   description: "Analyzing Mongolia Air Quality Sensors",
  //   link: "https://ylehilds.github.io/analyzing-mongolia/"
  // },
  // {
  //   imageUrl: softwareStartup,
  //   title: "IS 590R",
  //   description: "Managing a Software Startup",
  //   link: "https://ylehilds.github.io/homework-first/"
  // },
  // {
  //   imageUrl: homeworkFirst,
  //   title: "IS 590R",
  //   description: "Prototype Homework First",
  //   link: "https://www.figma.com/proto/0w3lRmFOZbzDypJ5yepasj/Prototyping-in-Figma?node-id=0%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A2"
  // },
    {
        imageUrl: multipleDockerContainers,
        title: "Dockerized Multi-Service Stack (DevOps)",
        tech: "Docker, Docker Compose, Oracle Cloud Infrastructure, Node.js, Fastify.js, React,  JavaScript, CSS, Shell scripting, Fastify-CLI, npm scripts for dev/test/prod workflows.",
        description: "Designed and deployed a full-stack quiz platform using Docker Compose to orchestrate a React-based frontend, Fastify-based API server, and Node.js backend. This project showcases my skills in containerization, microservice architecture, and modern JavaScript development. I streamlined the workflow with dev/hot-reload scripts and made a live demo accessible across multiple service endpoints.",
        githubLink: "https://github.com/ylehilds/multiple-docker-containers",
        demo: "http://129.153.82.90:8080/"
    },
    {
        imageUrl: automation,
        title: "DevOps Automation Scripts & Workflows",
        tech: "Python, Bash/Shell, Raspberry Pi, Cron, Arduino/ESP8266, Highcharts.js.",
        description: "Built a modular toolkit combining Python and shell scripts to automate environmental monitoring and control. Includes sensor integration, Raspberry Pi helper tools, scheduled task execution via cron, and real-time data visualization using a hosted temperature chart. Highlights robust instrumentation and system-level automation. Search engines indexing scripts, sending emails for different tasks.",
        githubLink: "https://github.com/ylehilds/home_automation",
        demo: "http://iot-temperature-project.s3-website-us-west-2.amazonaws.com/highchartSimple.html"
    },
    {
        imageUrl: technicalInterviewPreparation,
        title: "Technical Interview Problem Library",
        tech: "JavaScript: Core language for solutions and testing.",
        description: "Curated a robust repository of algorithm and data structure solutions in JavaScript to sharpen coding interview readiness. Organized problem sets by topic—from recursion and sorting to trees, hash tables, and linked lists—paired with in-depth examples and assignments. Demonstrates disciplined skill progression, with clear modular organization and language-agnostic implementation strategies.",
        githubLink: "https://github.com/ylehilds/TechnicalInterviewCourse"
    },
    {
        imageUrl: todolist,
        title: "Task Management Android App",
        tech: "Java, Android Platform / SDK – leveraging core UI components (ListView, adapters, views) and local file storage mechanisms.",
        description: "Built a performant, minimalist to-do list app entirely in Java for Android. Features include JSON-based storage for persistent task management, intuitive UI using standard ListView and CheckBox components, and no required user permissions—prioritizing both privacy and efficiency.",
        githubLink: "https://github.com/ylehilds/ToDoList"
    },
    {
        imageUrl: info2450,
        title: "Web Application Design",
        tech: "HTML/CSS/JS/ASP.NET",
        description: "Developed a responsive, minimalistic web application using a classic server-driven approach. Implemented primary content structure in HTML, enhanced styling with CSS, and embedded dynamic logic with ASP.NET for backend functionality. The project represents clean separation of concerns between presentation and logic.",
        githubLink: "https://github.com/ylehilds/INFO2450"
    },
    {
        imageUrl: it210,
        title: "Dynamic Web Project Demonstrating Full-Stack Fluency",
        tech: "HTML/CSS/JS/PHP/Java/MySQL",
        description: "A compact yet robust example of web application skills, this project integrates several programming languages to deliver a dynamic, full-stack experience. Core logic is implemented in PHP, augmented with JavaScript for client-side interactions, and polished with HTML and CSS. Supplementary Java and Perl components reflect versatility in handling scripting tasks or backend utilities.",
        githubLink: "https://github.com/ylehilds/it210"
    },
    {
        imageUrl: cs235,
        title: "Data Structures & Logic Implementations",
        tech: "Java SE (primary language for all implementations), JUnit (for systematic unit testing), Basic benchmark utilities and performance checks, Standard Java build tools (IDE-based projects, compatible with IntelliJ/Eclipse)",
        description: "This repository contains clean, from-scratch implementations of core data structures and algorithmic solutions. It demonstrates understanding of arrays, linked lists, stacks, queues, heaps, binary search trees, hash tables, and graph structures. Alongside the implementations, there are logic-based exercises that apply these structures to solve problems, with unit tests ensuring correctness and reliability. The work highlights algorithmic thinking, performance considerations, and software design best practices.",
        githubLink: "https://github.com/ylehilds/CS235"
    },
    {
        imageUrl: cs236,
        title: "Discrete Structures & Algorithms",
        tech: "Java (standard library only: java.util, java.io), Javadoc.",
        description: "Built a full Datalog pipeline from scratch: a hand-written lexer that tokenizes input, a recursive-descent parser that constructs a rich AST (schemes, facts, rules, queries, domain), an in-memory relational database implementing core relational algebra (selection, projection, rename, join, union), and an interpreter that evaluates rules to a fixpoint and answers queries over derived relations. Delivered complete Javadoc and internal docs; no third-party dependencies.",
        githubLink: "https://github.com/ylehilds/CS236"
    },
    {
        imageUrl: cs1410,
        title: "Object-Oriented Programming Projects",
        tech: "C++",
        description: "Built a structured C++ codebase with three tracks—Projects, Labs, and personal Exercises—to master core language and problem-solving skills. Projects consolidate concepts into small console applications with file I/O and class design; Labs provide focused drills on loops, arrays/strings, functions, pointers, and basic STL; and My Own Exercises capture self-driven practice and refactoring. Primary tech is C++ (STL) with some HTML for notes/demos.",
        githubLink: "https://github.com/ylehilds/CNS1410"
    },
    {
        imageUrl: cs1400,
        title: "Programming Foundations Projects",
        tech: "C++",
        description: "Built a comprehensive C++ practice repo split into focused Labs and larger Dev exercises. Labs drill one concept at a time—console I/O, control flow, functions, arrays/strings, pointers/references, basic classes, and STL—while Dev tasks combine multiple ideas into small, maintainable programs with headers/implementations, simple data models, and file I/O. The work emphasizes clean code, iterative improvement, and confidence with the C++ standard library.",
        githubLink: "https://github.com/ylehilds/CNS1400"
    },
    {
      imageUrl: WirelessNetworks,
      title: "Wireless & Embedded Systems – Bluetooth Audio Streaming with Control",
      tech: "ESP32 Firmware — C++ (Arduino framework) for embedded microcontroller code. Host Side Script — Python 3 with bluetooth (via PyBluez) for Bluetooth communication. Standard libraries for file I/O and .wav handling — including the wave module. Platform — ESP32 hardware (embedded device), paired with a Windows host environment for the Python client.",
      description: "Engineered an end-to-end audio streaming prototype using an ESP32 and Python. Created embedded firmware (Arduino C++) running on an ESP32 to receive Bluetooth control commands (p, n, q) and orchestrate audio playback. Built a Python 3 client using PyBluez to connect over Bluetooth, stream .wav files from a folder, and send real-time controls. Complemented the system with design documentation, hardware schematics, and working media files for clear demonstration and reproducibility.",
        githubLink: "https://github.com/ylehilds/wireless-networking-project"
    },
  {
    imageUrl: socialMediaAnalytics,
    title: "Web & Social Media Analytics Dashboard - Twitter Streaming & Data Archival Toolkit",
    tech: "Python — API streaming, data ingestion, MongoDB interaction, Jupyter Notebooks — data exploration and visualization, MongoDB — NoSQL storage backend, Shell (bash) — data extraction and scripting, Dependencies managed via requirements.txt",
    description: "Developed a modular Python- and notebook-based system to stream data (e.g., from Twitter), authenticate through auth.py, ingest live data with streaming scripts (stream.py and variants), store results in MongoDB (mongo_db.py), and extract stored data using shell utilities (extractMongoData.sh). The repository pairs clean Jupyter-powered analytics with a flexible, repeatable pipeline.",
      githubLink: "https://github.com/ylehilds/it670-project-streaming",
      demo: "https://github.com/ylehilds/it670-project-streaming/blob/master/jupyter/it670-project.ipynb"
  }
  // {
  //   imageUrl: nodeJS,
  //   title: "NodeJS",
  //   description: "Certification Preparation",
  //   link: "https://github.com/ylehilds/NODE.JS-APPLICATION-DEVELOPMENT-LFW211"
  // },
  // {
  //   imageUrl: it347,
  //   title: "IT 347",
  //   description: "Computer Networks",
  //   link: "https://github.com/ylehilds/IT347"
  // },
  // {
  //   imageUrl: it344,
  //   title: "IT 344",
  //   description: "Operating Systems",
  //   link: "https://github.com/ylehilds/IT344"
  // },
  //
  // {
  //   imageUrl: it327,
  //   title: "IT 327",
  //   description: "Digital Communications",
  //   link: "https://github.com/ylehilds/IT327"
  // },
  // {
  //   imageUrl: it252,
  //   title: "IT 252",
  //   description: "Computer Architecture & Organization",
  //   link: "https://github.com/ylehilds/IT252"
  // },
  // {
  //   imageUrl: cs100,
  //   title: "CS 100",
  //   description: "Fundamentals of Computing",
  //   link: "https://github.com/ylehilds/CS100"
  // },
  //
  //
  // {
  //   imageUrl: eng316,
  //   title: "ENG 316",
  //   description: "Technical Communication",
  //   link: "https://github.com/ylehilds/ENG316"
  // },
  //
  // {
  //   imageUrl: cs2810,
  //   title: "CS 2810",
  //   description: "Computer Organization & Architecture",
  //   link: "https://github.com/ylehilds/CNS2810"
  // },

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
