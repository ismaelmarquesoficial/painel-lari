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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/supabase */ \"(app-pages-browser)/./src/lib/supabase.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DashboardPage() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadProfile() {\n            try {\n                var _session_user_user_metadata;\n                const { data: { session }, error: sessionError } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.getSession();\n                if (sessionError) {\n                    throw sessionError;\n                }\n                if (!session) {\n                    router.push(\"/login\");\n                    return;\n                }\n                // Criar/atualizar perfil via API\n                const response = await fetch(\"/api/profile\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        userId: session.user.id,\n                        email: session.user.email,\n                        name: (_session_user_user_metadata = session.user.user_metadata) === null || _session_user_user_metadata === void 0 ? void 0 : _session_user_user_metadata.name\n                    })\n                });\n                if (!response.ok) {\n                    throw new Error(\"Erro ao carregar perfil\");\n                }\n                const profile = await response.json();\n                setProfile(profile);\n            } catch (err) {\n                console.error(\"Erro:\", err);\n                setError(err instanceof Error ? err.message : \"Erro ao carregar perfil\");\n            } finally{\n                setLoading(false);\n            }\n        }\n        loadProfile();\n    }, [\n        router\n    ]);\n    const handleSignOut = async ()=>{\n        await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.auth.signOut();\n        router.push(\"/login\");\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg\",\n                children: \"Carregando...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg text-red-600\",\n                children: error\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white shadow-sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-semibold\",\n                                    children: \"Dashboard\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mr-4\",\n                                        children: profile === null || profile === void 0 ? void 0 : profile.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleSignOut,\n                                        className: \"px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500\",\n                                        children: \"Sair\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 py-6 sm:px-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-4 border-dashed border-gray-200 rounded-lg h-96 p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-bold mb-4\",\n                                children: [\n                                    \"Bem-vindo, \",\n                                    profile === null || profile === void 0 ? void 0 : profile.email,\n                                    \"!\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Aqui voc\\xea poder\\xe1:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"list-disc list-inside mt-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Gerenciar seus documentos\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Visualizar informa\\xe7\\xf5es\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: \"Atualizar seu perfil\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programa\\xe7\\xe3o\\\\lari-painel\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardPage, \"0+EgI3rzMfKench0HlofWjNJZLU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DashboardPage;\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDQTtBQUNGO0FBUzFCLFNBQVNJOztJQUN0QixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFpQjtJQUN2RCxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLGVBQWVZO1lBQ2IsSUFBSTtvQkFxQlFDO2dCQXBCVixNQUFNLEVBQUVDLE1BQU0sRUFBRUQsT0FBTyxFQUFFLEVBQUVILE9BQU9LLFlBQVksRUFBRSxHQUFHLE1BQU1aLG1EQUFRQSxDQUFDYSxJQUFJLENBQUNDLFVBQVU7Z0JBRWpGLElBQUlGLGNBQWM7b0JBQ2hCLE1BQU1BO2dCQUNSO2dCQUVBLElBQUksQ0FBQ0YsU0FBUztvQkFDWlIsT0FBT2EsSUFBSSxDQUFDO29CQUNaO2dCQUNGO2dCQUVBLGlDQUFpQztnQkFDakMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtvQkFDM0NDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUNuQkMsUUFBUWIsUUFBUWMsSUFBSSxDQUFDQyxFQUFFO3dCQUN2QkMsT0FBT2hCLFFBQVFjLElBQUksQ0FBQ0UsS0FBSzt3QkFDekJDLElBQUksR0FBRWpCLDhCQUFBQSxRQUFRYyxJQUFJLENBQUNJLGFBQWEsY0FBMUJsQixrREFBQUEsNEJBQTRCaUIsSUFBSTtvQkFDeEM7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDWCxTQUFTYSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTTNCLFVBQVUsTUFBTWEsU0FBU2UsSUFBSTtnQkFDbkMzQixXQUFXRDtZQUViLEVBQUUsT0FBTzZCLEtBQUs7Z0JBQ1pDLFFBQVExQixLQUFLLENBQUMsU0FBU3lCO2dCQUN2QnhCLFNBQVN3QixlQUFlRixRQUFRRSxJQUFJRSxPQUFPLEdBQUc7WUFDaEQsU0FBVTtnQkFDUjVCLFdBQVc7WUFDYjtRQUNGO1FBRUFHO0lBQ0YsR0FBRztRQUFDUDtLQUFPO0lBRVgsTUFBTWlDLGdCQUFnQjtRQUNwQixNQUFNbkMsbURBQVFBLENBQUNhLElBQUksQ0FBQ3VCLE9BQU87UUFDM0JsQyxPQUFPYSxJQUFJLENBQUM7SUFDZDtJQUVBLElBQUlWLFNBQVM7UUFDWCxxQkFDRSw4REFBQ2dDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUFVOzs7Ozs7Ozs7OztJQUcvQjtJQUVBLElBQUkvQixPQUFPO1FBQ1QscUJBQ0UsOERBQUM4QjtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFBd0IvQjs7Ozs7Ozs7Ozs7SUFHN0M7SUFFQSxxQkFDRSw4REFBQzhCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFHRixXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7MENBRXhDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUFLSCxXQUFVO2tEQUNibkMsb0JBQUFBLDhCQUFBQSxRQUFTdUIsS0FBSzs7Ozs7O2tEQUVqQiw4REFBQ2dCO3dDQUNDQyxTQUFTUjt3Q0FDVEcsV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRVCw4REFBQ007Z0JBQUtOLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNPO2dDQUFHUCxXQUFVOztvQ0FBMEI7b0NBQzFCbkMsb0JBQUFBLDhCQUFBQSxRQUFTdUIsS0FBSztvQ0FBQzs7Ozs7OzswQ0FFN0IsOERBQUNvQjswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQztnQ0FBR1QsV0FBVTs7a0RBQ1osOERBQUNVO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCO0dBaEh3Qi9DOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICdAL2xpYi9zdXBhYmFzZSdcclxuXHJcbmludGVyZmFjZSBQcm9maWxlIHtcclxuICBpZDogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIHJvbGU6IHN0cmluZ1xyXG4gIG5hbWU/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPFByb2ZpbGUgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQcm9maWxlKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBzZXNzaW9uIH0sIGVycm9yOiBzZXNzaW9uRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpXHJcblxyXG4gICAgICAgIGlmIChzZXNzaW9uRXJyb3IpIHtcclxuICAgICAgICAgIHRocm93IHNlc3Npb25FcnJvclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JpYXIvYXR1YWxpemFyIHBlcmZpbCB2aWEgQVBJXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm9maWxlJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcclxuICAgICAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcclxuICAgICAgICAgICAgbmFtZTogc2Vzc2lvbi51c2VyLnVzZXJfbWV0YWRhdGE/Lm5hbWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIHBlcmZpbCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgc2V0UHJvZmlsZShwcm9maWxlKVxyXG5cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybzonLCBlcnIpXHJcbiAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdFcnJvIGFvIGNhcnJlZ2FyIHBlcmZpbCcpXHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9maWxlKClcclxuICB9LCBbcm91dGVyXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnbk91dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpXHJcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkNhcnJlZ2FuZG8uLi48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtcmVkLTYwMFwiPntlcnJvcn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JheS0xMDBcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctc21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5EYXNoYm9hcmQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9maWxlPy5lbWFpbH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbk91dH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2FpclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB5LTYgc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTYgc206cHgtMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIGgtOTYgcC00XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlxyXG4gICAgICAgICAgICAgIEJlbS12aW5kbywge3Byb2ZpbGU/LmVtYWlsfSFcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHA+QXF1aSB2b2PDqiBwb2RlcsOhOjwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPGxpPkdlcmVuY2lhciBzZXVzIGRvY3VtZW50b3M8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5WaXN1YWxpemFyIGluZm9ybWHDp8O1ZXM8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5BdHVhbGl6YXIgc2V1IHBlcmZpbDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59ICJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiRGFzaGJvYXJkUGFnZSIsInJvdXRlciIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwibG9hZFByb2ZpbGUiLCJzZXNzaW9uIiwiZGF0YSIsInNlc3Npb25FcnJvciIsImF1dGgiLCJnZXRTZXNzaW9uIiwicHVzaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsIm5hbWUiLCJ1c2VyX21ldGFkYXRhIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibWVzc2FnZSIsImhhbmRsZVNpZ25PdXQiLCJzaWduT3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaDEiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsIm1haW4iLCJoMiIsInAiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.tsx\n"));

/***/ })

});