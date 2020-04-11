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
var DeletePieceEffect = /** @class */ (function (_super) {
    __extends(DeletePieceEffect, _super);
    function DeletePieceEffect(data) {
        var _this = _super.call(this, data) || this;
        _this.setPiece(data['piece']);
        _this._piece = _this.piece;
        return _this;
    }
    Object.defineProperty(DeletePieceEffect.prototype, "piece", {
        get: function () {
            return this._piece;
        },
        enumerable: true,
        configurable: true
    });
    DeletePieceEffect.prototype.setPiece = function (piece) {
        if (piece instanceof models_1.Piece) {
            this._piece = piece.uuid;
        }
        else {
            this._piece = piece;
        }
    };
    DeletePieceEffect.fromDict = function (data) {
        return new DeletePieceEffect(data);
    };
    DeletePieceEffect.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: DeletePieceEffect.type, piece: this.piece });
        return data;
    };
    DeletePieceEffect.prototype.apply = function (game) {
        var piece = game.board.pieces.get(this.piece);
        piece && (piece.position = null);
    };
    DeletePieceEffect.type = 'DeletePiece';
    return DeletePieceEffect;
}(effect_base_1.Effect));
exports.DeletePieceEffect = DeletePieceEffect;
;
//# sourceMappingURL=delete-piece.effect.js.map