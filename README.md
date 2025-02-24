# TeleClinic Demo

A simple demo application showing a health inquiry workflow where patients can:
- Submit health inquiries
- Get matched with appropriate doctors
- Schedule appointments
- View their medical records

## Project Structure
```
teleclinic/
├── apps/
│   ├── frontend/  # React + Vite + Tailwind
│   └── backend/   # Express + Prisma + PostgreSQL
└── package.json   # Yarn workspaces config
```

## Tech Stack
- Frontend: React, TypeScript, Tailwind CSS, Vite
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL with Prisma ORM
- Testing: Jest

## Development

Prerequisites:
- Node.js 18+
- Yarn
- PostgreSQL

Setup:
```bash
# Install dependencies
yarn install

# Set up environment variables
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env

# Start development servers
yarn dev
```

## Testing
```bash
# Run all tests
yarn test

# Run specific workspace tests
yarn workspace frontend test
yarn workspace backend test
```

## Features
- Health inquiry submission
- Doctor matching based on symptoms
- Appointment scheduling
- Medical record viewing

## Project Status
This is a demo application intended to showcase a basic telehealth workflow. 