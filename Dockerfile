FROM node:16-alpine

WORKDIR /app

COPY . . 

RUN npm install

EXPOSE 4600

CMD ["node","app.js"]

