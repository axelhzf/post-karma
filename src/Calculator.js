(function () {
    "use strict";

    var Calculator = function () {};

    Calculator.prototype = {
        add : function (a, b) {
            return a + b;
        },

        mult : function (a, b) {
            return a * b;
        }
    };

    window.Calculator = Calculator;

}());