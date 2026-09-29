FROM node:22-alpine

WORKDIR /auth

COPY . .
COPY .env.example .env

RUN apk add --no-cache python3 make g++
RUN npm cache clean --force
RUN npm install -g @nestjs/cli argon2 ts-node rimraf
RUN npm install --legacy-peer-deps
RUN yarn build

CMD ["yarn", "start:prod"]