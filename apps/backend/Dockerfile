FROM node:20

# Enable corepack for yarn version management
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock ./

# Copy backend package.json and prisma folder
COPY apps/backend/package.json ./apps/backend/
COPY apps/backend/prisma ./apps/backend/prisma/

# Install backend dependencies
RUN yarn workspace backend install

# Copy all source files
COPY . .

# Generate Prisma client
RUN yarn workspace backend prisma generate

# Build the backend app (TypeScript)
RUN yarn workspace backend build

# Run the app
CMD ["yarn", "workspace", "backend", "start"]
