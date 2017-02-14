#!/usr/bin/env python

import time

def main():
    hosts = file('hosts.list', 'r')
    switchy_rule = file('gfwlist.conf', 'w')
    for line in hosts.readlines():
        if len(line.strip()) != 0:
            if not line.startswith(';') and '*' not in line:
                switchy_rule.writelines('server=/%s/127.0.0.1#3210\n' % line.replace('\n', ''))
    hosts.close()
    switchy_rule.close()

if __name__ == "__main__":
    main()
