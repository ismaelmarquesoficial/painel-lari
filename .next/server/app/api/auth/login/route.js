"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Programa_o_lari_painel_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.ts */ \"(rsc)/./app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"D:\\\\Programação\\\\lari-painel\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Programa_o_lari_painel_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvZ3JhbWElQzMlQTclQzMlQTNvJTVDbGFyaS1wYWluZWwlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNQcm9ncmFtYSVDMyVBNyVDMyVBM28lNUNsYXJpLXBhaW5lbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNhO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFyaS1wYWluZWwvPzJjNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUHJvZ3JhbWHDp8Ojb1xcXFxsYXJpLXBhaW5lbFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcUHJvZ3JhbWHDp8Ojb1xcXFxsYXJpLXBhaW5lbFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/login/route.ts":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(\"https://nsvcsmfyeejzapejopzn.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdmNzbWZ5ZWVqemFwZWpvcHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNTAzMTIsImV4cCI6MjA0ODcyNjMxMn0.uS769_3bJj5UNfTLBPaulx5X3k3Ymy29yhF5mHzi5ro\");\nasync function POST(request) {\n    try {\n        const { email, password } = await request.json();\n        // Tentar fazer login primeiro\n        const { data, error } = await supabase.auth.signInWithPassword({\n            email,\n            password\n        });\n        if (error) {\n            // Traduzir mensagens de erro comuns\n            if (error.message === \"Invalid login credentials\") {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Email ou senha incorretos\"\n                }, {\n                    status: 400\n                });\n            }\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: error.message\n            }, {\n                status: 400\n            });\n        }\n        // Se o login foi bem sucedido, buscar o perfil\n        const { data: profile, error: profileError } = await supabase.from(\"profiles\").select(\"*\").eq(\"id\", data.user.id).single();\n        if (profileError) {\n            console.error(\"Erro ao buscar perfil:\", profileError);\n        // Mesmo se houver erro ao buscar o perfil, permitir o login\n        }\n        // Retornar dados da sessão\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            user: {\n                id: data.user.id,\n                email: data.user.email,\n                ...data.user.user_metadata,\n                profile: profile || null\n            },\n            session: data.session\n        });\n    } catch (error) {\n        console.error(\"Erro no login:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Erro ao fazer login. Tente novamente.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBQ1Y7QUFFMUMsTUFBTUUsV0FBV0YsbUVBQVlBLENBQzNCRywwQ0FBb0MsRUFDcENBLGtOQUF5QztBQUdwQyxlQUFlSSxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7UUFFOUMsOEJBQThCO1FBQzlCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNWCxTQUFTWSxJQUFJLENBQUNDLGtCQUFrQixDQUFDO1lBQzdETjtZQUNBQztRQUNGO1FBRUEsSUFBSUcsT0FBTztZQUNULG9DQUFvQztZQUNwQyxJQUFJQSxNQUFNRyxPQUFPLEtBQUssNkJBQTZCO2dCQUNqRCxPQUFPZixrRkFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtvQkFBRUUsT0FBTztnQkFBNEIsR0FDckM7b0JBQUVJLFFBQVE7Z0JBQUk7WUFFbEI7WUFFQSxPQUFPaEIsa0ZBQVlBLENBQUNVLElBQUksQ0FDdEI7Z0JBQUVFLE9BQU9BLE1BQU1HLE9BQU87WUFBQyxHQUN2QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0NBQStDO1FBQy9DLE1BQU0sRUFBRUwsTUFBTU0sT0FBTyxFQUFFTCxPQUFPTSxZQUFZLEVBQUUsR0FBRyxNQUFNakIsU0FDbERrQixJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEVBQUUsQ0FBQyxNQUFNVixLQUFLVyxJQUFJLENBQUNDLEVBQUUsRUFDckJDLE1BQU07UUFFVCxJQUFJTixjQUFjO1lBQ2hCTyxRQUFRYixLQUFLLENBQUMsMEJBQTBCTTtRQUN4Qyw0REFBNEQ7UUFDOUQ7UUFFQSwyQkFBMkI7UUFDM0IsT0FBT2xCLGtGQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFDdkJnQixTQUFTO1lBQ1RKLE1BQU07Z0JBQ0pDLElBQUlaLEtBQUtXLElBQUksQ0FBQ0MsRUFBRTtnQkFDaEJmLE9BQU9HLEtBQUtXLElBQUksQ0FBQ2QsS0FBSztnQkFDdEIsR0FBR0csS0FBS1csSUFBSSxDQUFDSyxhQUFhO2dCQUMxQlYsU0FBU0EsV0FBVztZQUN0QjtZQUNBVyxTQUFTakIsS0FBS2lCLE9BQU87UUFDdkI7SUFFRixFQUFFLE9BQU9oQixPQUFZO1FBQ25CYSxRQUFRYixLQUFLLENBQUMsa0JBQWtCQTtRQUNoQyxPQUFPWixrRkFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtZQUFFRSxPQUFPO1FBQXdDLEdBQ2pEO1lBQUVJLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFyaS1wYWluZWwvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHM/NGYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5cclxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSFcclxuKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuXHJcbiAgICAvLyBUZW50YXIgZmF6ZXIgbG9naW4gcHJpbWVpcm9cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguc2lnbkluV2l0aFBhc3N3b3JkKHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICAvLyBUcmFkdXppciBtZW5zYWdlbnMgZGUgZXJybyBjb211bnNcclxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdJbnZhbGlkIGxvZ2luIGNyZWRlbnRpYWxzJykge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgIHsgZXJyb3I6ICdFbWFpbCBvdSBzZW5oYSBpbmNvcnJldG9zJyB9LFxyXG4gICAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2UgbyBsb2dpbiBmb2kgYmVtIHN1Y2VkaWRvLCBidXNjYXIgbyBwZXJmaWxcclxuICAgIGNvbnN0IHsgZGF0YTogcHJvZmlsZSwgZXJyb3I6IHByb2ZpbGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oJ3Byb2ZpbGVzJylcclxuICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgIC5lcSgnaWQnLCBkYXRhLnVzZXIuaWQpXHJcbiAgICAgIC5zaW5nbGUoKVxyXG5cclxuICAgIGlmIChwcm9maWxlRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgcGVyZmlsOicsIHByb2ZpbGVFcnJvcilcclxuICAgICAgLy8gTWVzbW8gc2UgaG91dmVyIGVycm8gYW8gYnVzY2FyIG8gcGVyZmlsLCBwZXJtaXRpciBvIGxvZ2luXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0b3JuYXIgZGFkb3MgZGEgc2Vzc8Ojb1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGlkOiBkYXRhLnVzZXIuaWQsXHJcbiAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCxcclxuICAgICAgICAuLi5kYXRhLnVzZXIudXNlcl9tZXRhZGF0YSxcclxuICAgICAgICBwcm9maWxlOiBwcm9maWxlIHx8IG51bGxcclxuICAgICAgfSxcclxuICAgICAgc2Vzc2lvbjogZGF0YS5zZXNzaW9uXHJcbiAgICB9KVxyXG5cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIGxvZ2luOicsIGVycm9yKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnRXJybyBhbyBmYXplciBsb2dpbi4gVGVudGUgbm92YW1lbnRlLicgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJzdXBhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJhdXRoIiwic2lnbkluV2l0aFBhc3N3b3JkIiwibWVzc2FnZSIsInN0YXR1cyIsInByb2ZpbGUiLCJwcm9maWxlRXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJ1c2VyIiwiaWQiLCJzaW5nbGUiLCJjb25zb2xlIiwic3VjY2VzcyIsInVzZXJfbWV0YWRhdGEiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();