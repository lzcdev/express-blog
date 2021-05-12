var setttings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
    // serverConfig = require('mongodb').serverConfig

module.exports = new Db(settings.db, new Server(setttings.host, setttings.port), {safe: true});    
// module.exports = new Db(setttings.db, serverConfig.host, this.serverConfig.port,{safe: true})