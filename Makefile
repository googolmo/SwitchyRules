rm:
	rm switchy.sorl
	rm auto.pac

gen: rm
	python gen_switchy_rule.py
	python gen_pac_rule.py

push:
	git push origin master
	git push oschina master
