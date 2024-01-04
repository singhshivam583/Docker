#step1 :
FROM alpine 


# step2 : install a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.7/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.7/community' >> /etc/apk/repositories

RUN apk update 
RUN apk add mongodb

#step2.5 : configure that software
VOLUME [ "/data/db/" ]
WORKDIR /data
EXPOSE 27017

#step3 : set default commands
CMD [ "mongod" ]