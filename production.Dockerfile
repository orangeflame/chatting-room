FROM node:8-alpine

WORKDIR /opt/app
COPY . .
RUN yarn

CMD [ "yarn", "start" ]
