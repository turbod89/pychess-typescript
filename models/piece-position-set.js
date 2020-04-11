"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PiecePositionSet = /** @class */ (function () {
    function PiecePositionSet() {
        this.positions = new Map();
    }
    PiecePositionSet.prototype.clear = function () {
        this.positions.clear();
    };
    PiecePositionSet.prototype.add = function (arg) {
        if (arg instanceof PiecePositionSet) {
            return this.addSet(arg);
        }
        return this.addPosition(arg);
    };
    PiecePositionSet.prototype.addPosition = function (position) {
        if (!position) {
            return;
        }
        var firstCoord = this.positions.get(position[0]);
        if (!firstCoord) {
            var secondCoord = new Set();
            this.positions.set(position[0], secondCoord);
            secondCoord.add(position[1]);
        }
        else {
            firstCoord.add(position[1]);
        }
    };
    PiecePositionSet.prototype.addSet = function (positions) {
        var _this = this;
        positions.forEach(function (position) { return _this.addPosition(position); });
    };
    PiecePositionSet.prototype.delete = function (arg) {
        if (arg instanceof PiecePositionSet) {
            return this.deleteSet(arg);
        }
        return this.deletePosition(arg);
    };
    PiecePositionSet.prototype.deletePosition = function (position) {
        if (!position) {
            return;
        }
        var firstCoord = this.positions.get(position[0]);
        if (!!firstCoord) {
            firstCoord.delete(position[1]);
            if (firstCoord.size == 0) {
                this.positions.delete(position[0]);
            }
        }
    };
    PiecePositionSet.prototype.deleteSet = function (positions) {
        var _this = this;
        positions.forEach(function (position) { return _this.deletePosition(position); });
    };
    PiecePositionSet.prototype.has = function (position) {
        if (!position) {
            return false;
        }
        var firstCoord = this.positions.get(position[0]);
        if (firstCoord) {
            return firstCoord.has(position[1]);
        }
        return false;
    };
    PiecePositionSet.prototype.forEach = function (f) {
        var _this = this;
        this.positions.forEach(function (secondCoordSet, firstCoord) {
            secondCoordSet.forEach(function (secondCoord) {
                var position = [firstCoord, secondCoord];
                f(position, position, _this);
            });
        });
    };
    return PiecePositionSet;
}());
exports.PiecePositionSet = PiecePositionSet;
//# sourceMappingURL=piece-position-set.js.map