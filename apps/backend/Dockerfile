FROM node:20

# Enable corepack for yarn version management
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock ./
COPY apps/backend/package.json ./apps/backend/

# Install dependencies specifically for backend
RUN yarn workspaces focus backend

# Copy all source files
COPY . .

# Generate Prisma client from within backend workspace
WORKDIR /app/apps/backend
RUN yarn prisma generate
WORKDIR /app

# Build TypeScript
RUN yarn workspace backend build

# Run the built app
CMD ["yarn", "workspace", "backend", "start"]
