# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The project uses the App Router architecture and follows a single-page application design with sections for hero, about, skills, projects, and contact.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

- **Framework**: Next.js 15 with App Router
- **Main entry points**: 
  - `src/app/layout.tsx` - Root layout with metadata
  - `src/app/page.tsx` - Main portfolio page (single-page design)
- **Styling**: Tailwind CSS v4 with PostCSS, custom CSS variables in `globals.css`
- **TypeScript**: Strict mode enabled, path aliases configured (`@/*` → `./src/*`)
- **Development Environment**: Nix flake for reproducible dev environment with Node.js

## Key Configuration

- ESLint extends Next.js core web vitals and TypeScript configs
- Tailwind configured via PostCSS plugin
- TypeScript paths alias `@/*` points to `src/` directory
- CSS uses custom properties for theming with dark mode support

## File Structure Notes

- Portfolio content is currently in a single page component with placeholder data
- Uses gradient backgrounds and hover effects throughout
- Skills, projects, and contact sections use placeholder content that should be customized
- Static assets in `public/` directory (SVG icons)