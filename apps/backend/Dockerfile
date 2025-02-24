# Use an official Node.js image as a base
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies for the entire project
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Generate Prisma client in the backend workspace
RUN yarn workspace backend prisma generate

# Build the backend app (TypeScript)
RUN yarn workspace backend build

# Expose the port the app will run on
EXPOSE 3000

# Start the backend application
CMD ["yarn", "workspace", "backend", "start"]
