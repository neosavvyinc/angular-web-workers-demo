Neosavvy.Filters.filter('numericExpression',
    ['$parse', function ($parse) {
        return function (data, expression) {
            if (data && data.length) {
                if (expression) {
                    return data.filter(function (item) {
                        if (/\d/.test(item) && !$parse(String(item) + expression)()) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                return data;
            }
            return [];
        };
    }]);