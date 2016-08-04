#!/usr/bin/env python

import time

pac_proxy = '''
var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT;";
'''

pac_domain = '''
var domains = [
'''

pac_footer = '''];
function FindProxyForURL(url, host) {
    for (var i = domains.length - 1; i >= 0; i--) {
       if (dnsDomainIs(host, domains[i])) {
            return proxy;
       };
    };
    return "DIRECT";
}
'''

def main():
    hosts = file('hosts.list', 'r')
    switchy_rule = file('auto.pac', 'w')
    switchy_rule.writelines(pac_proxy)
    switchy_rule.writelines(pac_domain)
    for line in hosts.readlines():
        if len(line.strip()) != 0:
            if not line.startswith(';') and '*' not in line:
                switchy_rule.writelines(line.replace('\n', '') + ",\n")
    switchy_rule.writelines(pac_footer)
    hosts.close()
    switchy_rule.close()

if __name__ == "__main__":
    main()
