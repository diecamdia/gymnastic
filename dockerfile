FROM node:10-stretch

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install git && \
    npm install -g @angular/cli

CMD ["node"]