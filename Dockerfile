FROM node:14
WORKDIR /mernbackend
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "src/app.js"]
