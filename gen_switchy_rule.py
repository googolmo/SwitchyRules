#!/usr/bin/env python

import time

switchy_header = '''[SwitchyOmega Conditions]
; Require: SwitchyOmega >= 2.3.2
; Date: %s
; Usage: https://github.com/FelisCatus/SwitchyOmega/wiki/RuleListUsage
'''

def main():
    hosts = file('hosts.list', 'r')
    switchy_rule = file('switchy.sorl', 'w')
    switchy_rule.writelines(switchy_header % time.strftime("%x") + '\n')
    for line in hosts.readlines():
        if len(line.strip()) != 0:
            if line.startswith(';'):
                switchy_rule.writelines(line)
            else:
                switchy_rule.writelines('*.' + line)
        else:
            switchy_rule.writelines('\n')
    hosts.close()
    switchy_rule.close()

if __name__ == "__main__":
    main()
