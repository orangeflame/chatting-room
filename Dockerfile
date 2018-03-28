FROM node:8-alpine

RUN yarn config set cache-folder /opt/.yarn-cache
WORKDIR /opt/app

ENV NODE_PATH ./src

CMD [ "yarn", "dev" ]
