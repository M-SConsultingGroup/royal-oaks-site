# Use a Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy both package.json and package-lock.json for the frontend
COPY package.json .
COPY package-lock.json .

# Install frontend dependencies
RUN npm install

# Copy the entire project to the image
COPY . .

# Build the React frontend
RUN npm run build

# Change directory to the backend and install dependencies
WORKDIR /app/backend

# Copy and install backend dependencies
COPY backend/package.json .
COPY backend/package-lock.json .
RUN npm install

# Generate TypeScript build for backend
RUN npm run build

# Go back to the app root to run the built server
WORKDIR /app/backend

# Expose the port the app runs on
ENV PORT 8080
EXPOSE 8080

# Run the node server
CMD ["node", "dist/server.js"]