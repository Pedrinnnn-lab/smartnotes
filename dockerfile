FROM node:24-alpine3.23
WORKDIR /app
COPY package*json .
RUN npm ci

COPY . .
ENV NODE_ENV=production

