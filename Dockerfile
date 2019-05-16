FROM node:10.15

ADD . /app
RUN cd /app ; npm install ng ; npm run build-prod

VOLUME /target

CMD tar c -C /app/dist/twitterwall . | tar x -C /target
