FROM node:16-alpine3.15

WORKDIR /usr/src/app/frontend

ENV PATH /usr/src/app/node_modules/.bin:$PATH 

COPY package.json .

RUN npm install --silent

COPY . . 

# COPY public public

# COPY .env .env

# RUN npm install react-scripts@3.0.1 -g --silent

EXPOSE 3000

CMD npm start