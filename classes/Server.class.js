'use strict';

module.exports = class Server {
  constructor() {
    // save our settings to this
    this.settings = g.settings.Server;

    // add express to this
    this.app = m.express();

    // run the setup method
    this.setup();
  }

  setup() {
    // tell express to use middleware to parse JSON
    this.app.use(m.bodyparser.json());
    // declare a webroot
    this.app.use(
      m.express.static(
        m.path.join(g.settings.appRoot, this.settings.webroot)
      )
    );

    // compress all files using gzip
    this.app.use(m.compression());

    // parse all request cookies
    this.app.use(m.cookieparser());

    // parse all urlencoded request body data
    // for example from "standard" HTML forms
    this.app.use(m.bodyparser.urlencoded({extended: false}));

    // listen on port 3000
    var me = this;

//==============================================================================
//==============================================================================
    
//var express        =         require("express");
//var bodyParser     =         require("body-parser");    
//    
//this.app.use(bodyParser.urlencoded({ extended: false }));
//this.app.use(bodyParser.json());

//this.app.get('/',function(req,res){
//  res.sendfile("index.html");
//});

this.app.post('/nodeTest', function (req, res) {
    //
    var param1 = req.body.param1;
    var param2 = req.body.param2;
    //
    res.end("Server: Param1 = " + param1 + ", Param2 = " + param2);
    });


//==============================================================================
//==============================================================================
    
    this.app.listen(this.settings.port,  function() {
      console.log("Server listening on port "+me.settings.port);
    });
  }
}