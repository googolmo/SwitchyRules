var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)shadowsocks\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)prfct\.co$/.test(host)) return "+ss";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)circleci\.com$/.test(host)) return "+ss";
        return "+__ruleListOf_auto switch";
    },
    "+__ruleListOf_auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)android\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)google\.co\.jp$/.test(host)) return "+ss";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)googleapis\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)google\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)youtube\.io$/.test(host)) return "+ss";
        if (/(?:^|\.)youtube\.jp$/.test(host)) return "+ss";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+ss";
        if (/^you\.be$/.test(host)) return "+ss";
        if (/(?:^|\.)youtube-nocookie\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googlecode\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googleadservices\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googleapis\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googlecode\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)google\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)googlesource\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googlesyndication\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googletagservices\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)1e100\.net$/.test(host)) return "+ss";
        if (/^goo\.gl$/.test(host)) return "+ss";
        if (/(?:^|\.)blogger\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)blogspot\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)blogspot\.jp$/.test(host)) return "+ss";
        if (/(?:^|\.)blogspot\.sg$/.test(host)) return "+ss";
        if (/(?:^|\.)chrome\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)akamaihd\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)akamai\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)fbcdn\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)fb\.me$/.test(host)) return "+ss";
        if (/(?:^|\.)github\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+ss";
        if (/^t\.co$/.test(host)) return "+ss";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)twitter\.jp$/.test(host)) return "+ss";
        if (/(?:^|\.)twimg\.jp$/.test(host)) return "+ss";
        if (/(?:^|\.)wikimedia\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)wikipedia\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)android\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)angularjs\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)fastly\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)survivingwithandroid\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)buff\.ly$/.test(host)) return "+ss";
        if (/(?:^|\.)greatfire\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)flickr\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)xda-developers\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)flaticon\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)lvv2\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)sensortower\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)playpcesor\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ift\.tt$/.test(host)) return "+ss";
        if (/(?:^|\.)ghconduit\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)instagram\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)bitbucket\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)bitcoin\.cz$/.test(host)) return "+ss";
        if (/(?:^|\.)bit\.ly$/.test(host)) return "+ss";
        if (/(?:^|\.)bbc\.co\.uk$/.test(host)) return "+ss";
        if (/(?:^|\.)chromium\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)cloudfront\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)codehaus\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)debian\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)dnspython\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)docker\.io$/.test(host)) return "+ss";
        if (/(?:^|\.)docker\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)dropbox\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)duckduckgo\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)eclipse\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)edgefonts\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)edgefonts\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)epochtimes\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)evernote\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)feedburner\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)feedburner\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)feedly\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ff\.im$/.test(host)) return "+ss";
        if (/(?:^|\.)flare\.me$/.test(host)) return "+ss";
        if (/(?:^|\.)frantech\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ftchinese\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)getfoxyproxy\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)gfx\.ms$/.test(host)) return "+ss";
        if (/(?:^|\.)git-scm\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)godaddy\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)golang\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)gomuse\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)herokuapp\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)howtoforge\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ign\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)imagedunk\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)imageporter\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)images-amazon\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)imdb\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)immage\.de$/.test(host)) return "+ss";
        if (/(?:^|\.)incapsula\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)internetfreedom\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)japan-whores\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)jetbrains\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)jkforum\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)joyent\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)kanzhongguo\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)kenengba\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)koding\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)laravel\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)lastpass\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)launchpadlibrarian\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)launchpad\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)leaseweb\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)leaseweb\.de$/.test(host)) return "+ss";
        if (/(?:^|\.)leaseweb\.nl$/.test(host)) return "+ss";
        if (/(?:^|\.)leaseweb\.us$/.test(host)) return "+ss";
        if (/(?:^|\.)lesscss\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)libertyreserve\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)live\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)lz7z\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)lz7z\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)madteam\.co$/.test(host)) return "+ss";
        if (/(?:^|\.)marc\.info$/.test(host)) return "+ss";
        if (/(?:^|\.)microsoft\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)mirrorbooks\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)mixero\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)mlgao\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)mozilla\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)mozilla\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)msecnd\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)msfn\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)mtgox\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)multiupload\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)namecheap\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)netroby\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)nextmedia\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)nltk\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)note\.acmu\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)novell\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)nytimes\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)oioioioi\.info$/.test(host)) return "+ss";
        if (/(?:^|\.)openshift\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)opensuse\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)openvpn\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)openvpn\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)opera\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)optimizely\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)optimizely\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)outlook\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ow\.ly$/.test(host)) return "+ss";
        if (/(?:^|\.)paypal\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)peacehall\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)perfectgirls\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)phncdn\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)photonvps\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)phpmyadmin\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)picleet\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)picturedip\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)pidgin\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)pingdom\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)pinimg\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)pinyuan001\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)pixnet\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)planforcloud\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)playframework\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)progit\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)python\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)quickweb\.com\.nz$/.test(host)) return "+ss";
        if (/(?:^|\.)quora\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)radio\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)ramhost\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)reddit\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)readthedocs\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)redhat\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)redtube\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)redtubefiles\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)reuters\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)rfi\.fr$/.test(host)) return "+ss";
        if (/(?:^|\.)rhcloud\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)rightscale\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)rmdown\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)rtbtc\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)scala-lang\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)scala-sbt\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)scalatest\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)secretchina\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)serverfault\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)sexinsex\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)sf\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)skype\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)slideshare\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)sns\.ly$/.test(host)) return "+ss";
        if (/(?:^|\.)softlayer\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)sourceforge\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)sourceforge\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)ssl-images-amazon\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)sstatic\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)stackexchange\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)stackoverflow\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)superuser\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)suse\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)susestudio\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)sytes\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)t66y\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)tanksporn\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)thefacebook\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)thepiratebay\./.test(host)) return "+ss";
        if (/(?:^|\.)tinypic\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)trouter\.io$/.test(host)) return "+ss";
        if (/(?:^|\.)tube8\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)tumblr\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)tweetdeck\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)twitlonger\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)typekit\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)typekit\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)typepad\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)vimeo\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)vim\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)voachinese\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)vpngate\.net$/.test(host)) return "+ss";
        if (/(?:^|\.)wbur\.org$/.test(host)) return "+ss";
        if (/(?:^|\.)wkbug\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)wlxrs\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)wlxrs\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)wordpress\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)wretch\.cc$/.test(host)) return "+ss";
        if (/(?:^|\.)wsimg\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)wsj\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)xmarks\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)xnxx\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)xvideos\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)yahoo\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)yfrog\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)youjizz\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)zend\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)zendesk\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)duolingo\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)mysql\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)slack\.com$/.test(host)) return "+ss";
        if (/(?:^|\.)androidsnippets\.com$/.test(host)) return "+ss";
        return "DIRECT";
    },
    "+ss": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "SOCKS5 127.0.0.1:1080;SOCKS 127.0.0.1:1080";
    }
});
