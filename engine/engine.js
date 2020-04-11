"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var advance_movement_decorator_1 = __importDefault(require("./advance-movement.decorator"));
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.getInstance = function () {
        if (!Engine.instance) {
            Engine.instance = new Engine();
        }
        return Engine.instance;
    };
    Engine.prototype.getOpponentColor = function (color) {
        if (color == "w" /* White */) {
            return "b" /* Black */;
        }
        return "w" /* White */;
    };
    Engine.prototype.isPositionInBoard = function (board, position) {
        return (!!position
            && position[0] >= 0
            && position[0] < board.rows
            && position[1] >= 0
            && position[1] < board.cols);
    };
    Engine.prototype.isMovementEnPassantCapture = function (game, piece, targetPosition) {
        if (piece.type == "p" /* Pawn */ || !targetPosition) {
            return false;
        }
        var colorDirection = 1;
        if (piece.color == "b" /* Black */) {
            colorDirection = -1;
        }
        return (!!game.enPassant &&
            game.enPassant[0] == targetPosition[0] - colorDirection &&
            game.enPassant[1] == targetPosition[1]);
    };
    Engine.prototype.isMovementACastling = function (game, piece, targetPosition) {
        if (piece.type != "k" /* King */ || !targetPosition || !piece.position) {
            return false;
        }
        return ((piece.position[1] == 4 && targetPosition[1] == 6) ||
            (piece.position[1] == 4 && targetPosition[1] == 2));
    };
    Engine.prototype.getRookMovementOnCastling = function (game, piece, targetPosition) {
        if (piece.type != "k" /* King */ || !targetPosition || !piece.position) {
            throw Error("Movement is not a castling.");
        }
        if (piece.position[1] == 4 && targetPosition[1] == 6) {
            var rook = game.board.getPieceInPosition([targetPosition[0], 7]);
            if (!rook) {
                throw Error('Castling movement has not a rook at the correct position.');
            }
            return {
                piece: rook,
                position: [targetPosition[0], 5]
            };
        }
        if (piece.position[1] == 4 && targetPosition[1] == 2) {
            var rook = game.board.getPieceInPosition([targetPosition[0], 0]);
            if (!rook) {
                throw Error('Castling movement has not a rook at the correct position.');
            }
            return {
                piece: rook,
                position: [targetPosition[0], 3]
            };
        }
        throw Error("Movement is not a castling.");
    };
    Engine.prototype.getPieceValidMovements = function (game, piece) {
        var _this = this;
        var positions = this.getPieceReachablePositions(game, piece);
        var positionsToDelete = new models_1.PiecePositionSet();
        positions.forEach(function (position) {
            if (_this.doesMovementLeadToOwnCheck(game, piece, position)) {
                positionsToDelete.add(position);
            }
        });
        positions.delete(positionsToDelete);
        return positions;
    };
    Engine.prototype.doesMovementLeadToOwnCheck = function (game, piece, targetPosition) {
        var king = Array.from(game.board.pieces.values()).filter(function (curr) { return curr.color == piece.color && curr.type == "k" /* King */; })[0] || null;
        if (!king) {
            throw Error("Team '" + piece.color + "' has not a king piece!.");
        }
        var opponentColor = this.getOpponentColor(piece.color);
        var attackedPositions = this.getColorAttackablePositions(game, opponentColor);
        return attackedPositions.has(king.position);
    };
    Engine.prototype.getColorAttackablePositions = function (game, color) {
        var _this = this;
        var positions = new models_1.PiecePositionSet();
        game.board.pieces.forEach(function (piece) {
            if (piece.color == color) {
                positions.add(_this.getPieceAttackablePositions(game, piece));
            }
        });
        return positions;
    };
    Engine.prototype.getPieceAttackablePositions = function (game, piece) {
        var _this = this;
        var positions = new models_1.PiecePositionSet();
        if (!piece.position) {
            return positions;
        }
        var piecePosition = piece.position;
        var opponentColor = this.getOpponentColor(piece.color);
        // ROOK
        if (piece.type == "r" /* Rook */) {
            var directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
            directions.map(function (direction) {
                var position = piecePosition.map(function (x, i) { return x + direction[i]; });
                var finish = false;
                while (!finish) {
                    if (!_this.isPositionInBoard(game.board, position)) {
                        finish = true;
                    }
                    else {
                        var obstacle = game.board.getPieceInPosition(position);
                        if (!obstacle) {
                            positions.add(position);
                        }
                        else if (obstacle.color == opponentColor) {
                            positions.add(position);
                            finish = true;
                        }
                        else {
                            finish = true;
                        }
                        position = position.map(function (x, i) { return x + direction[i]; });
                    }
                }
            });
            // BISHOP
        }
        else if (piece.type == "b" /* Bishop */) {
            var directions = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
            directions.map(function (direction) {
                var position = piecePosition.map(function (x, i) { return x + direction[i]; });
                var finish = false;
                while (!finish) {
                    if (!_this.isPositionInBoard(game.board, position)) {
                        finish = true;
                    }
                    else {
                        var obstacle = game.board.getPieceInPosition(position);
                        if (!obstacle) {
                            positions.add(position);
                        }
                        else if (obstacle.color == opponentColor) {
                            positions.add(position);
                            finish = true;
                        }
                        else {
                            finish = true;
                        }
                        position = position.map(function (x, i) { return x + direction[i]; });
                    }
                }
            });
            // QUEEN
        }
        else if (piece.type == "q" /* Queen */) {
            var directions = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, -1], [1, -1], [1, 1], [-1, 1]];
            directions.map(function (direction) {
                var position = piecePosition.map(function (x, i) { return x + direction[i]; });
                var finish = false;
                while (!finish) {
                    if (!_this.isPositionInBoard(game.board, position)) {
                        finish = true;
                    }
                    else {
                        var obstacle = game.board.getPieceInPosition(position);
                        if (!obstacle) {
                            positions.add(position);
                        }
                        else if (obstacle.color == opponentColor) {
                            positions.add(position);
                            finish = true;
                        }
                        else {
                            finish = true;
                        }
                        position = position.map(function (x, i) { return x + direction[i]; });
                    }
                }
            });
            // KING
        }
        else if (piece.type == "k" /* King */) {
            var directions = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, -1], [1, -1], [1, 1], [-1, 1]];
            directions.map(function (direction) {
                var position = piecePosition.map(function (x, i) { return x + direction[i]; });
                if (_this.isPositionInBoard(game.board, position)) {
                    var obstacle = game.board.getPieceInPosition(position);
                    if (!obstacle) {
                        positions.add(position);
                    }
                    else if (obstacle.color == opponentColor) {
                        positions.add(position);
                    }
                }
            });
            // KNIGHT
        }
        else if (piece.type == "n" /* Knight */) {
            var directions = [[-1, 2], [1, 2], [-1, -2], [1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
            directions.map(function (direction) {
                var position = piecePosition.map(function (x, i) { return x + direction[i]; });
                if (_this.isPositionInBoard(game.board, position)) {
                    var obstacle = game.board.getPieceInPosition(position);
                    if (!obstacle) {
                        positions.add(position);
                    }
                    else if (obstacle.color == opponentColor) {
                        positions.add(position);
                    }
                }
            });
            // PAWN
        }
        else if (piece.type == "p" /* Pawn */) {
            var colorDirection = piece.color == "w" /* White */ ? 1 : -1;
            var directions = [[colorDirection, 1], [colorDirection, -1]];
            directions.map(function (direction) {
                var position = piecePosition.map(function (x, i) { return x + direction[i]; });
                if (_this.isPositionInBoard(game.board, position)) {
                    var obstacle = game.board.getPieceInPosition(position);
                    // regular capture
                    if (obstacle && obstacle.color == opponentColor) {
                        positions.add(position);
                        // en passant capture
                    }
                    else if (_this.isMovementEnPassantCapture(game, piece, position)) {
                        positions.add(position);
                    }
                }
            });
        }
        return positions;
    };
    Engine.prototype.getPieceReachablePositions = function (game, piece) {
        var positions = this.getPieceAttackablePositions(game, piece);
        if (!piece.position) {
            return positions;
        }
        var piecePosition = piece.position;
        if (piece.type == "p" /* Pawn */) {
            var colorDirection = piece.color == "w" /* White */ ? 1 : -1;
            var position = [piecePosition[0] + colorDirection, piecePosition[1]];
            if (this.isPositionInBoard(game.board, position)) {
                var obstacle = game.board.getPieceInPosition(position);
                if (!obstacle) {
                    positions.add(position);
                    if (piece.color == "w" /* White */ && piece.position[0] == 1) {
                        var position_1 = [piecePosition[0] + 2 * colorDirection, piecePosition[1]];
                        var obstacle_1 = game.board.getPieceInPosition(position_1);
                        if (!obstacle_1) {
                            positions.add(position_1);
                        }
                    }
                    else if (piece.color == "b" /* Black */ && piece.position[0] == 6) {
                        var position_2 = [piecePosition[0] + 2 * colorDirection, piecePosition[1]];
                        var obstacle_2 = game.board.getPieceInPosition(position_2);
                        if (!obstacle_2) {
                            positions.add(position_2);
                        }
                    }
                }
            }
        }
        else if (piece.type == "k" /* King */ && !game.disabledCastlings.has(piece.uuid)) {
            var opponentColor = this.getOpponentColor(piece.color);
            var closerRook = game.board.getPieceInPosition([piecePosition[0], 7]);
            var farthestRook = game.board.getPieceInPosition([piecePosition[0], 0]);
            var attackedPositions_1 = null;
            // closest rook
            if (!!closerRook
                && closerRook.type == "r" /* Rook */
                && !game.disabledCastlings.has(piece.uuid)) {
                attackedPositions_1 = attackedPositions_1 || this.getColorAttackablePositions(game, opponentColor);
                var isPathAttacked = [
                    [piecePosition[0], 4],
                    [piecePosition[0], 5],
                    [piecePosition[0], 6],
                ].reduce(function (isAttacked, position) { return (isAttacked || !!(attackedPositions_1 && attackedPositions_1.has(position))); }, false);
                var isPathBlocked = [
                    [piecePosition[0], 5],
                    [piecePosition[0], 6],
                ].reduce(function (isBlocked, position) { return (isBlocked || !!game.board.getPieceInPosition(position)); }, false);
                if (!isPathAttacked && !isPathBlocked) {
                    positions.add([piecePosition[0], 6]);
                }
            }
            // farthest rook
            if (!!farthestRook
                && farthestRook.type == "r" /* Rook */
                && !game.disabledCastlings.has(piece.uuid)) {
                attackedPositions_1 = attackedPositions_1 || this.getColorAttackablePositions(game, opponentColor);
                var isPathAttacked = [
                    [piecePosition[0], 4],
                    [piecePosition[0], 3],
                    [piecePosition[0], 2],
                ].reduce(function (isAttacked, position) { return (isAttacked || !!(attackedPositions_1 && attackedPositions_1.has(position))); }, false);
                var isPathBlocked = [
                    [piecePosition[0], 3],
                    [piecePosition[0], 2],
                    [piecePosition[0], 1],
                ].reduce(function (isBlocked, position) { return (isBlocked || !!game.board.getPieceInPosition(position)); }, false);
                if (!isPathAttacked && !isPathBlocked) {
                    positions.add([piecePosition[0], 2]);
                }
            }
        }
        return positions;
    };
    __decorate([
        advance_movement_decorator_1.default
    ], Engine.prototype, "doesMovementLeadToOwnCheck", null);
    return Engine;
}());
exports.default = Engine;
//# sourceMappingURL=engine.js.map