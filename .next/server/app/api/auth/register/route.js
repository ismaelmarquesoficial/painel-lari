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
exports.id = "app/api/auth/register/route";
exports.ids = ["app/api/auth/register/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Programa_o_lari_painel_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/register/route.ts */ \"(rsc)/./app/api/auth/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/register/route\",\n        pathname: \"/api/auth/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/register/route\"\n    },\n    resolvedPagePath: \"D:\\\\Programação\\\\lari-painel\\\\app\\\\api\\\\auth\\\\register\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Programa_o_lari_painel_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVnaXN0ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUHJvZ3JhbWElQzMlQTclQzMlQTNvJTVDbGFyaS1wYWluZWwlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNQcm9ncmFtYSVDMyVBNyVDMyVBM28lNUNsYXJpLXBhaW5lbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhcmktcGFpbmVsLz8xMDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXFByb2dyYW1hw6fDo29cXFxcbGFyaS1wYWluZWxcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9yZWdpc3RlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFByb2dyYW1hw6fDo29cXFxcbGFyaS1wYWluZWxcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlZ2lzdGVyXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/register/route.ts":
/*!****************************************!*\
  !*** ./app/api/auth/register/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n// Cliente Supabase com service role key para bypass de RLS\nconst supabaseAdmin = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(\"https://nsvcsmfyeejzapejopzn.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY, {\n    auth: {\n        autoRefreshToken: true,\n        persistSession: true,\n        detectSessionInUrl: true\n    }\n});\n// Cliente normal para autenticação\nconst supabaseAuth = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(\"https://nsvcsmfyeejzapejopzn.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdmNzbWZ5ZWVqemFwZWpvcHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNTAzMTIsImV4cCI6MjA0ODcyNjMxMn0.uS769_3bJj5UNfTLBPaulx5X3k3Ymy29yhF5mHzi5ro\");\nconst delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\nasync function POST(request) {\n    try {\n        const { name, email, password } = await request.json();\n        await delay(1000);\n        // Usar cliente normal para signup\n        const { data: authData, error: authError } = await supabaseAuth.auth.signUp({\n            email,\n            password,\n            options: {\n                data: {\n                    name,\n                    role: \"client\"\n                },\n                emailRedirectTo: `${\"http://localhost:3000\"}/auth/callback`\n            }\n        });\n        if (authError) {\n            if (authError.message.includes(\"security purposes\")) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Por favor, aguarde alguns segundos antes de tentar novamente.\"\n                }, {\n                    status: 429\n                });\n            }\n            throw authError;\n        }\n        if (!authData.user) {\n            throw new Error(\"Erro ao criar usu\\xe1rio\");\n        }\n        await delay(1000);\n        // Usar cliente admin para inserir o perfil\n        const { error: profileError } = await supabaseAdmin.from(\"profiles\").insert({\n            id: authData.user.id,\n            email: authData.user.email,\n            role: \"client\"\n        });\n        if (profileError) {\n            console.error(\"Erro ao criar perfil:\", profileError);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: profileError.message\n            }, {\n                status: 400\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            message: \"Conta criada com sucesso! Verifique seu email para confirmar o cadastro.\"\n        });\n    } catch (error) {\n        console.error(\"Erro:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBQ1Y7QUFFMUMsMkRBQTJEO0FBQzNELE1BQU1FLGdCQUFnQkYsbUVBQVlBLENBQ2hDRywwQ0FBb0MsRUFDcENBLFFBQVFDLEdBQUcsQ0FBQ0UseUJBQXlCLEVBQ3JDO0lBQ0VDLE1BQU07UUFDSkMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtJQUN0QjtBQUNGO0FBR0YsbUNBQW1DO0FBQ25DLE1BQU1DLGVBQWVYLG1FQUFZQSxDQUMvQkcsMENBQW9DLEVBQ3BDQSxrTkFBeUM7QUFHM0MsTUFBTVUsUUFBUSxDQUFDQyxLQUFlLElBQUlDLFFBQVFDLENBQUFBLFVBQVdDLFdBQVdELFNBQVNGO0FBRWxFLGVBQWVJLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNSCxRQUFRSSxJQUFJO1FBRXBELE1BQU1WLE1BQU07UUFFWixrQ0FBa0M7UUFDbEMsTUFBTSxFQUFFVyxNQUFNQyxRQUFRLEVBQUVDLE9BQU9DLFNBQVMsRUFBRSxHQUFHLE1BQU1oQixhQUFhSixJQUFJLENBQUNxQixNQUFNLENBQUM7WUFDMUVQO1lBQ0FDO1lBQ0FPLFNBQVM7Z0JBQ1BMLE1BQU07b0JBQ0pKO29CQUNBVSxNQUFNO2dCQUNSO2dCQUNBQyxpQkFBaUIsQ0FBQyxFQUFFNUIsdUJBQWdDLENBQUMsY0FBYyxDQUFDO1lBQ3RFO1FBQ0Y7UUFFQSxJQUFJd0IsV0FBVztZQUNiLElBQUlBLFVBQVVNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLHNCQUFzQjtnQkFDbkQsT0FBT2pDLGtGQUFZQSxDQUFDc0IsSUFBSSxDQUN0QjtvQkFBRUcsT0FBTztnQkFBZ0UsR0FDekU7b0JBQUVTLFFBQVE7Z0JBQUk7WUFFbEI7WUFDQSxNQUFNUjtRQUNSO1FBRUEsSUFBSSxDQUFDRixTQUFTVyxJQUFJLEVBQUU7WUFDbEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsTUFBTXhCLE1BQU07UUFFWiwyQ0FBMkM7UUFDM0MsTUFBTSxFQUFFYSxPQUFPWSxZQUFZLEVBQUUsR0FBRyxNQUFNcEMsY0FDbkNxQyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDO1lBQ05DLElBQUloQixTQUFTVyxJQUFJLENBQUNLLEVBQUU7WUFDcEJwQixPQUFPSSxTQUFTVyxJQUFJLENBQUNmLEtBQUs7WUFDMUJTLE1BQU07UUFDUjtRQUVGLElBQUlRLGNBQWM7WUFDaEJJLFFBQVFoQixLQUFLLENBQUMseUJBQXlCWTtZQUN2QyxPQUFPckMsa0ZBQVlBLENBQUNzQixJQUFJLENBQ3RCO2dCQUFFRyxPQUFPWSxhQUFhTCxPQUFPO1lBQUMsR0FDOUI7Z0JBQUVFLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9sQyxrRkFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUN2Qm9CLFNBQVM7WUFDVFYsU0FBUztRQUNYO0lBRUYsRUFBRSxPQUFPUCxPQUFZO1FBQ25CZ0IsUUFBUWhCLEtBQUssQ0FBQyxTQUFTQTtRQUN2QixPQUFPekIsa0ZBQVlBLENBQUNzQixJQUFJLENBQ3RCO1lBQUVHLE9BQU9BLE1BQU1PLE9BQU87UUFBQyxHQUN2QjtZQUFFRSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhcmktcGFpbmVsLy4vYXBwL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlLnRzPzRhOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuXHJcbi8vIENsaWVudGUgU3VwYWJhc2UgY29tIHNlcnZpY2Ugcm9sZSBrZXkgcGFyYSBieXBhc3MgZGUgUkxTXHJcbmNvbnN0IHN1cGFiYXNlQWRtaW4gPSBjcmVhdGVDbGllbnQoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMISxcclxuICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZISwgLy8gU2VydmljZSByb2xlIGtleSBlbSB2ZXogZGUgYW5vbiBrZXlcclxuICB7XHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIGF1dG9SZWZyZXNoVG9rZW46IHRydWUsXHJcbiAgICAgIHBlcnNpc3RTZXNzaW9uOiB0cnVlLFxyXG4gICAgICBkZXRlY3RTZXNzaW9uSW5Vcmw6IHRydWVcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbi8vIENsaWVudGUgbm9ybWFsIHBhcmEgYXV0ZW50aWNhw6fDo29cclxuY29uc3Qgc3VwYWJhc2VBdXRoID0gY3JlYXRlQ2xpZW50KFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkhXHJcbilcclxuXHJcbmNvbnN0IGRlbGF5ID0gKG1zOiBudW1iZXIpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxyXG5cclxuICAgIGF3YWl0IGRlbGF5KDEwMDApXHJcblxyXG4gICAgLy8gVXNhciBjbGllbnRlIG5vcm1hbCBwYXJhIHNpZ251cFxyXG4gICAgY29uc3QgeyBkYXRhOiBhdXRoRGF0YSwgZXJyb3I6IGF1dGhFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VBdXRoLmF1dGguc2lnblVwKHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgZGF0YTogeyBcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICByb2xlOiAnY2xpZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWxSZWRpcmVjdFRvOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTH0vYXV0aC9jYWxsYmFja2BcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoYXV0aEVycm9yKSB7XHJcbiAgICAgIGlmIChhdXRoRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnc2VjdXJpdHkgcHVycG9zZXMnKSkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgIHsgZXJyb3I6ICdQb3IgZmF2b3IsIGFndWFyZGUgYWxndW5zIHNlZ3VuZG9zIGFudGVzIGRlIHRlbnRhciBub3ZhbWVudGUuJyB9LFxyXG4gICAgICAgICAgeyBzdGF0dXM6IDQyOSB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIHRocm93IGF1dGhFcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGlmICghYXV0aERhdGEudXNlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm8gYW8gY3JpYXIgdXN1w6FyaW8nKVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGRlbGF5KDEwMDApXHJcblxyXG4gICAgLy8gVXNhciBjbGllbnRlIGFkbWluIHBhcmEgaW5zZXJpciBvIHBlcmZpbFxyXG4gICAgY29uc3QgeyBlcnJvcjogcHJvZmlsZUVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZUFkbWluXHJcbiAgICAgIC5mcm9tKCdwcm9maWxlcycpXHJcbiAgICAgIC5pbnNlcnQoe1xyXG4gICAgICAgIGlkOiBhdXRoRGF0YS51c2VyLmlkLFxyXG4gICAgICAgIGVtYWlsOiBhdXRoRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICAgIHJvbGU6ICdjbGllbnQnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgaWYgKHByb2ZpbGVFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNyaWFyIHBlcmZpbDonLCBwcm9maWxlRXJyb3IpXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBwcm9maWxlRXJyb3IubWVzc2FnZSB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgbWVzc2FnZTogJ0NvbnRhIGNyaWFkYSBjb20gc3VjZXNzbyEgVmVyaWZpcXVlIHNldSBlbWFpbCBwYXJhIGNvbmZpcm1hciBvIGNhZGFzdHJvLidcclxuICAgIH0pXHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm86JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSxcclxuICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICApXHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJzdXBhYmFzZUFkbWluIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkiLCJhdXRoIiwiYXV0b1JlZnJlc2hUb2tlbiIsInBlcnNpc3RTZXNzaW9uIiwiZGV0ZWN0U2Vzc2lvbkluVXJsIiwic3VwYWJhc2VBdXRoIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiUE9TVCIsInJlcXVlc3QiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImpzb24iLCJkYXRhIiwiYXV0aERhdGEiLCJlcnJvciIsImF1dGhFcnJvciIsInNpZ25VcCIsIm9wdGlvbnMiLCJyb2xlIiwiZW1haWxSZWRpcmVjdFRvIiwiTkVYVF9QVUJMSUNfU0lURV9VUkwiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJ1c2VyIiwiRXJyb3IiLCJwcm9maWxlRXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwiaWQiLCJjb25zb2xlIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/register/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPrograma%C3%A7%C3%A3o%5Clari-painel&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();