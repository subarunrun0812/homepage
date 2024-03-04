create_and_start: create start

create:
	@if [ -d "my-blog" ]; then \
		rm -rf my-blog; \
	fi
	npx create-next-app --example blog my-blog

start:
	cd my-blog && npm run dev

.PHONY: create_and_start create start
