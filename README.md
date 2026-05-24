# Resume Showcase Portfolio

A modern personal portfolio built with React, TypeScript, and Vite. This project showcases a clean resume-style layout with a sidebar navigation, contact details, biography, experience history, technical skills, and featured projects.

## Overview

This portfolio is a responsive single-page React application designed to highlight professional experience, skills, and project work. The layout is split into two sections:

- **Left Sidebar**: personal name, tagline, quick navigation links, and social/profile icons.
- **Right Main Content**: contact information, biography, work experience, technical stacks, projects, and footnotes.

The content is data-driven and loaded from `src/data.json`, making it easy to update the portfolio details.

## Key Features

- Responsive portfolio layout with a fixed sidebar and main content area
- Data-driven content from a structured JSON file
- Clean resume-style presentation for experience, skills, and project highlights
- Font Awesome icons for social links and section styling
- Bootstrap-based styling for responsive layout and consistent UI
- Built with React 19, TypeScript, and Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Bootstrap
- Font Awesome
- MDB React UI Kit

## Project Structure

- `src/App.tsx` - main application layout
- `src/index.js` - entry point and global stylesheet imports
- `src/data.json` - portfolio content source for sidebar and main sections
- `src/components/LeftHalf/` - sidebar components
- `src/components/RightHalf/` - main portfolio content components
- `src/index.css` / `src/App.css` - global and layout styles

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local Vite development URL shown in the terminal to preview the portfolio.

### Build for Production

```bash
npm run build
```

### Deploy

A `deploy` script is provided for GitHub Pages deployment:

```bash
npm run deploy
```

## Content Included

- Personal profile details and professional tagline
- Contact info, resume link, email, and location
- Biography summary with highlights of career background and interests
- Experience timeline for Infosys, Charles Schwab, and Deutsche Bank
- Technical skill categories and toolset overview
- Featured projects such as checkout redesign, flight data monitoring, performance reporting, Xva Manager, TSS Dashboard, and CaSP
- Footer notes and copyright information

## Customization

Update `src/data.json` to modify:

- name, tagline, and navigation labels
- contact details and resume link
- biography text
- experience entries and technology stacks
- project descriptions and client details
- social links and icons

## Notes

This portfolio is intended as a simple, maintainable showcase of professional experience and technical capabilities. It can be extended with additional sections, routing, or page transitions as needed.

---

© 2026 Avinash Sorab
