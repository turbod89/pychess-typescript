"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var action_base_1 = require("./action-base");
var Effect = /** @class */ (function (_super) {
    __extends(Effect, _super);
    function Effect(data) {
        return _super.call(this, data) || this;
    }
    Effect.fromDict = function (data) {
        return new Effect(data);
    };
    Effect.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: Effect.type });
        return data;
    };
    Effect.prototype.apply = function (game) {
        throw new action_base_1.ActionError('Method apply not implemented.');
    };
    ;
    Effect.type = 'Base';
    return Effect;
}(models_1.Entity));
exports.Effect = Effect;
;
//# sourceMappingURL=effect-base.js.map