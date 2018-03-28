FROM node:8-alpine

WORKDIR /opt/app
COPY . .

CMD [ "yarn", "start" ]
