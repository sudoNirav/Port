# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project (includes src/, public/)
COPY . .

# Build Next.js (App Router aware)
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app

# Copy runtime essentials from builder
COPY --from=builder /src/package.json ./package.json
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/.next ./.next
#COPY --from=builder /src/public ./public
# Optional: if you have next.config.js
COPY --from=builder /src/next.config.ts ./next.config.ts

# Expose default Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]

