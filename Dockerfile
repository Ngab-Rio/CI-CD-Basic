FROM node:latest

WORKDIR /app

COPY packege.* ./
RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev"]