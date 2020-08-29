default:
	docker build --pull --rm -f "web/dockerfile" -t xrazis/swarmlab.io "web"
	docker run -p 8080\tcp:8080 -v /var/www/web:/usr/src/app -d xrazis/swarmlab.io
	docker ps