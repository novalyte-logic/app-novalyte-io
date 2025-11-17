# ================================
# 1. Builder stage
# ================================
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of project and build
COPY . .
RUN npm run build

# ================================
# 2. Runner stage (production)
# ================================
FROM node:22-alpine AS runner
WORKDIR /app

# Create a non-root user for security
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

ENV PORT 3000

# Copy in production build
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Start the production server
CMD ["npm", "start"]
