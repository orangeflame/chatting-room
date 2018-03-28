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

