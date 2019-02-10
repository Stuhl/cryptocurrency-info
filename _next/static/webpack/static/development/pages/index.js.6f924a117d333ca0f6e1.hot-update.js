webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Highlight */ "./components/Highlight.js");
/* harmony import */ var _components_InformationBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InformationBlock */ "./components/InformationBlock.js");
/* harmony import */ var _components_GeneralInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/GeneralInformation */ "./components/GeneralInformation.js");
/* harmony import */ var _components_InfoBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/InfoBox */ "./components/InfoBox.js");
/* harmony import */ var _components_FunFactGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FunFactGrid */ "./components/FunFactGrid.js");
/* harmony import */ var _components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FunFactItem */ "./components/FunFactItem.js");
/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Background */ "./components/Background.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Monster\\Desktop\\cryptoinfo\\cryptocurrency-info\\pages\\index.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    background-image: linear-gradient(#FF4F98 0%,#0266c8 100%);\n    height: 100%;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // components

 // used together





 // used together



 // 3rd party libs



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["createGlobalStyle"])(_templateObject());
var FreeSpace = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div(_templateObject2());

var Page = function Page(props) {
  var totalMarketCapWorth = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.total_market_cap);
  var priceFor1Bitcoin = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.bitcoinPrice);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Background__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "HOW FAR HAS ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Highlight__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "CRYPTO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), " COME?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FreeSpace, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "active cryptocurrencies",
    info: props.active_cryptocurrencies,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "ongoing ico's",
    info: props.ongoing_icos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "upcoming ico's",
    info: props.upcoming_icos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "markets to buy cryptocurrencies from",
    info: props.markets,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "total market cap (worth)",
    info: totalMarketCapWorth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "price for 1 bitcoin",
    info: priceFor1Bitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FreeSpace, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "WHAT COULD YOU GET WITH ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Highlight__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "1 BITCOIN",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), "?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FreeSpace, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FreeSpace, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Buy books",
    baseValue: props.bitcoinPrice,
    divider: 17.65,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Living by buying the minimum amount of food",
    baseValue: props.bitcoinPrice,
    divider: 3.52,
    round: true,
    suffix: "days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Watch movies in the theatre",
    baseValue: props.bitcoinPrice,
    divider: 8.95,
    round: true,
    suffix: "times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Go eating with friends",
    baseValue: props.bitcoinPrice,
    divider: 12.75,
    round: true,
    suffix: "times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Travel around",
    baseValue: props.bitcoinPrice,
    divider: 144,
    round: true,
    suffix: "days",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Buy videogames",
    baseValue: props.bitcoinPrice,
    divider: 50,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Go-karting",
    baseValue: props.bitcoinPrice,
    divider: 15,
    suffix: "minutes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Go shopping",
    baseValue: props.bitcoinPrice,
    divider: 161,
    round: true,
    suffix: "times",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Tesla P100D",
    content: "22x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Tesla P100D",
    content: "22x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Tesla P100D",
    content: "22x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Tesla P100D",
    content: "22x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunFactItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    header: "Tesla P100D",
    content: "22x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })));
};

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("https://cryptoinfo-backend.herokuapp.com/");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", json);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Page);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.6f924a117d333ca0f6e1.hot-update.js.map