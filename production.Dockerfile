FROM node:8-alpine

RUN apk --no-cache add \
  curl

ENV NODE_ENV production

WORKDIR /opt/app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY dist dist
RUN yarn

HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -f http://localhost:8080/health || exit 1

CMD [ "yarn", "start" ]
