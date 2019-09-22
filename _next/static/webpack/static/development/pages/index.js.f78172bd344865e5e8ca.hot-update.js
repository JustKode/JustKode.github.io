webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/banner */ "./components/banner.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/layout */ "./styles/layout.ts");





var _jsxFileName = "/workspace/justkode_kr/JustKode-Blog/frontend/pages/index.tsx";







var HelloContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__HelloContainer",
  componentId: "lrbmwi-0"
})(["text-align:center;"]);
var HelloSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__HelloSubContainer",
  componentId: "lrbmwi-1"
})(["display:inline-block;width:100%;max-width:", ";margin:20px 0;"], _styles_layout__WEBPACK_IMPORTED_MODULE_11__["tabletMaxRowSize"]);
var HelloTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__HelloTitle",
  componentId: "lrbmwi-2"
})(["span{font-size:2rem;border-bottom:0.4rem solid black;font-weight:bold;}margin:1rem;"]);
var HelloContent = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__HelloContent",
  componentId: "lrbmwi-3"
})(["margin:auto;max-width:720px;width:100%;"]);
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__LinkContainer",
  componentId: "lrbmwi-4"
})(["height:300px;display:block;@media (min-width:", "){i{display:inline-block;font-size:4.8rem;padding:70px 0;margin:1rem;color:white;}}@media (max-width:", "){height:200px;i{display:inline-block;font-size:2.5rem;padding:50px 0;margin:1rem;color:white;}}"], _styles_layout__WEBPACK_IMPORTED_MODULE_11__["phoneMaxRowSize"], _styles_layout__WEBPACK_IMPORTED_MODULE_11__["phoneMaxRowSize"]);
var MilitaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "pages__MilitaryContainer",
  componentId: "lrbmwi-5"
})(["padding:2rem;"]);

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      if (this.props.error) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_error__WEBPACK_IMPORTED_MODULE_7___default.a, {
          statusCode: this.props.error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Hello! JustKode!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: "Hello! I'm JustKode!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        property: "og:title",
        content: "Hello! JustKode!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        property: "og:description",
        content: "Hello! I'm JustKode!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloSubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Hello! I'm JustKode")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "\uC548\uB155\uD558\uC138\uC694! \uD604\uC7AC \uACBD\uD76C\uB300\uD559\uAD50 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC 3\uD559\uB144 \uD734\uD559 \uC911\uC778 JustKode, \uBC15\uBBFC\uC7AC\uB77C\uACE0 \uD569\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "2017.03.01~ \uACBD\uD76C\uB300\uD559\uAD50 \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC \uC7AC\uD559"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "2019.06.03~2020.12.29 \uC721\uAD70 \uBCF5\uBB34"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContent, {
        style: {
          fontWeight: 'bold',
          padding: '1.2rem',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Just, Kode it."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContainer, {
        style: {
          backgroundColor: '#eeeeee'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloSubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Recent Posts")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MilitaryContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\uB294 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\uAD73\uAC74\uC774"), "\uAC00 \uCC98\uB9AC \uD588\uC73C\uB2C8 \uC548\uC2EC\uD558\uB77C\uAD6C!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "https://avatars1.githubusercontent.com/t/3123869?s=280&v=4",
        width: "150px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "\uC804\uC5ED"), " \uD558\uBA74 \uB9CC\uB098\uC694!"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloContainer, {
        style: {
          backgroundColor: '#444444',
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloSubContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(HelloTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          borderBottom: '0.4rem solid white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LinkContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fas fa-user-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/JustKode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.instagram.com/0ccean/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-instagram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.facebook.com/profile.php?id=100014409812788",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-facebook-square",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f78172bd344865e5e8ca.hot-update.js.map