# Explicitly use Linux platform (works on Windows, macOS, and Linux hosts)
FROM --platform=linux/amd64 node:20-alpine

# Set working directory
WORKDIR /app

# Copy all files (respecting .dockerignore)
COPY . .

# Install all dependencies at root level (npm workspaces will handle all packages)
RUN npm install

# Expose both ports (will be mapped in docker-compose)
EXPOSE 3000