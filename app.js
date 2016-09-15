var express = require("express");
var app = express();



/**
 *  Here we define some common routes
 */


/**
 * API endpoint 'GET /'
 * 
 * '(req,res)=> { }' (JS6) is the same as 'function(req,res) { }' (old JS) 
 */
app.get("/",(req,res)=>{

    /**
     * Here happens some logic, for example data fetching or data processing
     */

    // we display short message to the terminal
     console.log("Someone has entered on GET / !"); 

     // we set a header before a response
     res.header('Content-Type', 'text/html');

     // now we send a short message to the user
     res.send("Hello, welcome to the <a href='https://viciqloud.com'>ViciQloud</a> Boilerplate App.");

});
var path = require("path")
app.use("/libs",express.static(path.join(__dirname, 'node_modules')));


/**
 * We can also specify API endpoints like that:
 */
var functionDefiningAdditionalRoutes = require("./app/routes.js");
functionDefiningAdditionalRoutes(app);


var PORT_NUMBER = 8080;
app.listen(PORT_NUMBER,onServerStart);

/**
 * This function (we can call it a 'callback') is called when the server starts
 */
function onServerStart(){
    console.log(`This server runs now at port http://localhost:${PORT_NUMBER}`);
}