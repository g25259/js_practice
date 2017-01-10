function C() {}
C.prototype = null;
var c = new C();
console.log("C.prototype = null, but Object.getPrototypeof(c) = ");
console.log(Object.getPrototypeOf(c));
console.log("for s in c print nothing, but 'toString' in c =");
console.log("toString" in C);

console.log("---Item 46---");
console.log("(0.8 + 0.7 + 0.6 + 0.9) / 4");
console.log((0.8 + 0.7 + 0.6 + 0.9) / 4);
console.log("(0.6 + 0.8 + 0.7 + 0.9) / 4");
console.log((0.6 + 0.8 + 0.7 + 0.9) / 4);
console.log("-------------");


console.log("---Item 47---");
console.log(Object.defineProperty(Object.prototype, "Test",{
    value: "test",
    writable: true,
    enumerable: true,  //Here
    configurable: true
}));
for (var property in Object) {
    console.log(property);
}
console.log("--------------");


console.log("---Item 48---");
var abc = {a: 1, b: 2, c: 3};
for (var i in abc) {
    //console.log(abc[i]);
    console.log(abc.a);
    abc[i] = 2;
}
console.log(abc.a);
console.log("--------------");


console.log("---Item 49---");
var scores = [99, 13, 24];
var total = 0;
for (var score in scores) {
    total += score;
}
console.log(total);