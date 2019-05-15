FROM node:10.15

ADD . /app
RUN cd /app ; npm install ng ; npm run build-prod ; mv dist dist_prod ; npm run build ; mv dist dist_test

VOLUME /target

CMD tar c -C /app/ dist_prod dist_test | tar x -C /target
