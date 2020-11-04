.PHONY: back
back:
	cd ./backend && npm start

.PHONY: front
front:
	cd ./frontend && npm start

.PHONY: test
test:
	cd ./frontend && npm test
	
.PHONY: setup
setup:
	docker-compose -f ./backend/docker-compose.yaml up -d
	cd ./backend && npm install
	cd ./frontend && npm install

.PHONY: deps
deps:
	docker-compose -f ./backend/docker-compose.yaml up -d
