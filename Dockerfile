# build
FROM node:18 AS builder
WORKDIR /build
COPY . .

RUN yarn
RUN yarn build
RUN yarn install --production

# run
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /build/package.json /package.json
COPY --from=builder /build/node_modules /node_modules
COPY --from=builder /build/dist /dist

CMD ["ls","-al","/app"]

EXPOSE 5001
CMD ["yarn","start:prod"]
