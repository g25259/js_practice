function C() {}
C.prototype = null;
var c = new C();
console.log("C.prototype = null, but Object.getPrototypeof(c) = ");
console.log(Object.getPrototypeOf(c));
console.log("for s in c print nothing, but 'toString' in c =");
console.log("toString" in C);