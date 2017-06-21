FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
#COPY package.json /usr/src/app/
#RUN npm install yarn
#RUN yarn

#Install webserver
RUN npm -g install serve

# Bundle app source
COPY ./build/ /usr/src/app

#Run webserver against bundle
EXPOSE 8080
ENTRYPOINT serve -p 8080 /usr/src/app/