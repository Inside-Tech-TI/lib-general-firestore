"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = exports.Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function (key, clas) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (!Singleton.instances.has(key)) {
            Singleton.instances.set(key, new (clas.bind.apply(clas, __spreadArray([void 0], args, false)))());
        }
        return Singleton.instances.get(key);
    };
    Singleton.instances = new Map();
    return Singleton;
}());
