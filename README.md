## Build Status [![CircleCI](https://circleci.com/gh/orangeflame/chatting-room/tree/master.svg?style=shield)](https://circleci.com/gh/orangeflame/chatting-room/tree/master)

## How to start this project in local
> First, you need to have node, yarn & docker installed on you machine. A VPN is nice to have. To verify it, try following commands in your terminal. If you do not have it, just Google it.

    node --version
    yarn --version
    docker --version

> Run following commands in the teminal of under you project folder to get you APP started

    yarn
    docker-compose up

> The [app](http://localhost:8080/health) should has been started.

## How to ship to production
> compile typescript code into dist

    yarn build

> build the docker image with the compiled code in dist via production.Dockerfile
    
    docker build -t chatting-room -f production.Dockerfile .

> test the image locally

    docker run --rm -p 8080:8080 chatting-room   

## How to run tests

> run the tests

    yarn test

> generate coverage report

    yarn test --coverage

## Techinical Overview

### Editor Config

> make all developper have the same editor setting which includs indent, end_of_line, charset, insert_final_newline 
> [.editorconfig](https://github.com/orangeflame/chatting-room/blob/master/.editorconfig)

### Docker

> [Dockfile](https://github.com/orangeflame/chatting-room/blob/master/Dockerfile) and [docker-compose.yml](https://github.com/orangeflame/chatting-room/blob/master/docker-compose.yml) is for dev, [production.Dockerfile](https://github.com/orangeflame/chatting-room/blob/master/production.Dockerfile) is for QA, Staging and Live.

### Nodemon

> A monitor for any changes in your source and automatically restart your server, perfect for you dev environment. This project's [setting](https://github.com/orangeflame/chatting-room/blob/master/nodemon.json) is watching the `.ts` and `.json` and exec `tsnode`

### ts-node

> Execute TypeScript files **directly** with node, both nodemon and ts-node is used for **dev**.


