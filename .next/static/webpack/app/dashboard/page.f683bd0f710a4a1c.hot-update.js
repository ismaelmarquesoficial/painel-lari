"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/supabase */ \"(app-pages-browser)/./src/lib/supabase.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DashboardPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadProfile() {\n            const { data: { session }, error: sessionError } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession();\n            if (sessionError || !session) {\n                router.push(\"/login\");\n                return;\n            }\n            const { data: profile, error: profileError } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"profiles\").select(\"*\").eq(\"id\", session.user.id).single();\n            if (profileError) {\n                console.error(\"Erro ao carregar perfil:\", profileError);\n                return;\n            }\n            setProfile(profile);\n            setLoading(false);\n        }\n        loadProfile();\n    }, [\n        router\n    ]);\n    const handleSignOut = async ()=>{\n        await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n        router.push(\"/login\");\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg\",\n                children: \"Carregando...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white shadow-sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-semibold\",\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-4\",\n                                        children: profile === null || profile === void 0 ? void 0 : profile.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleSignOut,\n                                        className: \"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500\",\n                                        children: \"Sair\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-6 sm:px-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-4 border-dashed border-gray-200 rounded-lg h-96 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-bold mb-4\",\n                                children: \"Bem-vindo ao seu Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Aqui voc\\xea poder\\xe1:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-disc list-inside mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Gerenciar seus documentos\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Visualizar informa\\xe7\\xf5es\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Atualizar seu perfil\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardPage, \"7qrY9bvQChAJqdreL808VgX4CY8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DashboardPage;\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDQTtBQUNGO0FBUzFCLFNBQVNJOztJQUN0QixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFpQjtJQUN2RCxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVU7WUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQUVDLE9BQU9DLFlBQVksRUFBRSxHQUFHLE1BQU1YLG1EQUFRQSxDQUFDWSxJQUFJLENBQUNDLFVBQVU7WUFFakYsSUFBSUYsZ0JBQWdCLENBQUNGLFNBQVM7Z0JBQzVCUCxPQUFPWSxJQUFJLENBQUM7Z0JBQ1o7WUFDRjtZQUVBLE1BQU0sRUFBRU4sTUFBTUwsT0FBTyxFQUFFTyxPQUFPSyxZQUFZLEVBQUUsR0FBRyxNQUFNZixtREFBUUEsQ0FDMURnQixJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxNQUFNVCxRQUFRVSxJQUFJLENBQUNDLEVBQUUsRUFDeEJDLE1BQU07WUFFVCxJQUFJTixjQUFjO2dCQUNoQk8sUUFBUVosS0FBSyxDQUFDLDRCQUE0Qks7Z0JBQzFDO1lBQ0Y7WUFFQVgsV0FBV0Q7WUFDWEcsV0FBVztRQUNiO1FBRUFDO0lBQ0YsR0FBRztRQUFDTDtLQUFPO0lBRVgsTUFBTXFCLGdCQUFnQjtRQUNwQixNQUFNdkIsbURBQVFBLENBQUNZLElBQUksQ0FBQ1ksT0FBTztRQUMzQnRCLE9BQU9ZLElBQUksQ0FBQztJQUNkO0lBRUEsSUFBSVQsU0FBUztRQUNYLHFCQUNFLDhEQUFDb0I7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQVU7Ozs7Ozs7Ozs7O0lBRy9CO0lBRUEscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFHRixXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7MENBRXhDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUFLSCxXQUFVO2tEQUNidkIsb0JBQUFBLDhCQUFBQSxRQUFTMkIsS0FBSzs7Ozs7O2tEQUVqQiw4REFBQ0M7d0NBQ0NDLFNBQVNUO3dDQUNURyxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFULDhEQUFDTztnQkFBS1AsV0FBVTswQkFDZCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQTBCOzs7Ozs7MENBQ3hDLDhEQUFDUzswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQztnQ0FBR1YsV0FBVTs7a0RBQ1osOERBQUNXO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCO0dBbkZ3QnBDOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICdAL2xpYi9zdXBhYmFzZSdcclxuXHJcbmludGVyZmFjZSBQcm9maWxlIHtcclxuICBpZDogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIHJvbGU6IHN0cmluZ1xyXG4gIG5hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPFByb2ZpbGUgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkUHJvZmlsZSgpIHtcclxuICAgICAgY29uc3QgeyBkYXRhOiB7IHNlc3Npb24gfSwgZXJyb3I6IHNlc3Npb25FcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRTZXNzaW9uKClcclxuXHJcbiAgICAgIGlmIChzZXNzaW9uRXJyb3IgfHwgIXNlc3Npb24pIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBkYXRhOiBwcm9maWxlLCBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgLmVxKCdpZCcsIHNlc3Npb24udXNlci5pZClcclxuICAgICAgICAuc2luZ2xlKClcclxuXHJcbiAgICAgIGlmIChwcm9maWxlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIHBlcmZpbDonLCBwcm9maWxlRXJyb3IpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFByb2ZpbGUocHJvZmlsZSlcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvZmlsZSgpXHJcbiAgfSwgW3JvdXRlcl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKVxyXG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgfVxyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGdcIj5DYXJyZWdhbmRvLi4uPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBoLTE2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+RGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZmlsZT8uZW1haWx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctcmVkLTYwMCBob3ZlcjpiZy1yZWQtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhaXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweS02IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS02IHNtOnB4LTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWRhc2hlZCBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBoLTk2IHAtNFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5CZW0tdmluZG8gYW8gc2V1IERhc2hib2FyZDwvaDI+XHJcbiAgICAgICAgICAgIDxwPkFxdWkgdm9jw6ogcG9kZXLDoTo8L3A+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgbXQtMlwiPlxyXG4gICAgICAgICAgICAgIDxsaT5HZXJlbmNpYXIgc2V1cyBkb2N1bWVudG9zPC9saT5cclxuICAgICAgICAgICAgICA8bGk+VmlzdWFsaXphciBpbmZvcm1hw6fDtWVzPC9saT5cclxuICAgICAgICAgICAgICA8bGk+QXR1YWxpemFyIHNldSBwZXJmaWw8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIkRhc2hib2FyZFBhZ2UiLCJyb3V0ZXIiLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZFByb2ZpbGUiLCJkYXRhIiwic2Vzc2lvbiIsImVycm9yIiwic2Vzc2lvbkVycm9yIiwiYXV0aCIsImdldFNlc3Npb24iLCJwdXNoIiwicHJvZmlsZUVycm9yIiwiZnJvbSIsInNlbGVjdCIsImVxIiwidXNlciIsImlkIiwic2luZ2xlIiwiY29uc29sZSIsImhhbmRsZVNpZ25PdXQiLCJzaWduT3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaDEiLCJzcGFuIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsImgyIiwicCIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});