FROM node:14-alpine3.12 AS deps
RUN apk add --no-cache libc6-compat python3 make g++

RUN npm install -g pnpm

WORKDIR /app
COPY ./dist/apps/api/package.json .
COPY pnpm-lock.yaml ./
RUN pnpm install -r --prod

# RUN npm install --only=production --legacy-peer-deps


# Production image, copy all the files and run nest
FROM node:14-alpine3.12 AS runner

WORKDIR /app

ENV NODE_ENV production
ENV PORT=3333

COPY ./dist/apps/api .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

EXPOSE ${PORT}

CMD ["node", "main.js"]
