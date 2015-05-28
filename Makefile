rm:
	rm switchy.sorl

gen:
	python gen_switchy_rule.py

push:
	git push origin master
	git push oschina master
