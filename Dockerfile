FROM node:12-buster AS build-base
WORKDIR /app

FROM nginx:stable-alpine AS release-base
WORKDIR /usr/share/nginx/html

FROM build-base AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM dependencies AS build
WORKDIR /app
COPY . ./
RUN npm run-script build

FROM release-base AS release
WORKDIR /usr/share/nginx/html
COPY --from=dependencies /app ./
COPY --from=build /app/build ./
COPY --from=build /app/nginx /etc/nginx
EXPOSE 80
