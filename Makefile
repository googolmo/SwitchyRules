rm:
	rm switchy.sorl

gen: rm
	python gen_switchy_rule.py

push:
	git push origin master
	git push oschina master
