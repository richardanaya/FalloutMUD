var util = require('./lib/util');

var port = process.env.PORT || 9999;
var server = util.configureServer();

server.get('/favicon.ico',
    function(req, res) {
        res.redirect('/images/favicon.ico');
    }
);

server.get(/^.*$/,
    function(req, res) {
        res.render('index.jinjs',{ name: "Richard", languages: [{name:"English",code:"en"},{name:"Spanish",code:"es"}] });
    }
);

server.listen(port);
