FROM node:lts as base

ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

WORKDIR /home/node/docs
COPY --chown=node:node . /home/node/docs/

FROM base as production
RUN chown node:node /home/node/docs
WORKDIR /home/node/docs
USER node
RUN npm install
RUN npm run build

FROM nginx:stable-alpine as deploy
WORKDIR /home/node/docs
COPY --chown=node:node --from=production /home/node/docs/build /usr/share/nginx/html/
