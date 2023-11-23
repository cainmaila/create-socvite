FROM node:18.13.0-alpine3.16
RUN npm install -g pnpm

WORKDIR /usr/src/app

ADD . ./
RUN pnpm install
RUN pnpm build
ENV NODE_ENV=production

ENTRYPOINT [ "pnpm","start" ]
