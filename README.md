**ViciQloud Boilerplate**
Boilerplate with NodeJS server and AngularJS written for educational purposes.

** It presents how to launch a micro server in NodeJS with Express framework 
** It shows the definition on the Api endpoints 
** It shows how the modules can be exported and exported 
** It presents an example communication between Client AngularApp and NodeJS Server 
** It demonstrates an example use of one-way binding in AngularJS 
** It shows use of controllers without $scope (the 'angular2' way) 

## Startup
```
// clone the repository to your local env.
git clone https://github.com/viciqloud/viciqloud-boilerplate-node-angularjs

// go to the cloned repo
cd viciqloud-boilerplate-node-angularjs

// install dependecies from ./package.json
npm install

// run the server
node server.js
```

The server starts at port 8080.

## What happens it this code?
1. You request a resource from the API endpoint GET /angularapp.
1. The endpoint is declared in routes.js
1. It sends you a static file app.html.
1. When the app.html is downloaded by the client, the html is rendered and JS is executed.
1. The client-side JS initialises angular module.
1. Angular module request another resource from the server at GET /get-random-number.
1. Back-end (Express app) or server receives the request, waits 1 sec and respondes with random number.
1. Client-side receives the response from the server and writes in into the controller property, which invokes refresh on the screen.

## Author
Adrian Barwicki
<a href="https://viciqloud.com" target="_blank">ViciQloud.com</a>

## Licence
MIT