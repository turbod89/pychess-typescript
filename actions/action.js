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
Object.defineProperty(exports, "__esModule", { value: true });
var start_game_action_1 = require("./actions/start-game.action");
var action_base_1 = require("./action-base");
var actions = {};
actions[start_game_action_1.StartGameAction.type] = start_game_action_1.StartGameAction;
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.fromDict = function (data) {
        var actionType = actions[data['type']];
        return new actionType(data);
    };
    return Action;
}(action_base_1.Action));
exports.Action = Action;
//# sourceMappingURL=action.js.map