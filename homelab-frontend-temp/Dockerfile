# # Stage 1: Build
# FROM node:20-alpine AS builder
# WORKDIR /src

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm ci

# # Copy the rest of the project (includes src/, public/)
# COPY . .

# # Build Next.js (App Router aware)
# RUN npm run build

# # Stage 2: Production
# FROM node:20-alpine
# WORKDIR /app

# # Copy runtime essentials from builder
# COPY --from=builder /src/package.json ./package.json
# COPY --from=builder /src/node_modules ./node_modules
# COPY --from=builder /src/.next ./.next
# #COPY --from=builder /src/public ./public
# # Optional: if you have next.config.js
# COPY --from=builder /src/next.config.ts ./next.config.ts

# # Expose default Next.js port
# EXPOSE 3000

# # Start the Next.js server
# CMD ["npm", "start"]


# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /src

COPY package*.json ./
RUN npm ci

COPY . .
# This creates the standalone folder
RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only what is needed for the standalone server
COPY --from=builder /src/public ./public
COPY --from=builder /src/.next/standalone ./
COPY --from=builder /src/.next/static ./.next/static

# Note: standalone mode generates its own server.js, 
# so we don't need the full node_modules folder anymore.
EXPOSE 3000

CMD ["node", "server.js"]