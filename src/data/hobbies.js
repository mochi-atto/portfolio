/*
  ============================================================
  HOW TO ADD A NEW HOBBY POST
  ============================================================
  1. Import your cover image:
       import myCover from '../assets/images/hobbies/my-cover.jpg';

  2. Add a new object to the `posts` array below.

     Required fields:
       - id      : unique string
       - cover   : imported image (used in the grid thumbnail)
       - caption : text shown in the detail modal

     Optional fields:
       - media   : array of media objects for the modal gallery.
                   Each item is one of:
                     { type: 'image', src: importedImage }
                     { type: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID' }

  YOUTUBE VIDEOS:
    Use the embed URL format: https://www.youtube.com/embed/VIDEO_ID
    (not the regular watch URL)

  3. Posts display in the order listed here (newest first recommended).
  ============================================================
*/

// Example imports:
// import hikeCover from '../assets/images/hobbies/hike-cover.jpg';
// import hikePhoto1 from '../assets/images/hobbies/hike-1.jpg';

//   {
//     id: 'example-post-1',
//     cover: null, // Replace with an imported image
//     caption:
//       'This is an example hobby post. Replace the cover image and caption with your own content!',
//     media: [
//       // { type: 'image', src: hikePhoto1 },
//       // { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
//     ],
//   },

// kb1 imports
import kb1_1 from '../assets/images/hobbies/kb1/kb1_1.jpg';
import kb1_2 from '../assets/images/hobbies/kb1/kb1_2.jpg';

// kb2 imports
import kb2_1 from '../assets/images/hobbies/kb2/kb2_1.jpg';

// kb3 imports
import kb3_1 from '../assets/images/hobbies/kb3/kb3_1.jpg';
import kb3_2 from '../assets/images/hobbies/kb3/kb3_2.jpg';

// kb4 imports
import kb4_1 from '../assets/images/hobbies/kb4/kb4_1.jpg';
import kb4_2 from '../assets/images/hobbies/kb4/kb4_2.jpg';
import kb4_3 from '../assets/images/hobbies/kb4/kb4_3.jpg';

// kb5 imports
import kb5_1 from '../assets/images/hobbies/kb5/kb5_1.jpg';

// kb6 imports
import kb6_1 from '../assets/images/hobbies/kb6/kb6_1.jpg';

// kb7 imports
import kb7_1 from '../assets/images/hobbies/kb7/kb7_1.jpg';
import kb7_2 from '../assets/images/hobbies/kb7/kb7_2.jpg';

// bh1 imports
import bh1_1 from '../assets/images/hobbies/bh1/bh1_1.jpg';
import bh1_2 from '../assets/images/hobbies/bh1/bh1_2.jpg';
import bh1_3 from '../assets/images/hobbies/bh1/bh1_3.jpg';
import bh1_4 from '../assets/images/hobbies/bh1/bh1_4.jpg';
import bh1_5 from '../assets/images/hobbies/bh1/bh1_5.jpg';

const posts = [
  {
    id: 'bh1',
    cover: bh1_1, 
    caption:
      'Our first performance(s) as Blue Hour! I would never have imagined myself singing in a band, but I\'m so glad that I decided to give it a try. I love you guys so much :\'\).\nThank you to our friend Henry for the photos!',
    media: [
      {type: 'images', src: bh1_1},
      {type: 'images', src: bh1_2},
      {type: 'images', src: bh1_3},
      {type: 'images', src: bh1_4},
      {type: 'images', src: bh1_5},
    ],
  },
  {
    id: 'kb7',
    cover: kb7_1, 
    caption:
      'Late grad/birthday present for myself :D Alice layout is a lot of fun, only took a little bit of time to adjust. \n\nSpecs: \nCIDOO ABM066\nOsume Matcha Keycaps\nAkko V3 Cream Black Pro Switches\nDurock Plate Mounted Stabilizers',
    media: [
      {type: 'images', src: kb7_1},
      {type: 'images', src: kb7_2},
    ],
  },
  {
    id: 'kb6',
    cover: kb6_1,
    caption:
      'Late Christmas present for my brother! One of the first premium boards I\'ve built. I loved the colors on this one. \n\nSpecs: \nQwertyKeys Neo98\nOsume Kanagawa Keycaps\nAkko V3 Cream Black Pro Switches\nOwlabs Screw-In Stabilizers',
    media: [
      {type: 'images', src: kb6_1},
    ],
  },
  {
    id: 'kb5',
    cover: kb5_1, // Replace with an imported image
    caption:
      'First board at college! Shoutout MicroCenter this kit was on sale for 50% off I think.  \n\nSpecs: \nKBDCraft Kit Adam\nStock Keycaps, Switches, Stabilizers',
    media: [
      {type: 'image', src: kb5_1},
    ],
  },
  {
    id: 'kb4',
    cover: kb4_1, 
    caption:
      'Graduation gift for my cousin! Aluminum, again, is soo amazing I love it. \n\nSpecs: \nGalaxy80\nWhite Shine-through Pudding Keycaps (Hangul sublegends)\nAkko CS Jelly Black Switches (Handlubed)\nDurock Plate Mounted Stabilizers',
    media: [
      {type: 'image', src: kb4_1},
      {type: 'image', src: kb4_2},
      {type: 'image', src: kb4_3},
    ],
  },
  {
    id: 'kb3',
    cover: kb3_1,
    caption:
      'Aluminum boards are so cool! The material really does feel more premium. More of a cutesy color palette this time :\). I don\'t really like the switches on this one as much though, a bit too light for my preference. \n\nSpecs: \nTint60 Pink\nTeacaps Parfait\nAjazz Peach Switches\nKit-provided screw-in stabilizers',
    media: [
      {type: 'image', src: kb3_1},
      {type: 'image', src: kb3_2},
    ],
  },
  {
    id: 'kb2',
    cover: kb2_1,
    caption:
      'My first commission board! A bit of a rush order, so I didn\'t take many photos at the time\n\nSpecs: \nZuoya GMK67\nGMK BoW Keycaps Clones\nAkko CS Jelly Black Switches (Handlubed)\nDurock Plate Mounted Stabilizers',
    media: [
      {type: 'image', src: kb2_1},
    ],
  },
  {
    id: 'kb1',
    cover: kb1_1,
    caption: 
      'The first custom keyboard I ever made! I wish I had more photos of it when I was in the process of modding and building. I\'ve come so far since then :\'\) \n\nSpecs: \nCIY Tester 68\nGMK Stargaze Keycaps Clones\nGateron Black Switches (Handlubed)\nCherryMX Black Switch (Handlubed, Spacebar)\nDurock Plate Mounted Stabilizers\n\nModifications: \nTape mod, Penny mod, Bandaid mod, Foam mod',
    media: [
      {type: 'image', src: kb1_1},
      {type: 'image', src: kb1_2},
    ],
  },
];

export default posts;