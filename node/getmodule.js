var myModule = require('./module');

myModule.setName("BYVoid");
myModule.seyHello();

var scope = 'global';
var f = function () {
    console.log(scope);
    var scope = 'f';
};
f();