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
var effect_base_1 = require("../effect-base");
var ChangeTurnEffect = /** @class */ (function (_super) {
    __extends(ChangeTurnEffect, _super);
    function ChangeTurnEffect(data) {
        return _super.call(this, data) || this;
    }
    ChangeTurnEffect.fromDict = function (data) {
        return new ChangeTurnEffect(data);
    };
    ChangeTurnEffect.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: ChangeTurnEffect.type });
        return data;
    };
    ChangeTurnEffect.prototype.apply = function (game) {
        if (game.dealer == "w" /* White */) {
            game.dealer = "b" /* Black */;
        }
        else {
            game.dealer = "w" /* White */;
        }
    };
    ChangeTurnEffect.type = 'ChangeTurn';
    return ChangeTurnEffect;
}(effect_base_1.Effect));
exports.ChangeTurnEffect = ChangeTurnEffect;
;
//# sourceMappingURL=change-turn.effect.js.map