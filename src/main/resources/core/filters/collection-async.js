Neosavvy.Filters.filter('numericExpressionAsync',
    ['$parse', '$q', function ($parse, $q) {
        var deferred;
        var worker = new Worker('application/workers/numeric-expression.js');
        worker.addEventListener('message', function (e) {
            deferred.resolve(e.data);
        }, false);
        worker.addEventListener('error', function (e) {
            deferred.resolve([]);
            console.log(e.data)
        }, false);

        return function (data, expression) {
            deferred = $q.defer();
            if (data && data.length) {
                if (expression) {
                    worker.postMessage({
                        data:data,
                        expression:expression
                    });
                    return deferred.promise;
                }
                return data;
            }
            return [];
        };
    }]);