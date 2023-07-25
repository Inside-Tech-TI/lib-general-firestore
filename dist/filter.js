"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByPropertyWithTotal = exports.filterByProperty = exports.getConditionalValue = exports.getCondition = exports.sum = void 0;
var conditions_1 = require("./conditions");
var sum = function (a, b) { return a + b; };
exports.sum = sum;
var getCondition = function (alias) {
    return conditions_1.conditionalVarsMap.get(alias);
};
exports.getCondition = getCondition;
var getConditionalValue = function (arg) {
    var conditionalValue = {
        conditional: "==",
        value: arg,
    };
    if (Array.isArray(arg)) {
        return {
            conditional: "in",
            value: arg,
        };
    }
    if (arg == null) {
        return {
            conditional: "==",
            value: arg,
        };
    }
    for (var key in arg) {
        var conditional = (0, exports.getCondition)(key);
        if (conditional) {
            return {
                conditional: conditional,
                value: arg[key],
            };
        }
    }
    return conditionalValue;
};
exports.getConditionalValue = getConditionalValue;
var filterByProperty = function (firestore, collection, filter, select, offset, orderBy) { return __awaiter(void 0, void 0, void 0, function () {
    var collectionReference, query, key, conditionalValue, selectFilter, response, items;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                collectionReference = firestore.collection(collection);
                if (orderBy) {
                    collectionReference.orderBy(orderBy);
                }
                query = collectionReference
                    .limit((_a = offset === null || offset === void 0 ? void 0 : offset.limit) !== null && _a !== void 0 ? _a : 30)
                    .offset((_b = offset === null || offset === void 0 ? void 0 : offset.skip) !== null && _b !== void 0 ? _b : 0);
                for (key in filter) {
                    conditionalValue = (0, exports.getConditionalValue)(filter[key]);
                    query = query.where(key, (_c = conditionalValue.conditional) !== null && _c !== void 0 ? _c : "==", conditionalValue.value);
                }
                if (select) {
                    selectFilter = Object.keys(select);
                    query = query.select.apply(query, selectFilter);
                }
                if (!offset) {
                    offset = {
                        skip: 0,
                        limit: 30,
                    };
                }
                return [4 /*yield*/, query.get()];
            case 1:
                response = _d.sent();
                items = response.docs.map(function (doc) {
                    var data = doc.data();
                    return __assign({ id: doc.id }, data);
                });
                return [2 /*return*/, items];
        }
    });
}); };
exports.filterByProperty = filterByProperty;
var filterByPropertyWithTotal = function (firestore, collection, filter, select, offset, orderBy) { return __awaiter(void 0, void 0, void 0, function () {
    var collectionReference, query, countQuery, key, conditionalValue, selectFilter, total, response, items;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                collectionReference = firestore.collection(collection);
                if (orderBy) {
                    collectionReference.orderBy(orderBy);
                }
                query = collectionReference
                    .limit((_a = offset === null || offset === void 0 ? void 0 : offset.limit) !== null && _a !== void 0 ? _a : 30)
                    .offset((_b = offset === null || offset === void 0 ? void 0 : offset.skip) !== null && _b !== void 0 ? _b : 0);
                countQuery = collectionReference;
                for (key in filter) {
                    conditionalValue = (0, exports.getConditionalValue)(filter[key]);
                    query = query.where(key, (_c = conditionalValue.conditional) !== null && _c !== void 0 ? _c : "==", conditionalValue.value);
                }
                if (select) {
                    selectFilter = Object.keys(select);
                    query = query.select.apply(query, selectFilter);
                    countQuery = countQuery.select.apply(countQuery, selectFilter);
                }
                if (!offset) {
                    offset = {
                        skip: 0,
                        limit: 30,
                    };
                }
                return [4 /*yield*/, countQuery.count().get()];
            case 1:
                total = (_d.sent()).data().count;
                return [4 /*yield*/, query.get()];
            case 2:
                response = _d.sent();
                items = response.docs.map(function (doc) {
                    var data = doc.data();
                    return __assign({ id: doc.id }, data);
                });
                return [2 /*return*/, { total: total, data: items }];
        }
    });
}); };
exports.filterByPropertyWithTotal = filterByPropertyWithTotal;
