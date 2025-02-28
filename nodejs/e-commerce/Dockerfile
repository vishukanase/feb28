# Use the official Node.js base image for version 20
FROM node:20

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
