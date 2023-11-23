FROM node:18.12.1

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3000
ENV PORT 3000

RUN npm run build

CMD ["npm", "start"]