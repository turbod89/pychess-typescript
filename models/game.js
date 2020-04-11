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
var entity_1 = require("./entity");
var board_1 = require("./board");
var GameError = /** @class */ (function (_super) {
    __extends(GameError, _super);
    function GameError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GameError;
}(Error));
exports.GameError = GameError;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(data) {
        var _this = _super.call(this, data) || this;
        _this._state = "created" /* Created */;
        _this._board = new board_1.Board();
        _this._dealer = "w" /* White */;
        _this._winner = null;
        _this._disabledCastlings = new Set();
        _this._enPassant = null;
        _this._fullMoveCounter = 0;
        var _data = data || {};
        _this.update(_data);
        return _this;
    }
    Object.defineProperty(Game.prototype, "state", {
        // setters and getters
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "board", {
        get: function () {
            return this._board;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setBoard = function (board) {
        if (board instanceof board_1.Board) {
            this._board = board;
        }
        else {
            this._board = new board_1.Board(board);
        }
    };
    Object.defineProperty(Game.prototype, "dealer", {
        get: function () {
            return this._dealer;
        },
        set: function (dealer) {
            this._dealer = dealer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "winner", {
        get: function () {
            return this._winner;
        },
        set: function (winner) {
            this._winner = winner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "disabledCastlings", {
        get: function () {
            return this._disabledCastlings;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.setDisabledCastlings = function (disabledCastlings) {
        var _this = this;
        this._disabledCastlings.clear();
        disabledCastlings.forEach(function (pieceUuid) {
            _this._disabledCastlings.add(pieceUuid);
        });
    };
    Object.defineProperty(Game.prototype, "enPassant", {
        get: function () {
            return this._enPassant;
        },
        set: function (enPassant) {
            this._enPassant = enPassant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "fullMoveCounter", {
        get: function () {
            return this._fullMoveCounter;
        },
        set: function (fullMoveCounter) {
            this._fullMoveCounter = fullMoveCounter;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.update = function (data) {
        data["state"] !== undefined && (this.state = data["state"]);
        data["board"] !== undefined && this.setBoard(data["board"]);
        data["dealer"] !== undefined && (this.dealer = data["dealer"]);
        data["winner"] !== undefined && (this.winner = data["winner"]);
        data["disabled_castlings"] !== undefined &&
            this.setDisabledCastlings(data["disabled_castlings"]);
        data["en_passant"] !== undefined && (this.enPassant = data["en_passant"]);
        data["full_move_counter"] !== undefined &&
            (this.fullMoveCounter = data["full_move_counter"] || 0);
        return this;
    };
    Game.fromDict = function (data) {
        return new Game(data);
    };
    Game.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { state: this.state, board: this.board.toDict(), dealer: this.dealer, winner: this.winner, disabled_castlings: Array.from(this.disabledCastlings), en_passant: this.enPassant, full_move_counter: this.fullMoveCounter });
        return data;
    };
    Game.prototype.create = function () {
        this.board.rows = 8;
        this.board.cols = 8;
        var pieces = [];
        for (var i = 0; i < 8; i++) {
            pieces.push({
                uuid: entity_1.uuidv4(),
                position: [1, i],
                color: "w" /* White */,
                type: "p" /* Pawn */
            });
        }
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 0],
            color: "w" /* White */,
            type: "r" /* Rook */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 1],
            color: "w" /* White */,
            type: "n" /* Knight */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 2],
            color: "w" /* White */,
            type: "b" /* Bishop */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 3],
            color: "w" /* White */,
            type: "q" /* Queen */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 4],
            color: "w" /* White */,
            type: "k" /* King */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 5],
            color: "w" /* White */,
            type: "b" /* Bishop */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 6],
            color: "w" /* White */,
            type: "n" /* Knight */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [0, 7],
            color: "w" /* White */,
            type: "r" /* Rook */
        });
        for (var i = 0; i < 8; i++) {
            pieces.push({
                uuid: entity_1.uuidv4(),
                position: [6, i],
                color: "b" /* Black */,
                type: "p" /* Pawn */
            });
        }
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 0],
            color: "b" /* Black */,
            type: "r" /* Rook */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 1],
            color: "b" /* Black */,
            type: "n" /* Knight */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 2],
            color: "b" /* Black */,
            type: "b" /* Bishop */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 3],
            color: "b" /* Black */,
            type: "q" /* Queen */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 4],
            color: "b" /* Black */,
            type: "k" /* King */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 5],
            color: "b" /* Black */,
            type: "b" /* Bishop */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 6],
            color: "b" /* Black */,
            type: "n" /* Knight */
        });
        pieces.push({
            uuid: entity_1.uuidv4(),
            position: [7, 7],
            color: "b" /* Black */,
            type: "r" /* Rook */
        });
        this.board.setPieces(pieces);
        this.state = "created" /* Created */;
    };
    return Game;
}(entity_1.Entity));
exports.Game = Game;
//# sourceMappingURL=game.js.map