var express = require('express');
require("jinjs").registerExtension(".tpl");
var pwilang = require("pwilang");
require("jinjs").registerExtension(".pwx", function (txt) {
    return pwilang.parse(txt);
});


var configureServer = function() {
    var server = express.createServer();

    server.configure(
        function() {
            server.use(express.static(__dirname + '/../static/'));
            server.set("views", __dirname + '/../pages/');
            server.set("view options", { jinjs_pre_compile: function (str) { return parse_pwilang(str); } });
            server.set("view options", { layout: false });
        }
    );
    return server;
};

exports.configureServer = configureServer;


