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
var models_1 = require("../models");
var models_2 = require("../models");
var ActionError = /** @class */ (function (_super) {
    __extends(ActionError, _super);
    function ActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ActionError;
}(models_2.GameError));
exports.ActionError = ActionError;
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(data) {
        var _this = _super.call(this, data) || this;
        _this._owner = data['owner'];
        return _this;
    }
    Object.defineProperty(Action.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (owner) {
            this._owner = owner;
        },
        enumerable: true,
        configurable: true
    });
    Action.fromDict = function (data) {
        return new Action(data);
    };
    Action.prototype.toDict = function () {
        var data = __assign(__assign({}, _super.prototype.toDict.call(this)), { type: Action.type, owner: this.owner });
        return data;
    };
    Action.prototype.validate = function (game) { };
    ;
    Action.prototype.execute = function (game) { return []; };
    ;
    Action.type = 'Base';
    return Action;
}(models_1.Entity));
exports.Action = Action;
;
//# sourceMappingURL=action-base.js.map