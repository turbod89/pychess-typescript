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
var start_game_effect_1 = require("./effects/start-game.effect");
var effect_base_1 = require("./effect-base");
var change_turn_effect_1 = require("./effects/change-turn.effect");
var move_piece_effect_1 = require("./effects/move-piece.effect");
var delete_piece_effect_1 = require("./effects/delete-piece.effect");
var finish_game_effect_1 = require("./effects/finish-game.effect");
var effects = {};
effects[start_game_effect_1.StartGameEffect.type] = start_game_effect_1.StartGameEffect;
effects[change_turn_effect_1.ChangeTurnEffect.type] = change_turn_effect_1.ChangeTurnEffect;
effects[move_piece_effect_1.MovePieceEffect.type] = move_piece_effect_1.MovePieceEffect;
effects[delete_piece_effect_1.DeletePieceEffect.type] = delete_piece_effect_1.DeletePieceEffect;
effects[finish_game_effect_1.FinishGameEffect.type] = finish_game_effect_1.FinishGameEffect;
var Effect = /** @class */ (function (_super) {
    __extends(Effect, _super);
    function Effect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Effect.fromDict = function (data) {
        var effectType = effects[data['type']];
        return new effectType(data);
    };
    return Effect;
}(effect_base_1.Effect));
exports.Effect = Effect;
//# sourceMappingURL=effect.js.map