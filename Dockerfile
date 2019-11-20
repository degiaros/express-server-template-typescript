FROM node:12.13.0-alpine

RUN apk --no-cache add --virtual builds-deps build-base git

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY .env /usr/src/app/

COPY . /usr/src/app/

RUN npm install && \
    npm rebuild --build-from-source

EXPOSE 8888

CMD [ "npm", "run", "start:dev"]