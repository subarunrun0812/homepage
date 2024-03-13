start:
	@if [ ! -d "node_modules" ]; then \
		npm install next; \
	fi
	npm run dev

clean:
	rm -rf node_modules .next

re: clean start

PHONY: start