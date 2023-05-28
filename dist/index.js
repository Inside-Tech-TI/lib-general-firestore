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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralFirestore = exports.getGeneralFirestoreInstance = void 0;
var firestore_1 = require("@google-cloud/firestore");
var handle_update_1 = require("./handle-update");
var handle_find_1 = require("./handle-find");
var handle_insert_1 = require("./handle-insert");
var singleton_1 = require("./singleton");
var getGeneralFirestoreInstance = function (collection, privateKey, clientEmail) {
    return singleton_1.Singleton.getInstance("firestore-wrapper-".concat(collection).concat(privateKey ? "-".concat(privateKey) : "").concat(clientEmail ? "-".concat(clientEmail) : ""), GeneralFirestore, collection, privateKey, clientEmail);
};
exports.getGeneralFirestoreInstance = getGeneralFirestoreInstance;
var GeneralFirestore = /** @class */ (function () {
    function GeneralFirestore(collection, privateKey, clientEmail) {
        this.getFirestoreInstance = function (privateKey, clientEmail) {
            var key = privateKey && clientEmail
                ? "".concat(privateKey).concat(clientEmail)
                : "".concat(process.env.FIRESTORE_PRIVATE_KEY).concat(process.env.FIRESTORE_CLIENT_EMAIL);
            return singleton_1.Singleton.getInstance(key, firestore_1.Firestore, {
                credentials: {
                    private_key: privateKey || process.env.FIRESTORE_PRIVATE_KEY,
                    client_email: clientEmail || process.env.FIRESTORE_CLIENT_EMAIL,
                },
            });
        };
        this.collection = collection;
        this.fireStoreInstance = this.getFirestoreInstance(privateKey, clientEmail);
    }
    GeneralFirestore.getInstance = function (collection, privateKey, clientEmail) {
        return (0, exports.getGeneralFirestoreInstance)(collection, privateKey, clientEmail);
    };
    GeneralFirestore.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, handle_find_1.filterById)(this.fireStoreInstance, this.collection, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GeneralFirestore.prototype.find = function (filter, select, offset) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, handle_find_1.handleFind)(this.fireStoreInstance, this.collection, filter, select, offset)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GeneralFirestore.prototype.insert = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, handle_insert_1.handleInsert)(this.fireStoreInstance, this.collection, data)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, { id: result.id }];
                }
            });
        });
    };
    GeneralFirestore.prototype.update = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, handle_update_1.handleUpdate)(this.fireStoreInstance, this.collection, data, data.id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GeneralFirestore.prototype.healthCheck = function () {
        return !!this.fireStoreInstance;
    };
    return GeneralFirestore;
}());
exports.GeneralFirestore = GeneralFirestore;
