# Striver A2Z DSA Tracker

Personal DSA study dashboard for tracking the Striver / Take U Forward A2Z DSA roadmap.

## Features

- 18-step A2Z roadmap / 474-problem catalogue target
- Problem status: Not Started, In Progress, Done, Needs Revision
- Daily study plan and calendar
- Spaced revision queue
- Progress charts and streak heatmap
- Search and filtering
- Notes and direct resource links
- Firebase cross-device sync with offline persistence
- PWA/offline support
- Dark mode
- JSON backup

## Stack

React + TypeScript + Vite + Tailwind CSS + Firebase + Recharts + Vite PWA.

## Setup

1. `npm install`
2. Copy `.env.example` to `.env`
3. Add your Firebase web-app configuration to `.env`
4. Enable Firebase Authentication and Firestore
5. `npm run dev`

See `DEPLOYMENT.md` for deployment instructions.

The repository keeps the source code and course catalogue under GitHub; personal progress is stored per authenticated user in Firestore.