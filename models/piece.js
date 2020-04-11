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
var Piece = /** @class */ (function (_super) {
    __extends(Piece, _super);
    function Piece(data) {
        var _this = _super.call(this, data) || this;
        _this._color = "w" /* White */;
        _this._type = "p" /* Pawn */;
        _this._position = null;
        var _data = data || {};
        _this.update(_data);
        return _this;
    }
    Object.defineProperty(Piece.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this._position = position;
        },
        enumerable: true,
        configurable: true
    });
    Piece.prototype.update = function (data) {
        (data['color'] !== undefined) && (this.color = data['color']);
        (data['type'] !== undefined) && (this.type = data['type']);
        (data['position'] !== undefined) && (this.position = data['position']);
        return this;
    };
    Piece.fromDict = function (data) {
        return new Piece(data);
    };
    Piece.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { color: this.color, type: this.type, position: this.position });
        return data;
    };
    return Piece;
}(entity_1.Entity));
exports.Piece = Piece;
;
//# sourceMappingURL=piece.js.map