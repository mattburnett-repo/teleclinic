FROM node:20

# Enable corepack for yarn version management
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

WORKDIR /app

# Copy package files first for better caching
COPY package.json yarn.lock ./
COPY apps/backend/package.json ./apps/backend/

# Install dependencies
RUN yarn install

# Copy source files
COPY . .

# Generate Prisma client
RUN yarn workspace backend prisma generate
# RUN yarn dlx prisma generate

# Build TypeScript
RUN yarn workspace backend build

# Run the built app
CMD ["yarn", "workspace", "backend", "start"]
