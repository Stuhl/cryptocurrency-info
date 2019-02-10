webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/FunFactItem.js":
/*!***********************************!*\
  !*** ./components/FunFactItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\Monster\\Desktop\\cryptoinfo\\cryptocurrency-info\\components\\FunFactItem.js";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ntext-shadow: 1px 1px 0px black, 2px 2px 0px black;\ncolor: white;\nfont-size: 40px;\ntext-align: center;\nfont-family: \"Anton\";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfont-size: 30px;\nmargin: 0;\ncolor: #f49b42;\nfont-family: \"Anton\";\n/*   -webkit-text-stroke: 2px black; */\ntext-shadow: 1px 1px 0px black, 2px 2px 0px black;\n/*   transform: skew(-5deg) rotate(-3deg); */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\njustify-self: center;\nalign-self: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // 3rd party libs


var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

var calculateContent = function calculateContent(baseValue, divider, isRound) {
  if (isRound) {
    return Math.floor(Math.floor(baseValue) / divider);
  } else {
    return Math.floor(baseValue) / divider;
  }
};

var FunFactItem = function FunFactItem(props) {
  var suffix = props.suffix ? props.suffix : "";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, props.header), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, calculateContent(props.baseValue, props.divider, props.round), " ", suffix));
};

/* harmony default export */ __webpack_exports__["default"] = (FunFactItem);

/***/ })

})
//# sourceMappingURL=index.js.40fd93d2111cbed4973f.hot-update.js.map