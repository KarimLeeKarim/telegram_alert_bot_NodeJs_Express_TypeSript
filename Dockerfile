FROM node:13.12.0-alpine

COPY . /app
WORKDIR /app
ARG CHANEL_ID
ARG TOKEN
ENV NODE_ENV=production 
ENV SKIP_PREFLIGHT_CHECK=true
ENV CHANNEL_ID=${CHANNEL_ID}
ENV TOKEN=${TOKEN}

RUN npm install  && npm run build

EXPOSE 80
CMD ["node", "./build/server.js"]
