
var proxy_rule = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT;";

var domains = [
"abc.xyz",
"google.com",
"google.co.jp",
"google.com.hk",
"google.tw",
"google.de",
"google.fr",
"google.se",
"google.in",
"google.im",
"google.ca",
"google.br",
"google.sg",
"google.is",
"google.co.id",
"youtube.io",
"youtube.jp",
"youtube.co.id",
"youtube.co.jp",
"youtube.hk",
"youtube.tw",
"youtube.com",
"youtu.be",
"youtube-nocookie.com",
"blogspot.com",
"blogspot.jp",
"blogspot.sg",
"blogspot.tw",
"blogspot.in",
"blogspot.is",
"blogspot.uk",
"blogspot.co.id",
"android.com",
"gstatic.com",
"ggpht.com",
"googleusercontent.com",
"doubleclick.net",
"googleapis.com",
"ytimg.com",
"googlecode.com",
"googleadservices.com",
"google-analytics.com",
"googleapis.com",
"googlecode.com",
"google.org",
"googlesource.com",
"googlesyndication.com",
"googletagmanager.com",
"googletagservices.com",
"googleusercontent.com",
"googlevideo.com",
"1e100.net",
"goo.gl",
"g.co",
"blogger.com",
"chrome.com",
"angularjs.org",
"chromecast.com",
"appspot.com",
"akamaihd.net",
"akamai.net",
"facebook.com",
"facebook.net",
"fbcdn.com",
"fbcdn.net",
"fb.me",
"github.com",
"githubusercontent.com",
"twitter.com",
"t.co",
"twimg.com",
"twitter.jp",
"twimg.jp",
"wikimedia.org",
"wikipedia.com",
"wikipedia.org",
"fastly.net",
"survivingwithandroid.com",
"buff.ly",
"greatfire.org",
"flickr.com",
"xda-developers.com",
"flaticon.com",
"lvv2.com",
"sensortower.com",
"playpcesor.com",
"ift.tt",
"ghconduit.com",
"instagram.com",
"cdninstagram.com",
"bitbucket.org",
"bitcoin.cz",
"bit.ly",
"bbc.co.uk",
"chromium.org",
"cloudflare.com",
"cloudfront.net",
"codehaus.org",
"debian.org",
"disqus.com",
"dnspython.org",
"docker.io",
"docker.com",
"dropbox.com",
"dropboxstatic.com",
"dropboxusercontent.com",
"duckduckgo.com",
"eclipse.org",
"edgefonts.com",
"edgefonts.net",
"epochtimes.com",
"evernote.com",
"feedburner.com",
"feedburner.net",
"feedly.com",
"ff.im",
"flare.me",
"frantech.com",
"ftchinese.com",
"getfoxyproxy.org",
"gfx.ms",
"git-scm.com",
"godaddy.com",
"golang.org",
"gomuse.com",
"herokuapp.com",
"howtoforge.com",
"ign.com",
"imagedunk.com",
"imageporter.com",
"images-amazon.com",
"imdb.com",
"immage.de",
"incapsula.com",
"internetfreedom.org",
"japan-whores.com",
"jetbrains.com",
"jkforum.net",
"joyent.com",
"kanzhongguo.com",
"kenengba.com",
"koding.com",
"laravel.com",
"lastpass.com",
"launchpadlibrarian.net",
"launchpad.net",
"leaseweb.com",
"leaseweb.de",
"leaseweb.nl",
"leaseweb.us",
"lesscss.org",
"libertyreserve.com",
"live.com",
"lz7z.com",
"lz7z.net",
"madteam.co",
"marc.info",
"microsoft.com",
"mirrorbooks.com",
"mixero.com",
"mlgao.com",
"mozilla.net",
"mozilla.org",
"msecnd.net",
"msfn.org",
"mtgox.com",
"multiupload.com",
"namecheap.com",
"netroby.com",
"nextmedia.com",
"nltk.org",
"note.acmu.org",
"novell.com",
"nytimes.com",
"oioioioi.info",
"openshift.com",
"opensuse.org",
"openvpn.com",
"openvpn.net",
"opera.com",
"optimizely.com",
"optimizely.com",
"outlook.com",
"ow.ly",
"paypal.com",
"peacehall.com",
"perfectgirls.net",
"phncdn.com",
"photonvps.com",
"phpmyadmin.net",
"picleet.com",
"picturedip.com",
"pidgin.com",
"pingdom.com",
"pinimg.com",
"pinterest.com",
"pinyuan001.com",
"pixnet.net",
"planforcloud.com",
"playframework.com",
"progit.org",
"python.org",
"quickweb.com.nz",
"quora.com",
"radio.com",
"ramhost.com",
"reddit.com",
"readthedocs.org",
"redhat.com",
"redtube.com",
"redtubefiles.com",
"reuters.com",
"rfi.fr",
"rhcloud.com",
"rightscale.com",
"rmdown.com",
"rtbtc.net",
"scala-lang.org",
"scala-sbt.org",
"scalatest.org",
"secretchina.com",
"serverfault.com",
"sexinsex.net",
"sf.net",
"skype.com",
"slideshare.net",
"sns.ly",
"softlayer.com",
"sourceforge.com",
"sourceforge.net",
"ssl-images-amazon.com",
"sstatic.net",
"stackexchange.com",
"stackoverflow.com",
"superuser.com",
"suse.com",
"susestudio.com",
"sytes.net",
"t66y.com",
"tanksporn.com",
"thefacebook.com",
"tinypic.com",
"trouter.io",
"tube8.com",
"tumblr.com",
"tweetdeck.com",
"twitlonger.com",
"twitter.com",
"typekit.com",
"typekit.net",
"typepad.com",
"vimeo.com",
"vim.org",
"voachinese.com",
"vpngate.net",
"wbur.org",
"wkbug.com",
"wlxrs.com",
"wlxrs.com",
"wordpress.com",
"wretch.cc",
"wsimg.com",
"wsj.com",
"xmarks.com",
"xnxx.com",
"xvideos.com",
"yahoo.com",
"yfrog.com",
"youjizz.com",
"zend.com",
"zendesk.com",
"duolingo.com",
"mysql.com",
"androidsnippets.com",
"slack.com",
"slack-msgs.com",
"slack-redir.net",
"dropr.com",
"packal.org",
"soundcloud.com",
"sndcdn.com",
"atlassian.com",
"gravatar.com",
"twitpic.com",
"polymer-project.org",
"gorillatoolkit.org",
"circleci.com",
"gravatar.com",
"pastebin.com",
"digg.com",
"phantomjs.org",
"spotify.com",
"gradle.org",
"maven.org",
"amazonaws.com",
"webupd8.org",
"itao.com",
"aliunicorn.com",
"sockslist.net",
"shadowsocks.org",
"scdn.co",
"rdio.com",
"meilenrechner.de",
"tietuku.com",
"prfct.co",
"4sqi.net",
"foursquare.com",
"smartproxy.me",
"appcrawlr.com",
"rubiconproject.com",
"abbotsfordairshow.com",
"wistia.net",
"kazuhooku.com",
"cnn.com",
"turner.com",
"telegram.org",
"parsely.com",
"scorecardresearch.com",
"chartbeat.net",
"edgesuite.net",
"appledaily.com.tw",
"cnn.com",
"yibada.com",
"amazon.com",
"amazon.co.jp",
"amazon.de",
"vov.io",
"getlantern.org",
"sopcast.com",
"sopcast.org",
"cedexis-radar.net",
"r9cdn.net",
"bbc.com",
"atdmt.com",
"dwnews.com",
"dw.com",
"staticflickr.com",
"bestvpn.com",
"is.gd",
"github.io",
"zeplin.io",
"lingala.net",
"greendao-orm.com",
"trello.com",
"materialup.com",
"onenote.com",
"letscorp.net",
"duden.de",
"crashlytics.io",
"fabric.io",
"bintray.com",
"zapier.com",
"rfa.org",
"aqicn.org",
"medium.com",
"w3schools.com",
"asana.com",
"travis-ci.com",
"lede-project.org",
"thaiembbeij.org",
"lifemiles.com",
"bstatic.com",
"materialdesignicons.com",
"chinadigitaltimes.net",
"theinitium.com",
"privateinternetaccess.com",
"askubuntu.com",
"azure.com",
"cloudfront.com",
"speakerdeck.com",
"lineageos.org",
"nordvpn.com",
"redditstatic.com",
"openwrt.org",
"airvpn.org",
];

function FindProxyForURL(url, host) {
    for (var i = domains.length - 1; i >= 0; i--) {
       if (dnsDomainIs(host, domains[i])) {
            return proxy_rule;
       };
    };
    return "DIRECT";
}
