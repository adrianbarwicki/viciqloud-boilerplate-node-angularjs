// we use self-invoking functions so the mainCtrl and apiService do not become global
(function(){
    angular.module("app",[])
    .constant("myApiUrl","http://localhost:8080")
    .service("apiService",apiService)
    .controller("mainCtrl",mainCtrl)
    .value("isLoading",false);


    mainCtrl.$inject=["apiService","isLoading"];

    /**
     * You might notice we used in the controller declaration 'mainCtrl as vm' above. In the following the 'vm' * * references to 'this 'of the function
     */

    function mainCtrl(apiService,isLoading){

        this.title = "Hello World!";
        this.subtitle = "This is small app combining Angular and NodeJS written for educational purposes!";
        this.fetchRandomNumberFromServer = fetchRandomNumberFromServer.bind(this);
        this.isLoading = isLoading;

        // initialise
        fetchRandomNumberFromServer.call(this);

        function fetchRandomNumberFromServer(){
             this.isLoading = true;
             // we use angular.bind so inside the onDataFetched function we could set up this of the mainCtrl
             apiService.fetchRandomNumberFromServer(angular.bind(this,function(randomNumber){
                 this.isLoading = false;
                this.randomNumber = randomNumber;
             }));
        }
    }

    

    apiService.$inject = ["$http","myApiUrl"];
    function apiService($http,myApiUrl){
    
        return {
            fetchRandomNumberFromServer : fetchRandomNumberFromServer
        }

        function fetchRandomNumberFromServer(callback){
            $http.get(myApiUrl+"/get-random-number").then(function(response){
                console.log(response);
                callback(response.data.randomNumber);
            });
        }
    }

}());