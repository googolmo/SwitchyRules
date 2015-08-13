function regExpMatch(url, pattern) {
    try {
        return new RegExp(pattern).test(url);
    } catch (ex) { return false; }
}
var pac_date = 1437112305695;

function FindProxyForURL(url, host) {
    var diff = new Date().getTime() - pac_date;
    var seconds = diff / 1000;
    if(seconds > 4) {
        return 'DIRECT';
    }
    if (shExpMatch(url, "*://chrome.google.com/webstore/*")) {
        return 'DIRECT';
    }
    if (shExpMatch(url, "*://addons.opera.com/*")) {
        return 'DIRECT';
    }
    if (shExpMatch(url, "*://*tunnelbear.com/core/api/*")) {
        return 'DIRECT';
    }
    if (shExpMatch(url, "*://*tunnelbear.com/support/*")) {
        return 'DIRECT';
    }
    if (shExpMatch(url, "*://s3.amazonaws.com/tunnelbear/images/404.png*")) {
        return 'DIRECT';
    }
    if (shExpMatch(host, "localhost")) {
        return 'DIRECT';
    }
    if (shExpMatch(host, "127.0.0.1")) {
        return 'DIRECT';
    }
    if (shExpMatch(host, "10.*.*.*")) {
        return 'DIRECT';
    }
    if (shExpMatch(host, "192.168.*.*")) {
        return 'DIRECT';
    }
    if (shExpMatch(host, "(^172.1[6-9].*.*)|(^172.2[0-9].*.*)|(^172.3[0-1].*.*)")) {
        return 'DIRECT';
    }

    if (shExpMatch(url, "*")) {
        return 'HTTPS ip-162-243-174-204.lazerpenguin.com:8080;HTTPS ip-162-243-175-132.lazerpenguin.com:8080;HTTPS ip-162-243-175-141.lazerpenguin.com:8080;';
    }
    return 'DIRECT';
}
