FROM node:16

RUN apt-get update && apt-get upgrade
RUN npm install -g npm@latest prettier

WORKDIR /src/automated-greenhouse
ADD . /src/automated-greenhouse

RUN npm i
