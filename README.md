
# Cinereel App
<div align="center" display="flex">
  <br />
      <img src="https://github.com/Xanderyeng/cinereel/blob/main/dark.PNG" alt="Project Dark Mode">
      <img src="https://github.com/Xanderyeng/cinereel/blob/main/light.PNG" alt="Project Light Mode">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>


   <div align="center">
    A modern, responsive web application for browsing movies and TV shows, built with Next.js 14, Framer-motion, and Tailwind CSS.
    </div>
</div>

## Features

- Cross-page state management
- Smooth animations using Framer Motion
- Responsive design for all device sizes
- Accessibility features following WCAG guidelines
- Blurred image loading for improved user experience
- Dynamic page routing demonstrating advanced techniques
- Detailed pages for movies, TV shows, people, and companies
- Server-Side Rendering (SSR) for improved performance and SEO
- Advanced search functionality for movies, TV shows, and people
- Extended functionality with additional pages for a real-world feel
- Performance optimizations including image optimization and lazy loading
- Skeleton loading components for visual feedback during content loading

## Technology Stack

- Next.js 14 (React)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion for animations
- TMDB API for movie and TV show data
- Vercel for deployment

## Project Structure

The project follows a modular structure with separate directories for pages, components, and API integration:

- `app/`: Contains the main application pages and layouts
- `components/`: Reusable React components
- `lib/`: API integration and utility functions
- `styles/`: Global styles and Tailwind CSS configuration

For a detailed file structure, please refer to the Technical Documentation at the root of the project.

## Installation

Clone the project

```bash
  https://github.com/Xanderyeng/cinereel.git
```

Go to the project directory

```bash
  cd cinereel
```

Install dependencies

```bash
  npm install
```
or
```bash
  bun install
   ```
   or
   ```
   yarn install
   ```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

```
   TMDB_API_KEY=your_tmdb_api_key
   ```
   Remember to create an account on Google cloud console and obtain a google tag manager ID.
   ```
   GOOGLE_TAG_ID


## Run Locally

Start the development server

```bash
  bun run dev
```
or
```bash
  npm run dev
```

## Launch browser
Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.
## Deployment
This app can be easily deployed to Vercel or any other Next.js-compatible hosting platform.

## Acknowledgments

- Design inspired by Dreamshare Figma Design provided by WFD
- Movie and TV show data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Contributing

Contributions are welcome!
Please feel free to submit a Pull Request.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)


## Screenshots

![App Screenshot](https://github.com/Xanderyeng/cinereel/blob/main/screenshot1.PNG)

![App Screenshot](https://github.com/Xanderyeng/cinereel/blob/main/dark.PNG)

![App Screenshot](https://github.com/Xanderyeng/cinereel/blob/main/light.PNG)

