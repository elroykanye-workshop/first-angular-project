var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.myFunc = function () {
        console.log("Implementing an interface " + this.s + " " + this.t);
    };
    return A;
}());
var oT = new A(3, "Elroy Kanye");
oT.myFunc();
