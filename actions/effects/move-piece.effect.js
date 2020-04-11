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
var effect_base_1 = require("../effect-base");
var MovePieceEffect = /** @class */ (function (_super) {
    __extends(MovePieceEffect, _super);
    function MovePieceEffect(data) {
        var _this = _super.call(this, data) || this;
        _this.setPiece(data['piece']);
        _this._piece = _this.piece;
        _this._position = data['position'];
        return _this;
    }
    Object.defineProperty(MovePieceEffect.prototype, "piece", {
        get: function () {
            return this._piece;
        },
        enumerable: true,
        configurable: true
    });
    MovePieceEffect.prototype.setPiece = function (piece) {
        if (piece instanceof models_1.Piece) {
            this._piece = piece.uuid;
        }
        else {
            this._piece = piece;
        }
    };
    Object.defineProperty(MovePieceEffect.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    MovePieceEffect.fromDict = function (data) {
        return new MovePieceEffect(data);
    };
    MovePieceEffect.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: MovePieceEffect.type, piece: this.piece, position: this.position });
        return data;
    };
    MovePieceEffect.prototype.apply = function (game) {
        var piece = game.board.pieces.get(this.piece);
        if (!piece) {
            return;
        }
        piece.position = this.position;
        // disabele castlings
        if (piece.type == "r" /* Rook */ || piece.type == "k" /* King */) {
            game.disabledCastlings.add(piece.uuid);
        }
        // set on passant
        if (piece.type == "p" /* Pawn */
            && piece.position
            && this.position
            && Math.abs(piece.position[0] - this.position[0]) == 2) {
            game.enPassant = [this.position[0], this.position[1]];
        }
        else {
            game.enPassant = null;
        }
    };
    MovePieceEffect.type = 'MovePiece';
    return MovePieceEffect;
}(effect_base_1.Effect));
exports.MovePieceEffect = MovePieceEffect;
;
//# sourceMappingURL=move-piece.effect.js.map