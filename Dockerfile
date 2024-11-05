# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set registry https://registry.npmjs.org/ \
    && npm install

COPY . .

RUN npm run build

# Production stage
FROM node:22-alpine AS production

WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/public ./public

EXPOSE 8080

CMD ["npm", "start"]