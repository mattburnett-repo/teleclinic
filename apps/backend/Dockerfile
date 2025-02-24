FROM node:20

WORKDIR /app

# Copy root package.json and yarn.lock to install all dependencies
COPY package.json yarn.lock ./

# Copy backend package.json and prisma folder
COPY apps/backend/package.json ./apps/backend/
COPY apps/backend/prisma ./apps/backend/prisma/

# Install dependencies for the entire project
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Generate Prisma client in the backend workspace
RUN yarn workspace backend prisma generate

# Build the backend app (TypeScript)
RUN yarn workspace backend build

# Run the backend app
CMD ["yarn", "workspace", "backend", "start"]
