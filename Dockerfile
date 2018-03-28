FROM node:8-alpine

RUN yarn config set cache-folder /opt/.yarn-cache
WORKDIR /opt/app

COPY . .

CMD [ "yarn", "start" ]
