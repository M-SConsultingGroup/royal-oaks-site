# Stage 1: Build frontend
FROM node:18-slim AS build-frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build  # This will run `vite build` based on your package.json

# Stage 2: Build backend
FROM node:18-slim AS build-backend
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend ./
RUN npm run build  # Run the TypeScript compilation for the backend

# Stage 3: Final stage
FROM node:18-slim AS production
WORKDIR /app

# Copy frontend build artifacts
COPY --from=build-frontend /app/dist ./public

# Copy backend build artifacts
COPY --from=build-backend /app/backend/dist ./backend/dist
COPY --from=build-backend /app/backend/package.json ./backend/package.json
COPY --from=build-backend /app/backend/node_modules ./backend/node_modules

# Expose port and specify the command to run the server
ENV PORT=8080
EXPOSE $PORT
CMD ["node", "backend/dist/server.js"]