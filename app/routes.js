
/**
 * This block contains the code which is going to be exposed as module 
 * then you can import this function with require("routes.js") ... (mark the relative path)
 */
module.exports = functionToBeExported;

function functionToBeExported(expressApp){

        expressApp.get("/angularapp",(req,res)=>{
            /**
             * Send the ./public/app.html file to the user
             */
            
            // resolving the paths for security issues
            var path = require('path');
            res.sendFile(path.resolve(__dirname+"/../public/app.html"));
        });



        /**
         * Another API path that when requested, responses with random number
         */
        expressApp.get("/get-random-number",function(req,res){
            var randomNumber = Math.floor((Math.random()*10000));
            res.send({randomNumber : randomNumber})
        })

}