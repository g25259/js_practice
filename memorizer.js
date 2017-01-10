var counter = 0;
var con = 0;
var conM = 0;
var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        counter++;
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
} ();

var fin = function (n) {
    con++;
    return n < 2 ? n : fin(n - 1) + fin(n - 2);
}

var memorizer = function (init, fundemental) {
    var shell = function (n) {
        var result = init[n];
        if (typeof result !== 'number') {
            result = fundemental(n, shell);
            init[n] = result;
        }
        return result;
    }
    return shell;
}

var fibM = memorizer([0, 1], function (n, shell) {
    conM++;
    return shell(n - 1) + shell(n - 2);
})

var fac = memorizer([1,1], function (n, shell) {
    return n * shell(n-1);
})

fibM(10);
console.log(conM);
fibonacci(10);
fin(10);
console.log(counter + " " + con);
