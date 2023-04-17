# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the TypeScript code to JavaScript
# RUN npm run build

# Specify the command to run when the container starts
CMD [ "npm", "run", "start:inspect" ]
