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
var piece_1 = require("./piece");
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(data) {
        var _this = _super.call(this, data) || this;
        _this._rows = 8;
        _this._cols = 8;
        _this._pieces = new Map();
        var _data = data || {};
        _this.update(_data);
        return _this;
    }
    Object.defineProperty(Board.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (rows) {
            this._rows = rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "cols", {
        get: function () {
            return this._cols;
        },
        set: function (cols) {
            this._cols = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "pieces", {
        get: function () {
            return this._pieces;
        },
        enumerable: true,
        configurable: true
    });
    Board.prototype.setPieces = function (pieces) {
        var _this = this;
        this._pieces.clear();
        pieces.forEach(function (piece) {
            if (piece instanceof piece_1.Piece) {
                _this._pieces.set(piece.uuid, piece);
            }
            else {
                var newPiece = new piece_1.Piece(piece);
                _this._pieces.set(newPiece.uuid, newPiece);
            }
        });
    };
    Board.prototype.update = function (data) {
        (data['rows'] !== undefined) && (this.rows = data['rows']);
        (data['cols'] !== undefined) && (this.cols = data['cols']);
        (data['pieces'] !== undefined) && this.setPieces(data['pieces']);
        return this;
    };
    Board.fromDict = function (data) {
        return new Board(data);
    };
    Board.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { rows: this.rows, cols: this.cols, pieces: Array.from(this.pieces.values()).map(function (piece) { return piece.toDict(); }) });
        return data;
    };
    Board.prototype.getPieceInPosition = function (position) {
        if (!position) {
            return null;
        }
        return Array.from(this.pieces.values()).filter(function (piece) { return piece.position
            && piece.position[0] == position[0]
            && piece.position[1] == position[1]; })[0] || null;
    };
    return Board;
}(entity_1.Entity));
exports.Board = Board;
;
//# sourceMappingURL=board.js.map