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
    return lib_1.GeneralFirestore.getInstance(col
    // process.env.FIRESTORE_PRIVATE_KEY,
    // process.env.FIRESTORE_CLIENT_EMAIL
    );
};
var collectionTestName = "test_collection";
var firestore = collection(collectionTestName);
var itens = [
    {
        id: "a",
        a: 2,
        b: 1,
        name: "test1",
        hasAccess: true,
        type: "a",
        itens: ["a", "b", "c"],
    },
    {
        id: "b",
        a: 4,
        b: 2,
        name: "test2",
        hasAccess: true,
        type: "a",
        itens: ["a", "b"],
    },
    {
        id: "c",
        a: 6,
        b: 3,
        name: "test3",
        hasAccess: true,
        type: "b",
        itens: ["a", "b"],
    },
    {
        id: "d",
        a: 8,
        b: 4,
        name: "test4",
        hasAccess: true,
        type: "b",
        itens: ["a", "b"],
    },
    {
        id: "e",
        a: 10,
        b: 5,
        name: "test5",
        hasAccess: true,
        type: "b",
        itens: ["a", "b"],
    },
    {
        id: "f",
        a: 11,
        b: 6,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a", "b"],
    },
    {
        id: "g",
        a: 10,
        b: 7,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a", "b"],
    },
    {
        id: "h",
        a: 10,
        b: 8,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a", "b"],
    },
    {
        id: "i",
        a: 10,
        b: 9,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a"],
    },
    {
        id: "j",
        a: 10,
        b: 10,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a"],
    },
    {
        id: "k",
        a: 10,
        b: 11,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a"],
    },
    {
        id: "l",
        a: 10,
        b: 12,
        name: "test5",
        hasAccess: false,
        type: "b",
        itens: ["a"],
    },
    {
        id: "m",
        a: 10,
        b: 13,
        name: "test5",
        hasAccess: false,
        type: "c",
        itens: ["a"],
    },
];
describe("Upsert and find", function () {
    test("Upsert itens", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, itens_1, itens_1_1, item, result, e_1_1;
        var _b, e_1, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 6, 7, 12]);
                    _a = true, itens_1 = __asyncValues(itens);
                    _e.label = 1;
                case 1: return [4 /*yield*/, itens_1.next()];
                case 2:
                    if (!(itens_1_1 = _e.sent(), _b = itens_1_1.done, !_b)) return [3 /*break*/, 5];
                    _d = itens_1_1.value;
                    _a = false;
                    item = _d;
                    return [4 /*yield*/, firestore.insert(item)];
                case 3:
                    result = _e.sent();
                    expect(result).not.toBe(null);
                    expect(result.id).toBe(item.id);
                    _e.label = 4;
                case 4:
                    _a = true;
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _e.trys.push([7, , 10, 11]);
                    if (!(!_a && !_b && (_c = itens_1.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(itens_1)];
                case 8:
                    _e.sent();
                    _e.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
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
    test("Find itens by array", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.find({ itens: { $all: ["c"] } }, undefined)];
                case 1:
                    result = _a.sent();
                    expect(result.length).toBe(1);
                    expect(result[0].id).toBe("a");
                    return [2 /*return*/];
            }
        });
    }); });
    test("Find itens by array contains any itens", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.find({ itens: { $all: ["b", "c"] }, hasAccess: true }, undefined)];
                case 1:
                    result = _a.sent();
                    expect(result.length).toBeGreaterThan(2);
                    return [2 /*return*/];
            }
        });
    }); });
    test("Find itens with filter and total", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.findWithTotal({ type: "b" }, undefined, { limit: 3, skip: 0 })];
                case 1:
                    result = _a.sent();
                    expect(result.total).toBe(10);
                    expect(result.data.length).toBe(3);
                    return [2 /*return*/];
            }
        });
    }); });
    test("orderBy name asc", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.findWithTotal({}, undefined, { limit: 3, skip: 0 }, "id")];
                case 1:
                    result = _a.sent();
                    expect(result.total).toBeGreaterThan(4);
                    expect(result.data[1].name).toBe(itens[1].name);
                    return [2 /*return*/];
            }
        });
    }); });
    test("orderBy name desc", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.findWithTotal({}, undefined, { limit: 93, skip: 0 }, "id", "desc")];
                case 1:
                    result = _a.sent();
                    expect(result.total).toBeGreaterThan(4);
                    expect(result.data[1].name).toBe(itens[itens.length - 2].name);
                    return [2 /*return*/];
            }
        });
    }); });
    test("orderBy name desc without total", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, firestore.find({}, undefined, { limit: 93, skip: 0 }, "id", "desc")];
                case 1:
                    result = _a.sent();
                    expect(result.length).toBeGreaterThan(1);
                    expect(result[1].name).toBe(itens[itens.length - 2].name);
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
