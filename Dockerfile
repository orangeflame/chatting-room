FROM node:8-alpine

RUN yarn config set cache-folder /opt/.yarn-cache
WORKDIR /opt/app

CMD [ "yarn", "start" ]
