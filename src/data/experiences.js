/*
  ============================================================
  HOW TO ADD A NEW EXPERIENCE
  ============================================================
  1. Add a new object to the array below.

     Required fields:
       - id          : unique string
       - title       : your position/role
       - org         : company or organization name
       - startDate   : 'YYYY-MM-DD' string (used for sorting)

     Optional fields:
       - endDate     : 'YYYY-MM-DD' string, or omit/set to null for present/ongoing
       - link        : URL string to company/org site (shows a clickable icon)
       - description : expandable details — same format as projects (see below)

  2. Experiences auto-sort newest-first by start date.
     Ongoing roles (no endDate) always appear at the top.
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

      // YouTube embed:
      { type: 'video', url: 'https://www.youtube.com/watch?v=VIDEO_ID' },
    ],
  ============================================================
*/

//   {
//     id: 'example-exp-1',
//     title: 'Research Assistant',
//     org: 'Georgia Tech',
//     startDate: '2024-08-15',
//     endDate: '2025-04-30',
//     link: '',
//     description: 'What I did here.',
//   },

const experiences = [
  {
    id: 'gtlibrary',
    title: 'Computing Support Technician',
    org: 'Georgia Tech Library',
    startDate: '2026-05-01',
    endDate: null,
    link:'https://library.gatech.edu/',
    description: 'As a Computing Support Technician for the GT Library, I assist with hardware/software maintenance across all departments. This includes routine maintenance of 100+ workstations, maintaining staff desktops/laptops or student rental laptops, and other troubleshooting. I also organized and managed incoming, outgoing, and existing inventory, including initializing enterprise Windows and macOS systems.',
  },
  {
    id: 'wellnesslab',
    title: 'Student Researcher',
    org: 'Wellness Technology Lab',
    startDate: '2026-01-01',
    endDate: null,
    link:'https://wtl.cc.gatech.edu/',
    description: 'As a student researcher for the Wellness Technology Lab, I\’ve been assisting with a qualitative analysis of social media data to examine the relationship between youth viewing police brutality videos and their awareness of broader systemic issues of race/racism in the United States. Utilizing template analysis, I use ATLAS.ti to synthesize themes in the form of apriori codes to our dataset of 600+ social media posts.',
  },
  {
    id: 'welab',
    title: 'Student Researcher',
    org: 'WELab Vertically Integrated Project (VIP)',
    startDate: '2025-08-01',
    endDate: null,
    link:'https://sites.gatech.edu/welab/',
    description: 'As a student researcher for WELab, I\’ve contributed to two major research focuses: EVAC+ and AoA Facility Management. For EVAC+, my team and I designed an intake survey and developed three user personas to base development user goals on. As a part of the AoA Project, I developed a series of prototypes that organize and draw insights from utility bills and appraisal documents for multiple parishes, displaying them on a simplified dashboard catered towards low-tech users. ',
  },
  {
    id: 'gtmk',
    title: 'Finance Officer',
    org: 'Mechanical Keyboards at GT',
    startDate: '2025-01-01',
    endDate: null,
    link:'https://www.instagram.com/gt.keyboards/',
    description:'I\’ve been a part of the mechanical keyboard hobby for years, so I was delighted to discover Georgia Tech\’s dedicated club! As the finance officer, I\’ve planned, organized, and advertised our monthly meetups for our 300+ in-person members and 900+ online community members. I\’ve also worked with our sponsors (KBDfans, Zeal, Mekibo, and Keebio) to host giveaways for our organization. Follow us on Instagram @gt.keyboards!',
  },
  {
    id: 'qsi',
    title: 'Intern',
    org: 'Q Solutions Inc.',
    startDate: '2018-08-01',
    endDate: '2023-11-01',
    link:'https://www.govcb.com/government-vendors/profile-SAM00000000001434187-q-solutions-inc-Tucker-GA.htm',
    description: 'At Q Solutions, I aided with the analysis of GIS capital improvement data for 150+ maps, utilizing query functions to enter/update manhole locations and properties. Further, I programmed Python functions to add insight and functionality to the existing data tables.',
  },
  

];

// Sort: ongoing first, then newest start date
experiences.sort((a, b) => {
  const aOngoing = !a.endDate;
  const bOngoing = !b.endDate;
  if (aOngoing && !bOngoing) return -1;
  if (!aOngoing && bOngoing) return 1;
  return new Date(b.startDate) - new Date(a.startDate);
});

export default experiences;