/*
  ============================================================
  HOW TO ADD A NEW PROJECT
  ============================================================
  1. Import your images at the top of this file:
       import myImage from '../assets/images/projects/my-image.png';

  2. Add a new object to the array below. Required fields:
       - id          : unique string
       - name        : project title
       - date        : 'YYYY-MM-DD' string (used for sorting, not displayed)
       - description : see formats below

     Optional fields:
       - affiliation : e.g. 'University of X' — omit or set to '' to hide
       - skills      : array of skill/tech strings shown as chips, e.g. ['React', 'Python']
       - images      : array of imported image paths (scrollable strip below description)
       - link        : URL string to project repo/demo (shows a clickable icon)

  3. The timeline auto-sorts newest-first by date.
  ============================================================

  DESCRIPTION FORMATS
  ============================================================
  Plain string (single paragraph):
    description: 'Some text here.',

  Array of blocks (multiple paragraphs, links, or videos):
    description: [
      'First paragraph as a plain string.',

      // Paragraph with inline hyperlinks — mix strings and link objects:
      ['Text before link, ', { type: 'link', text: 'link label', url: 'https://...' }, ', text after.'],

      // YouTube embed (use any youtube.com/watch?v= or youtu.be/ URL):
      { type: 'video', url: 'https://www.youtube.com/watch?v=VIDEO_ID' },

      'Another paragraph after the video.',
    ],
  ============================================================
*/

// Example image imports:
// import projectScreenshot from '../assets/images/projects/screenshot.png';

// {
//   id: 'example-project-1',
//   name: 'Sample Research Project',
//   date: '2025-08-15',
//   affiliation: 'Georgia Tech',
//   description: [
//     'First paragraph of description.',
//     ['Built with ', { type: 'link', text: 'React', url: 'https://react.dev' }, ' and friends.'],
//     { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
//   ],
//   images: [],
//   link: '',
// },


// basil imports
import basil1 from '../assets/images/projects/basil/basil1.png';
import basil2 from '../assets/images/projects/basil/basil2.jpg';
import basil3 from '../assets/images/projects/basil/basil3.jpg';
import basil4 from '../assets/images/projects/basil/basil4.jpg';
import basil5 from '../assets/images/projects/basil/basil5.jpg';

import hc1 from '../assets/images/projects/honeycomb/hc1.png';
import hc2 from '../assets/images/projects/honeycomb/hc2.png';
import hc3 from '../assets/images/projects/honeycomb/hc3.png';
import hc4 from '../assets/images/projects/honeycomb/hc4.png';

const projects = [
  // {
  //   id: 'doublelove', 
  //   name: 'Double Love',
  //   date: '2026-06-01',
  //   affiliation: 'Personal Project',
  //   description: [
  //     'Double Love is a cooking companion mobile focused, web-based application intended to support users while cooking for both themselves and others, discovering and developing new recipies, and sharing recipes with friends and family. Its development is informed by an in-depth user research study, inspired by both coursework projects and industry case studies. I'm currently in the research phase of this project.', 
  //     // ['To see a presentation of my pre-development findings and design requirements ', { type: 'link', text: 'here', url: 'https://www.google.com' }, '.']
  //   ],
  //   images: [],
  //   link: '',
  //   skills: [],
  // },
  {
    id: 'honeycomb',
    name: 'HoneyComb Financial Wellness Case Study',
    date: '2026-05-01',
    affiliation: 'User Interface Design',
    description: ['HoneyComb is an exploration into the financial wellness of college students, including data collection, product requirements, and iterative prototyping. From our research, we found that college students needed a way to grow positive financial habits in a sustainable and efficient way. Our final prototype solved this by centralizing financial information, gamifying savings, and providing users with information at a glance.', ['See our full report by clicking on the title above and visit our Figma prototype ' , {type: 'link', text: 'here', url: 'https://www.figma.com/proto/abc123/honeycomb?node-id=1-2&scaling=min-zoom&page-id=0%3A1'}, '.']],
    images: [hc1, hc2, hc3, hc4],
    link: 'https://docs.google.com/document/d/1vbO4WPJ2cYgun5ygasUA_ythOCPdiw9nhhORwLOXb24/edit?usp=sharing',
    skills: ['Survey Design', 'Interview Protocol Design', 'Quantitative Data Analysis', 'Qualitative Data Analysis', 'Affinity Diagramming', 'Hierarchical Task Analysis', 'User Persona Development', 'Design Critiques', 'Functional and Nonfunctional Requirement Development', 'Rapid Low-Fidelity Prototyping', 'Iterative High-Fidelity Prototyping', 'Heuristic Evaluations', 'Usability Testing'],
  },
  {
    id: 'heartharvest',
    name: 'Heart Harvest Video Game',
    date: '2026-05-01',
    affiliation: 'Video Game Design',
    description: 'Heart Harvest is a video game meant to explore the different aspects of game design within Unity. In the game, you play as a farmer, buried in debt to a loan shark and tending to a farm to eventually pay them off. Build relationships with the various NPCs to not only make your experience more lively, but to help expand your farm! We each contributed to various portions of the game, but I contributed the most to market interactions (buying/selling items, purchasing upgrades), map design, and consistent on-theme UI.',
    images: [],
    link: 'https://github.com/yt1105/heart_harvest',
    skills: ['Unity', 'C#', 'Game Design', 'Playtesting', 'Agile/Scrum Workflow', 'UI Design', 'Level Design'],
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    date: '2026-03-30',
    affiliation: 'Personal Project',
    description:
      'This website is a responsive personal portfolio built with React, Vite, and React Router. Beyond simply displaying information, I implemented a timeline layout, hobby grid, and MonkeyTypeAPI integration.',
    images: [],
    skills:['ReactJS', 'CSS', 'JavaScript', 'TypeScript'],
    link: 'https://github.com/mochi-atto/portfolio',
  },
  {
    id: 'aoa-docparser',
    name: 'Archdiocese of Atlanta (AoA) Facility Management System',
    date: '2026-04-21',
    affiliation: 'WELab Vertically Integrated Project (VIP)',
    description: [
      'This facility management software is being developed for the Archdiocese of Atlanta as an alternative to other mainstream solutions. Our solution is intended to create a tailored, low-tech platform that allows volunteers and staff to see important information and intelligent insights at-a-glance.',
      'To ensure that confidential data stays secure, I implemented Auth0 to register and authenticate users and limited our AI-insight features to utility bills, ensuring confidential building valuations stay secure. To minimize the average user\’s necessary interaction with data entry, I used TesseractOCR and pdfplumber to parse through the documents and Open AI API to synthesize insights. Further, our team designed a simplified UI that focused on minimizing cognitive load and addressing unfamiliarity with automated systems. However, we took care to ensure that simplicity didn\’t hinder usability, as inline editing and revision of extracted data allows more advanced users to correct any possible errors.',
      ['View our Spring 2026 end-of-semester presentation ', { type: 'link', text: 'here', url: 'https://docs.google.com/presentation/d/1ahRQk-RjTDQqIK5vCCQmMtt0pGwBLbgTEuUD92hlxOk/edit?usp=sharing' },'.'],

      // 'Below is a demo of our current prototype\'s features.',

      // { type: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    
    ],
    images: [],
    skills:['OpenAI API', 'TesseractOCR', 'pdfplumber', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'PDF.js', 'Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'Docker', 'Auth0'],
    link: 'https://github.com/mochi-atto/aoa-docparse',
  },
  {
    id: 'pia',
    name: 'Lua Lega Privacy Impact Assessment',
    date: '2025-10-01',
    affiliation: 'Privacy, Technology, Policy, and Law',
    description: [
      [{type: 'link', text: 'Lua Legal', url: 'https://www.lualegal.ai/'}, ' is an AI-powered notetaker intended for lawyers. As a part of my Privacy, Technology, Policy, and Law course, my team and I created a privacy impact assessment (PIA) analyzing possible privacy risks related to collecting, processing, storing, and deleting personally identifiable information across Lua Legal\’s services. We analyzed and provided recommendations for their privacy policies, existing practices, data management, and more.']
    ],
    images: [],
    link: 'https://docs.google.com/document/d/1KtDIofNw-SwkjJsO9bfkc1t3eWLlidmxiQYqzoKem8Y/edit?usp=sharing',
    skills: ['Formal Report Writing', 'Privacy Risk Analysis', 'Data Management Analysis', 'Policy Analysis', 'Legal Research'],
  },
  {
    id: 'cfpbreport',
    name: 'CFPB Required Rulemaking on Personal Financial Data Rights Analysis',
    date: '2025-12-01',
    affiliation: 'Science, Technology, and Regulation',
    description: [
      ['The CFPB\'s ', {type: 'link', text: '2025 Required Rulemaking on Personal Financial Data Rights', url: 'https://www.federalregister.gov/documents/2024/11/18/2024-25079/required-rulemaking-on-personal-financial-data-rights'}, ' was the subject of my case study in my Science, Technology, and Regulation course. Throughout the semester, I wrote a series of short reports breaking down the final rule, analyzing its justification/guiding statues, historical and current legislative actions, and cost-benefit analysis. Since I was concurrently taking this course with my Privacy, Technology, Policy, and Law course, I made sure to draw insights from our lessons into my reports.']
    ],
    images: [],
    link: '',
    skills: ['Formal Report Writing', 'Regulatory Analysis', 'Policy Analysis' , 'Cost-Benefit Analysis'],
  },
  {
    id: 'evac-plus',
    name: 'EVAC+',
    date: '2025-08-01',
    affiliation: 'WELab Vertically Integrated Project (VIP)',
    description:
      'EVAC+ is an app that helps at-risk individuals evacuate and prepare for disaster scenarios, considering an individual’s permanent and temporary disability, financial state, required utility access, and more. I worked to develop user personas and intake forms for this application.',
    images: [],
    link: '',
    skills: ['Survey Design', 'User Persona Development'],
  },
  {
    id: 'basil',
    name: 'basil',
    date: '2025-09-01',
    affiliation: 'HackGT',
    description:
      'basil is an intelligent recipe generation app that helps you make the most of the food in your fridge, generating recipes that prioritize ingredients with sooner expiration dates to reduce food waste. It was created in just 36 hours as a competitor for HackGT. I utilized React.js to create a clean and intuitive frontend as well as Amazon Cognito for authentication. This connected to a Flask backend, which managed an extensive USDA SQLite database that allowed users to quickly add ingredients to their fridge. Finally, MosaicAI provided a platform for basil to use OpenAI LLMs to generate its recipes.',
    images: [basil1, basil2, basil3, basil4, basil5],
    link: 'https://github.com/mochi-atto/2025_hackgt',
    skills:['ReactJS', 'AWS Cognito', 'OpenAI API', 'SQLite', 'Flask', 'JavaScript', 'MosaicAI', 'CSS'],
  },
  {
    id: 'buzzlink',
    name: 'BuzzLink',
    date: '2024-09-01',
    affiliation: 'WebDev @ GT',
    description:
      'Buzz Link is a website created to connect students within the Georgia Tech community, utilizing peer-to-peer video and audio calling. I wireframed and implemented a clean and minimalistic React-based frontend, reflecting components from other popular communication platforms (i.e. Zoom, Discord). Throughout my design process, I focused on supporting user familiarity and intuitive interaction. On the backend, I utilized Auth0 and Firebase to handle user authentication that verified users and secured chatrooms.',
    images: [],
    link: '',
    skills:['Auth0', 'Firebase', 'React', 'JavaScript', 'CSS', 'Figma'],
  },

];

// Sort newest first
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

export default projects;