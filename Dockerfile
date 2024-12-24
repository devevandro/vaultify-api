FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn build

USER node

EXPOSE 6500

CMD [ "yarn", "start:prod" ]
