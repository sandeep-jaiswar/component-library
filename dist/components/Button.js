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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "contained" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, className = _a.className, props = __rest(_a, ["variant", "color", "size", "startIcon", "endIcon", "children", "className"]);
    var baseClasses = "font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
    var variantClasses = {
        contained: "bg-".concat(color, "-600 text-white hover:bg-").concat(color, "-700 focus:ring-").concat(color, "-500"),
        outlined: "border border-".concat(color, "-600 text-").concat(color, "-600 hover:bg-").concat(color, "-50 focus:ring-").concat(color, "-500"),
        text: "text-".concat(color, "-600 hover:bg-").concat(color, "-50 focus:ring-").concat(color, "-500"),
    };
    var sizeClasses = {
        small: "px-2.5 py-1.5 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-6 py-3 text-base",
    };
    var buttonClasses = "".concat(baseClasses, " ").concat(variantClasses[variant], " ").concat(sizeClasses[size], " ").concat(className || "");
    return (React.createElement("button", __assign({ className: buttonClasses }, props),
        startIcon && React.createElement("span", { className: "mr-2" }, startIcon),
        children,
        endIcon && React.createElement("span", { className: "ml-2" }, endIcon)));
};
export default Button;
//# sourceMappingURL=Button.js.map