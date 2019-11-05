  
FROM node:10.15.3-alpine

COPY ./package.json /usr/server/package.json

RUN npm config set unsafe-perm true

WORKDIR /usr/server

RUN npm i
RUN npm i -g pm2


CMD ["pm2-runtime", "npm", "--", "start"]