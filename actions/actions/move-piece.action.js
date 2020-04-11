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
var move_piece_effect_1 = require("../effects/move-piece.effect");
var delete_piece_effect_1 = require("../effects/delete-piece.effect");
var change_turn_effect_1 = require("../effects/change-turn.effect");
var engine_1 = require("../../engine");
var MovePieceAction = /** @class */ (function (_super) {
    __extends(MovePieceAction, _super);
    function MovePieceAction(data) {
        var _this = _super.call(this, data) || this;
        _this.setPiece(data["piece"]);
        _this._piece = _this.piece; // what a hack
        _this._position = data["position"];
        return _this;
    }
    Object.defineProperty(MovePieceAction.prototype, "piece", {
        get: function () {
            return this._piece;
        },
        enumerable: true,
        configurable: true
    });
    MovePieceAction.prototype.setPiece = function (piece) {
        if (piece instanceof models_1.Piece) {
            this._piece = piece.uuid;
        }
        else {
            this._piece = piece;
        }
    };
    Object.defineProperty(MovePieceAction.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    MovePieceAction.fromDict = function (data) {
        return new MovePieceAction(data);
    };
    MovePieceAction.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: MovePieceAction.type, piece: this.piece, position: this.position });
        return data;
    };
    MovePieceAction.prototype.validate = function (game) {
        // TODO
    };
    MovePieceAction.prototype.execute = function (game) {
        var effects = [
            new move_piece_effect_1.MovePieceEffect({
                uuid: models_1.uuidv4(),
                piece: this.piece,
                position: this.position
            })
        ];
        var piece = game.board.pieces.get(this.piece);
        if (!piece) {
            throw Error("Piece with UUID '" + this.piece + "' does not exist.");
        }
        var obstacle = game.board.getPieceInPosition(this.position);
        if (!!obstacle) {
            effects.splice(0, 0, new delete_piece_effect_1.DeletePieceEffect({
                uuid: models_1.uuidv4(),
                piece: obstacle.uuid
            }));
        }
        // check on passant
        else if (engine_1.engine.isMovementEnPassantCapture(game, piece, this.position)) {
            var obstacle_1 = game.board.getPieceInPosition(game.enPassant);
            if (!obstacle_1) {
                throw Error("En passant target does not exists.");
            }
            effects.splice(0, 0, new delete_piece_effect_1.DeletePieceEffect({
                uuid: models_1.uuidv4(),
                piece: obstacle_1.uuid
            }));
        }
        // check castlings
        else if (engine_1.engine.isMovementACastling(game, piece, this.position)) {
            var rookMovement = engine_1.engine.getRookMovementOnCastling(game, piece, this.position);
            effects.push(new move_piece_effect_1.MovePieceEffect({
                uuid: models_1.uuidv4(),
                piece: rookMovement.piece.uuid,
                position: rookMovement.position
            }));
        }
        effects.push(new change_turn_effect_1.ChangeTurnEffect({}));
        return effects;
    };
    MovePieceAction.type = "MovePiece";
    return MovePieceAction;
}(action_base_1.Action));
exports.MovePieceAction = MovePieceAction;
//# sourceMappingURL=move-piece.action.js.map