(function(undefined) {
    // Get angular app
    var app = angular.module("App");
 
    app.factory("XLSXReaderService", ['$q', '$rootScope',
        function($q, $rootScope) {
            var service = function(data) {
                angular.extend(this, data);
            };
 
            service.readFile = function(file, showPreview) {
                var deferred = $q.defer();
 
                XLSXReader(file, showPreview, true, function(data){
                    $rootScope.$apply(function() {
                        deferred.resolve(data);
                    });
                });
 
                return deferred.promise;
            };
 
            return service;
        }
    ]);
}).call(this);
