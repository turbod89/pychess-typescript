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
var models_1 = require("../../models");
var action_base_1 = require("../action-base");
var start_game_effect_1 = require("../effects/start-game.effect");
var StartGameAction = /** @class */ (function (_super) {
    __extends(StartGameAction, _super);
    function StartGameAction(data) {
        return _super.call(this, data) || this;
    }
    StartGameAction.fromDict = function (data) {
        return new StartGameAction(data);
    };
    StartGameAction.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: StartGameAction.type });
        return data;
    };
    StartGameAction.prototype.validate = function (game) {
        // TODO
    };
    StartGameAction.prototype.execute = function (game) {
        return [
            new start_game_effect_1.StartGameEffect({
                uuid: models_1.uuidv4(),
            }),
        ];
    };
    StartGameAction.type = 'StartGame';
    return StartGameAction;
}(action_base_1.Action));
exports.StartGameAction = StartGameAction;
;
//# sourceMappingURL=start-game.action.js.map