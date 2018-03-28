FROM node:8-alpine

ENV NODE_ENV production

WORKDIR /opt/app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY dist dist
RUN yarn

CMD [ "yarn", "start" ]
