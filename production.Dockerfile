FROM node:8-alpine

ENV NODE_ENV production

ARG GIT_COMMIT
ENV GIT_COMMIT ${GIT_COMMIT}

ARG PORT=8000;
ENV PORT ${PORT}

WORKDIR /opt/app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY dist dist
RUN yarn

CMD [ "yarn", "start" ]
