FROM node:18-alpine AS build

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/node_modules ./node_modules

ENV PORT=3001

EXPOSE $PORT

CMD ["npm", "run", "dev"]

