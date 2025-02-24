# Use an official Node.js runtime as the base image
FROM node:18.12.0

# Enable Corepack to manage the correct version of Yarn as specified in the package.json
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files (including the yarn.lock with workspaces and the correct yarn version)
COPY package.json yarn.lock ./

# Install dependencies for the entire project, respecting the version of Yarn specified in package.json
RUN yarn install --immutable

# Copy the rest of the application code into the container
COPY . .

# Ensure that the Prisma client is generated in the backend workspace
RUN yarn workspace backend prisma generate

# Build the backend application
RUN yarn workspace backend build

# Expose the necessary ports (this depends on your app, make sure to adjust as needed)
EXPOSE 3000

# Start the application (make sure the entry point is correct)
CMD ["yarn", "workspace", "backend", "start"]
