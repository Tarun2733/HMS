# Use an official Node.js runtime as a parent image
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "app.js"]
