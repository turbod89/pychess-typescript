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
var StartGameEffect = /** @class */ (function (_super) {
    __extends(StartGameEffect, _super);
    function StartGameEffect(data) {
        return _super.call(this, data) || this;
    }
    StartGameEffect.fromDict = function (data) {
        return new StartGameEffect(data);
    };
    StartGameEffect.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: StartGameEffect.type });
        return data;
    };
    StartGameEffect.prototype.apply = function (game) {
        game.dealer = "w" /* White */;
        game.state = "started" /* Started */;
    };
    StartGameEffect.type = 'StartGame';
    return StartGameEffect;
}(effect_base_1.Effect));
exports.StartGameEffect = StartGameEffect;
;
//# sourceMappingURL=start-game.effect.js.map