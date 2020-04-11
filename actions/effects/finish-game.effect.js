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
var FinishGameEffect = /** @class */ (function (_super) {
    __extends(FinishGameEffect, _super);
    function FinishGameEffect(data) {
        var _this = _super.call(this, data) || this;
        _this._winner = null;
        _this.winner = data["winner"] || null;
        return _this;
    }
    Object.defineProperty(FinishGameEffect.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        set: function (winner) {
            this._winner = winner;
        },
        enumerable: true,
        configurable: true
    });
    FinishGameEffect.fromDict = function (data) {
        return new FinishGameEffect(data);
    };
    FinishGameEffect.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: FinishGameEffect.type, winner: this.winner });
        return data;
    };
    FinishGameEffect.prototype.apply = function (game) {
        game.dealer = "w" /* White */;
        game.state = "finished" /* Finished */;
        game.winner = this.winner;
    };
    FinishGameEffect.type = "FinishGame";
    return FinishGameEffect;
}(effect_base_1.Effect));
exports.FinishGameEffect = FinishGameEffect;
//# sourceMappingURL=finish-game.effect.js.map