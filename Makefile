.PHONY: back
back:
	cd ./backend && npm start

.PHONY: front
front:
	cd ./frontend && npm start

.PHONY: setup
setup:
	docker-compose -f ./backend/docker-compose.yaml up -d
	cd ./backend && npm install
	cd ./frontend && npm install