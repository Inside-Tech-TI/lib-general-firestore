"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
require("dotenv").config();
var collection = function (col) {
    return lib_1.GeneralFirestore.getInstance(col, process.env.FIRESTORE_PRIVATE_KEY, process.env.FIRESTORE_CLIENT_EMAIL);
};
var collectionTestName = "test_collection";
var firestore = collection(collectionTestName);
var itens = [
    { id: "a", a: 2, b: 1, name: "test1" },
    { id: "b", a: 4, b: 2, name: "test2" },
    { id: "c", a: 6, b: 3, name: "test3" },
    { id: "d", a: 8, b: 4, name: "test4" },
    { id: "e", a: 10, b: 5, name: "test5" },
];
describe("sum module", function () {
    test("Upsert itens", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, itens_1, itens_1_1, item, result, e_1_1;
        var _b, e_1, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 8, 9, 14]);
                    _a = true, itens_1 = __asyncValues(itens);
                    _e.label = 1;
                case 1: return [4 /*yield*/, itens_1.next()];
                case 2:
                    if (!(itens_1_1 = _e.sent(), _b = itens_1_1.done, !_b)) return [3 /*break*/, 7];
                    _d = itens_1_1.value;
                    _a = false;
                    _e.label = 3;
                case 3:
                    _e.trys.push([3, , 5, 6]);
                    item = _d;
                    return [4 /*yield*/, firestore.insert(item)];
                case 4:
                    result = _e.sent();
                    expect(result).not.toBe(null);
                    expect(result.id).toBe(item.id);
                    return [3 /*break*/, 6];
                case 5:
                    _a = true;
                    return [7 /*endfinally*/];
                case 6: return [3 /*break*/, 1];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _e.trys.push([9, , 12, 13]);
                    if (!(!_a && !_b && (_c = itens_1.return))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _c.call(itens_1)];
                case 10:
                    _e.sent();
                    _e.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    }); });
    test("Find itens", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.findWithTotal({}, undefined, { limit: 2, skip: 0 })];
                case 1:
                    result = _a.sent();
                    expect(result.total).toBeGreaterThan(2);
                    expect(result.data.length).toBe(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test("Return null from filterById a non existant id", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.getById("non-existant")];
                case 1:
                    result = _a.sent();
                    expect(result).toBe(null);
                    return [2 /*return*/];
            }
        });
    }); });
});
