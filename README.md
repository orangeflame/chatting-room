production:

build

docker build -t chatting-room -f production.Dockerfile .

run

docker run --rm -p 8080:8080 chatting-room

CI

yarn build
docker build

Local 
run yarn dev