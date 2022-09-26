DOCKER_COMPOSE_FILE?=docker-compose.yml

COMPOSE=docker-compose -f $(DOCKER_COMPOSE_FILE)
APPDOCKER=$(COMPOSE) run --rm app
DAKOBED_TAG=latest


all:
	$(COMPOSE) up --build

prune:
	$(COMPOSE) down --remove-orphans -v
	docker system prune -f
	docker volume prune -f