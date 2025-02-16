# Use a Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for both backend and frontend
COPY package.json package.json
COPY package.json client/package.json
COPY yarn.lock yarn.lock

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the project files
COPY . .

# Build the React frontend
RUN yarn --cwd client build

# Generate TypeScript build for backend
RUN yarn --cwd backend tsc

# Expose the port the app runs on
ENV PORT 8080
EXPOSE 8080

# Run the node server
CMD ["node", "dist/server.js"]