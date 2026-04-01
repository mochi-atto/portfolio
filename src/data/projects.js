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
       - description : short paragraph

     Optional fields:
       - affiliation : e.g. 'University of X' — omit or set to '' to hide
       - images      : array of imported image paths
       - link        : URL string to project repo/demo (shows a clickable icon)

  3. The timeline auto-sorts newest-first by date.
  ============================================================
*/

// Example image imports:
// import projectScreenshot from '../assets/images/projects/screenshot.png';

// {
//   id: 'example-project-1',
//   name: 'Sample Research Project',
//   date: '2025-08-15',
//   affiliation: 'Georgia Tech',
//   description:
//     'Placeholder description for a research project. Replace this with your actual content.',
//   images: [],
//   link: '',
// },


// basil imports
import basil1 from '../assets/images/projects/basil/basil1.png';
import basil2 from '../assets/images/projects/basil/basil2.jpg';
import basil3 from '../assets/images/projects/basil/basil3.jpg';
import basil4 from '../assets/images/projects/basil/basil4.jpg';
import basil5 from '../assets/images/projects/basil/basil5.jpg';

// aoa imports
import aoa1 from '../assets/images/projects/aoa/aoa1.png';
import aoa2 from '../assets/images/projects/aoa/aoa2.png';
import aoa3 from '../assets/images/projects/aoa/aoa3.png';
import aoa4 from '../assets/images/projects/aoa/aoa4.png';
import aoa5 from '../assets/images/projects/aoa/aoa5.png';
import aoa6 from '../assets/images/projects/aoa/aoa6.png';
import aoa7 from '../assets/images/projects/aoa/aoa7.png';


const projects = [
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    date: '2026-03-30',
    affiliation: '',
    description:
      'This website is a responsive personal portfolio built with React, Vite, and React Router. Beyond simply displaying information, I implemented a timeline layout, hobby grid, and MonkeyTypeAPI integration.',
    images: [],
    link: '',
  },
  {
    id: 'aoa-docparser',
    name: 'Archdiocese of Atlanta (AoA) Facility Managment System',
    date: '2025-08-15',
    affiliation: 'WELab Vertically Integrated Project (VIP)',
    description:
      'This facility management software is intended for the Archdiocese of Atlanta and organizes and draws insight from utility bills and appraisal documents for multiple parishes. I used TesseractOCR and pdfplumber to handle the parsing of the documents securely and worked with teammates to develop and implement an effective user interface.',
    images: [aoa1, aoa2, aoa3, aoa4, aoa5, aoa6, aoa7],
    link: '',
  },
  {
    id: 'basil',
    name: 'basil',
    date: '2025-09-01',
    affiliation: 'HackGT',
    description:
      'basil is an intelligent recipe generation app that helps you make the most of the food in your fridge, prioritizing ingredients with sooner expiration dates to reduce food waste. It was created in just 36 hours as a part of HackGT. For this project, I utilized React.js to design and clean and intuitive frontend and Amazon Cognito for authentication. This connected with a Flask backend, an extensive USDA SQLite database to allow users to add ingredients to their fridge, and MosaicAI, which provided a platform for the app to utilize OpenAI LLMs.',
    images: [basil1, basil2, basil3, basil4, basil5],
    link: 'https://github.com/mochi-atto/2025_hackgt',
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
  },
  {
    id: 'buzzlink',
    name: 'BuzzLink',
    date: '2024-09-01',
    affiliation: 'WebDev @ GT',
    description:
      'BuzzLink is a website created to connect students within the Georgia Tech community utilizing peer-to-peer video and audio calling. I created and implemented an effective design, using the React-based frontend, that reflected components from other popular communication platforms like Zoom and Discord, working with user familiarity and intuitive components. I also implemented user authentication using Auth0 and Firebase to allow users to login and join chatrooms.',
    images: [],
    link: '',
  },

];

// Sort newest first
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

export default projects;