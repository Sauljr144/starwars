FROM node:24

#app direcctory
WORKDIR /app

#Cpoy package.json and package-lock.json (if available)
COPY package*.json ./

#install dependencies
RUN npm install

#Copy the app into container
COPY . .

#Set port environment variable
ENV PORT=9000

#Expose the port for computer access
EXPOSE 9000

#Run the app
CMD ["npm", "start"]
