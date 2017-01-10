function User(name, pwd) {
    var self = this instanceof User
        ? this
        : Object.create(User.prototype);
    self.name = name;
    self.getPwd = function() {
        return pwd;
    }
    return self;
}

User.prototype.getName = function () {
    return this.name;
}

User.prototype.toString = function () {
    return "[User: " + this.name + "]";
}

function VIPUser(name, pwd, id) {
    var self = this instanceof User
        ? this
        : Object.create(User.prototype);
    User.call(this, name, pwd);
    self.id = id;
    return self;
}

VIPUser.prototype = Object.create(User.prototype);

var user = new User("John", "aa");
var user_no_new = User("David", "aa");
var vip = new VIPUser("Vince", "bb", 200868);
console.log("User_no_new instance (handled):");
console.log(user_no_new);
console.log("User instance: ");
console.log(user);
console.log("Prototype of user: ");
console.log(Object.getPrototypeOf(user));
console.log("User.prototype: ");
console.log(User.prototype);
console.log("Prototype of User instance equals User.prototype: " );
console.log(Object.getPrototypeOf(user) === User.prototype);
console.log("User._proto_ equals User.prototype (depends on engine):");
console.log(user.__proto__ === User.prototype);
console.log("VIPUser:");
console.log(vip);
console.log("Prototype of VIPUser:");
console.log(Object.getPrototypeOf(vip));
console.log("Prototype of prototype of VIPUser equals User:");
console.log(Object.getPrototypeOf(
        Object.getPrototypeOf(vip)) === User.prototype);
console.log("Object.create(user):");
console.log(Object.create(user));
console.log(object);
console.log(VIPUser.prototype === User.prototype);