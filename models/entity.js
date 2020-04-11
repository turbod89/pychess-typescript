"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var uuid_2 = require("uuid");
exports.uuidv4 = uuid_2.v4;
var Entity = /** @class */ (function () {
    function Entity(data) {
        this._uuid = (data && data['uuid']) || uuid_1.v4();
    }
    Object.defineProperty(Entity.prototype, "uuid", {
        get: function () {
            return this._uuid;
        },
        enumerable: true,
        configurable: true
    });
    Entity.fromDict = function (data) {
        return new Entity(data);
    };
    Entity.prototype.toDict = function () {
        return {
            'uuid': this.uuid,
        };
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map