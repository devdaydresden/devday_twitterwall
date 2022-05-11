FROM node:16.15 AS builder

ADD . /app
RUN cd /app ; npm install ng ; npm run prod-build

FROM busybox:stable

COPY --from=builder /app/dist/twitterwall /twitterwall/

VOLUME /target

ENTRYPOINT ["/bin/sh", "-c", "tar c -C /twitterwall . | tar xv -C /target"]
