FROM node:18.20.2-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./
COPY yarn.lock ./

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package*.json  ./
COPY yarn.lock ./
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/next.config.js ./next.config.js

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]
