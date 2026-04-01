# Portfolio

My personal portfolio site, built with React, Vite, and deployed on Vercel.

## Features

- **Themeable** — I set up all colors, fonts, and spacing as CSS variables so I can swap the entire palette from one file.
- **Responsive** — Works across desktop, tablet, and mobile with a collapsible hamburger nav for smaller screens.
- **Project timeline** — A vertical timeline that auto-sorts newest-first by date. Each card supports an optional affiliation, image gallery, and external link. Clicking an image opens a fullscreen lightbox with arrow navigation.
- **Experience cards** — Auto-sorted with my ongoing roles pinned to the top and highlighted with an accent tint.
- **Hobby grid** — An Instagram-style square grid. Clicking a post opens a modal with a horizontal media carousel (images and embedded YouTube videos) and a caption sidebar.
- **MonkeyType integration** — A slide-out tab on my hobbies page that displays my typing stats (30s personal best, total time typing, last test date) pulled from the MonkeyType API.
- **Serverless API proxy** — MonkeyType requests go through a Vercel serverless function for security.
- **Contact page** — Mailto link for my email plus GitHub and LinkedIn buttons with their platform icons.

## Tech Stack

React · Vite · React Router · React Icons · Vercel Serverless Functions