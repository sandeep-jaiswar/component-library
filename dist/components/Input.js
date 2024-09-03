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
var Input = function (_a) {
    var label = _a.label, error = _a.error, props = __rest(_a, ["label", "error"]);
    return (React.createElement("div", { className: "mb-4" },
        React.createElement("label", { className: "block text-sm font-medium text-gray-700 mb-1" }, label),
        React.createElement("input", __assign({ className: "\n          w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500\n          ".concat(error ? "border-red-500" : "border-gray-300", "\n          ").concat(error ? "focus:border-red-500" : "focus:border-blue-500", "\n        ") }, props)),
        error && React.createElement("p", { className: "mt-1 text-sm text-red-600" }, error)));
};
export default Input;
//# sourceMappingURL=Input.js.map