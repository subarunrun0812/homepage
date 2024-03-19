start:
	if [ ! -d "node_modules" ]; then \
		npm install; \
		npm install next; \
		npm install three; \
		npm install remark rehype; \
		npm install next-mdx-remote; \
	fi
	npm run dev

clean:
	rm -rf node_modules .next package-lock.json

re: clean start

PHONY: start
