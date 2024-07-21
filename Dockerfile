FROM node:22.5-alpine3.19

WORKDIR /home

COPY package*.json ./

RUN npm install

COPY ./src src

EXPOSE 3000

CMD [ "npm", "start"]