"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
// a class for constructing a view
var dangerousHTML = /** @class */ (function () {
    function dangerousHTML(route, html, className) {
        if (className === void 0) { className = ""; }
        this.route = route;
        this.html = html;
        this.className = className;
    }
    return dangerousHTML;
}());
exports.dangerousHTML = dangerousHTML;
// puts together a React view based on the "dangerouslySetInnerHTML" React property
// works for static sites
function dangerouslySetHTML(pages) {
    return /** @class */ (function (_super) {
        __extends(HTML, _super);
        function HTML() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HTML.prototype.render = function () {
            return (React.createElement(react_router_1.Switch, null, pages.map(function (html, ind) {
                return React.createElement(react_router_1.Route, { key: ind, exact: true, path: html.route, component: function (props) {
                        return React.createElement("div", { className: html.className, dangerouslySetInnerHTML: {
                                __html: html.html
                            } });
                    } });
            })));
        };
        return HTML;
    }(React.Component));
}
exports.dangerouslySetHTML = dangerouslySetHTML;
