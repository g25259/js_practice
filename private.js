function MyCat(prop) {
    var name = prop && prop.name || 'unknown';
    var say = prop && prop.s || 'unknown';
    this.saying = function () {
        console.log(say);
    }
    this.getName = function () {
        return name;
    }
}
function NewCat(prop) {
    var that = new MyCat(prop);
    that.test = function() {
        console.log("test");
    }
    return that;
}

var cat1 = new MyCat({name:'cat'});
var cat2 = new NewCat();
console.log(cat1.say + " " + cat2.say);
cat1.saying();
cat2.saying();
console.log(cat1.name + "  " + cat2.name);
console.log(cat1.getName() + " " + cat2.getName());
cat2.test();
