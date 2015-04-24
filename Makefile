JASMINE=./node_modules/.bin/jasmine

test:
	$(JASMINE)

test-without-color:
	$(JASMINE) --no-color

.PHONY: test test-without-color