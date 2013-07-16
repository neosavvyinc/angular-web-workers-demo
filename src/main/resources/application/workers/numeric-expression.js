function evaluate(number, expression) {
    if (expression) {
        number = parseFloat(number);
        expression = expression.replace(/\s/g, '');
        var operatorLess = parseFloat(expression.replace(/<|>|=|/g, ''));
        if (/=/g.test(expression)) {
            return number === operatorLess;
        } else if (/>/g.test(expression)) {
            return number > operatorLess;
        } else if (/</g.test(expression)) {
            return number < operatorLess;
        }
    }
    return true;
}

addEventListener('message', function (e) {
    var myData = e.data.data.filter(function (item) {
        if (/\d/.test(item) && evaluate(item, e.data.expression)) {
            return false;
        } else {
            return true;
        }
    });
    postMessage({data:myData});
});