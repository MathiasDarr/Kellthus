FROM node:12.10.0

# copy package.json and package-lock.json into /usr/app
WORKDIR /usr/app

COPY package*.json ./

#RUN npm ci -qy
RUN npm i fsevents@latest -f --save-optional

COPY . .

EXPOSE 3000

# start the development server
CMD ["npm", "start"]
