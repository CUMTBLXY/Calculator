var HClass = function(){}
var fnTest = /\b_super\b/;
HClass.extend = function(props){
    var _super = this.prototype;
    var prototype = Object.create(_super);
    var desc = { writable: true, enumerable: false, configurable: true };
    function Class(){
        if (this.ctor)
            this.ctor.apply(this, arguments);
    }
    Class.prototype = prototype;
    for(var idx = 0, li = arguments.length; idx < li; ++idx) {
        var prop = arguments[idx];
        for (var name in prop) {
            var isFunc = (typeof prop[name] === "function");
            var override = (typeof _super[name] === "function");
            var hasSuperCall = fnTest.test(prop[name]);

            if (isFunc && override && hasSuperCall) {
                desc.value = (function (name, fn) {
                    return function () {
                        var tmp = this._super;
                        this._super = _super[name];
                        var ret = fn.apply(this, arguments);
                        this._super = tmp;
                        return ret;
                    };
                })(name, prop[name]);
                Object.defineProperty(prototype, name, desc);
            } else if (isFunc) {
                desc.value = prop[name];
                Object.defineProperty(prototype, name, desc);
            } else {
                prototype[name] = prop[name];
            }
        }
    }
    Class.extend=HClass.extend;
    return Class;
}