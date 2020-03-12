docker-user=jaredhanson11
name=${docker-user}/streamt-client


build:
	docker build . -t ${name}-client:latest
build-images: build

push: build
	docker push ${name}-client:latest
push-images: push
