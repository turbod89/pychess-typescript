"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __importDefault(require("./engine"));
function advanceMovement(target, propertyName, propertyDescriptor) {
    var method = propertyDescriptor.value;
    propertyDescriptor.value = function (game, piece, targetPosition) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        var engine = engine_1.default.getInstance();
        var originalPositions = [[piece, piece.position]];
        var obstacle = game.board.getPieceInPosition(targetPosition);
        if (!!obstacle) {
            originalPositions.push([obstacle, obstacle.position]);
            obstacle.position = null;
        }
        // check capture en passant
        if (engine.isMovementEnPassantCapture(game, piece, targetPosition)) {
            var obstacle_1 = game.board.getPieceInPosition(game.enPassant);
            if (!obstacle_1) {
                throw Error("En passant target does not exists.");
            }
            originalPositions.push([obstacle_1, obstacle_1.position]);
            obstacle_1.position = null;
        }
        // check castlings
        if (engine.isMovementACastling(game, piece, targetPosition)) {
            var movement = engine.getRookMovementOnCastling(game, piece, targetPosition);
            var obstacle_2 = movement["piece"];
            originalPositions.push([obstacle_2, obstacle_2.position]);
            obstacle_2.position = null;
        }
        // move piece
        piece.position = targetPosition;
        // change dealer
        game.dealer = engine.getOpponentColor(piece.color);
        // call method
        var result = method.apply(this, __spreadArrays([game, piece, targetPosition], args));
        // reset dealer
        game.dealer = piece.color;
        // reset positions
        originalPositions.forEach(function (_a) {
            var piece = _a[0], position = _a[1];
            return (piece.position = position);
        });
        // return method result
        return result;
    };
    return propertyDescriptor;
}
exports.default = advanceMovement;
;
//# sourceMappingURL=advance-movement.decorator.js.map