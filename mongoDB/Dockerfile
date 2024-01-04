FROM node:alpine
# for production grade don't use alpine use actual version of node
WORKDIR /var/app

COPY ./package.json ./

RUN npm install 

COPY ./ ./ 

CMD [ "npm","start" ]
 
