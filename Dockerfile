FROM node:16-alpine
WORKDIR /app  
COPY . /app
EXPOSE 4000
RUN npm install
CMD nodemon server.js