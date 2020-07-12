require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.ts": "./app.ts",
	"./shared/config.ts": "./shared/config.ts",
	"./shared/listService.ts": "./shared/listService.ts",
	"./shared/loginService.ts": "./shared/loginService.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.css"), "");

// Module
exports.push([module.i, "ActionBar {\n  background-color: black;\n  color: white;\n}", ""]);

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/svelte-native/index.js");
/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svelte_native__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Login_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./views/Login.svelte");
/* harmony import */ var svelte_native_nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/svelte-native-nativescript-ui/listview/index.mjs");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        /*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/



svelte_native_nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__["default"].register();
//import * as trace from "tns-core-modules/trace"
//trace.enable();
//trace.addCategories(DomTraceCategory);
Object(svelte_native__WEBPACK_IMPORTED_MODULE_0__["svelteNative"])(_views_Login_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], {});
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.ts" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ }),

/***/ "./shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony default export */ __webpack_exports__["default"] = ({
    apiUrl: "https://baas.kinvey.com/",
    appKey: "kid_HyHoT_REf",
    appUserHeader: "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ",
    token: null
});
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./shared/config.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./shared/config.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/listService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItems", function() { return fetchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/fetch/fetch.js");
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loginService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/loginService.ts");
/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/svelte-native/index.js");
/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svelte_native__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_Login_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/Login.svelte");





var baseUrl = _config__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + "appdata/" + _config__WEBPACK_IMPORTED_MODULE_0__["default"].appKey + "/Groceries";
var fetchItems = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, jsonOrDie("")];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data.map(function (grocery) { return ({
                        name: grocery.Name,
                        id: grocery._id
                    }); })];
        }
    });
}); };
var addItem = function (grocery) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, jsonOrDie("", {
                    method: "POST",
                    body: JSON.stringify({
                        Name: grocery
                    }),
                })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, { name: grocery, id: data._id }];
        }
    });
}); };
var deleteItem = function (groceryItem) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, responseOrDie("/" + groceryItem.id, {
                        method: "DELETE",
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
function getCommonHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": "Kinvey " + _config__WEBPACK_IMPORTED_MODULE_0__["default"].token
    };
}
function responseOrDie(relative_url, fetchOptions) {
    if (fetchOptions === void 0) { fetchOptions = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, options, response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = baseUrl + relative_url;
                    options = __assign(__assign({}, fetchOptions), { headers: __assign(__assign({}, getCommonHeaders()), fetchOptions.headers) });
                    return [4 /*yield*/, Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__["fetch"])(url, options)];
                case 1:
                    response = _b.sent();
                    if (!(response.status == 401)) return [3 /*break*/, 7];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, Object(_loginService__WEBPACK_IMPORTED_MODULE_2__["getTokenFromCachedCredentials"])()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    Object(svelte_native__WEBPACK_IMPORTED_MODULE_3__["navigate"])({ page: _views_Login_svelte__WEBPACK_IMPORTED_MODULE_4__["default"], clearHistory: true });
                    return [2 /*return*/];
                case 5: return [4 /*yield*/, Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__["fetch"])(url, options)];
                case 6:
                    response = _b.sent();
                    _b.label = 7;
                case 7:
                    if (!response.ok) {
                        console.log(JSON.stringify(response));
                        throw Error(response.statusText);
                    }
                    return [2 /*return*/, response];
            }
        });
    });
}
function jsonOrDie(relative_url, fetchOptions) {
    if (fetchOptions === void 0) { fetchOptions = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, responseOrDie(relative_url, fetchOptions)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./shared/listService.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./shared/listService.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/loginService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenFromCachedCredentials", function() { return getTokenFromCachedCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/fetch/fetch.js");
/* harmony import */ var tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__);


var cached_credentials = null;
function getTokenFromCachedCredentials() {
    console.log("acquiring token");
    _config__WEBPACK_IMPORTED_MODULE_0__["default"].token = null;
    if (!cached_credentials)
        throw Error("no cached credentials");
    return Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__["fetch"])(_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_0__["default"].appKey + "/login", {
        method: "POST",
        body: cached_credentials,
        headers: getCommonHeaders()
    })
        .then(handleErrors)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log("got token");
        _config__WEBPACK_IMPORTED_MODULE_0__["default"].token = data._kmd.authtoken;
    });
}
function login(email, password) {
    cached_credentials = JSON.stringify({ username: email, password: password });
    return getTokenFromCachedCredentials();
}
;
function register(email, password) {
    if (!email || !password) {
        return Promise.reject(new Error("Please provide both an email address and password."));
    }
    return Object(tns_core_modules_fetch__WEBPACK_IMPORTED_MODULE_1__["fetch"])(_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_0__["default"].appKey, {
        method: "POST",
        body: JSON.stringify({
            username: email,
            email: email,
            password: password
        }),
        headers: getCommonHeaders()
    }).then(handleErrors);
}
;
function getCommonHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": _config__WEBPACK_IMPORTED_MODULE_0__["default"].appUserHeader
    };
}
function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./shared/loginService.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./shared/loginService.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/List.svelte":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_native_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/svelte-native/components/index.mjs");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_listService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/listService.ts");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/svelte/index.mjs");
/* harmony import */ var svelte_native_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/svelte-native/transitions/index.mjs");
/* harmony import */ var _Users_isakoc_svShopApp_node_modules_svelte_loader_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/svelte-loader/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_isakoc_svShopApp_node_modules_svelte_hmr_runtime_svelte_native_proxy_adapter_native_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/svelte-hmr/runtime/svelte-native/proxy-adapter-native.js");
/* app/views/List.svelte generated by Svelte v3.12.1 */








function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-1tg21t3-style';
	style.textContent = ".add-bar.svelte-1tg21t3{background-color:#CB1D00;padding:5}.add-bar.svelte-1tg21t3 Image.svelte-1tg21t3{height:15;vertical-align:center;margin-left:10;margin-right:10}.add-bar.svelte-1tg21t3 TextField.svelte-1tg21t3{padding:10;color:white;placeholder-color:#efefef;border-color:white}.delete-view.svelte-1tg21t3{background-color:#CB1D00;padding:20}.delete-view.svelte-1tg21t3 Image.svelte-1tg21t3{color:white}Label.svelte-1tg21t3{background-color:white;border-bottom-width:1;border-bottom-color:gray}";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

// (88:8) {#if listLoaded}
function create_if_block(ctx) {
	var radListView, radListView_transition, current, dispose;

	var template0 = new svelte_native_components__WEBPACK_IMPORTED_MODULE_1__["Template"]({
		props: {
		type: nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__["ListViewViewType"].ItemView,
		$$slots: {
		default: [create_default_slot_1, ({ item }) => ({ item })]
	},
		$$scope: { ctx }
	}
	});

	var template1 = new svelte_native_components__WEBPACK_IMPORTED_MODULE_1__["Template"]({
		props: {
		type: nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__["ListViewViewType"].ItemSwipeView,
		$$slots: {
		default: [create_default_slot, ({ item }) => ({ item })]
	},
		$$scope: { ctx }
	}
	});

	return {
		c() {
			radListView = document.createElementNS("http://www.w3.org/2000/xmlns", "radListView");
			template0.$$.fragment.c();
			template1.$$.fragment.c();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(radListView, "items", ctx.groceryList);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(radListView, "row", "1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(radListView, "swipeactions", "true");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(radListView, "itemSwipeProgressStarted", ctx.onSwipeCellStarted);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, radListView, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template0, radListView, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(template1, radListView, null);
			current = true;
		},

		p(changed, ctx) {
			var template0_changes = {};
			if (changed.$$scope) template0_changes.$$scope = { changed, ctx };
			template0.$set(template0_changes);

			var template1_changes = {};
			if (changed.$$scope) template1_changes.$$scope = { changed, ctx };
			template1.$set(template1_changes);

			if (!current || changed.groceryList) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(radListView, "items", ctx.groceryList);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template0.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(template1.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (!radListView_transition) radListView_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(radListView, svelte_native_transitions__WEBPACK_IMPORTED_MODULE_6__["fade"], {duration: 1000 }, true);
				radListView_transition.run(1);
			});

			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template0.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(template1.$$.fragment, local);

			if (!radListView_transition) radListView_transition = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_bidirectional_transition"])(radListView, svelte_native_transitions__WEBPACK_IMPORTED_MODULE_6__["fade"], {duration: 1000 }, false);
			radListView_transition.run(0);

			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(radListView);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template0);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(template1);

			if (detaching) {
				if (radListView_transition) radListView_transition.end();
			}

			dispose();
		}
	};
}

// (91:12) <Template type="{ListViewViewType.ItemView}" let:item>
function create_default_slot_1(ctx) {
	var gridLayout, label, label_text_value, t;

	return {
		c() {
			gridLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "gridLayout");
			label = document.createElementNS("http://www.w3.org/2000/xmlns", "label");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "class", "p-15 svelte-1tg21t3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "text", label_text_value = ctx.item.name);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout, "class", "grocery-list-item");
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, gridLayout, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(gridLayout, label);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
		},

		p(changed, ctx) {
			if ((changed.item) && label_text_value !== (label_text_value = ctx.item.name)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "text", label_text_value);
			}
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(gridLayout);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			}
		}
	};
}

// (96:12) <Template type="{ListViewViewType.ItemSwipeView}" let:item>
function create_default_slot(ctx) {
	var gridLayout, stackLayout, image, t, dispose;

	return {
		c() {
			gridLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "gridLayout");
			stackLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "stackLayout");
			image = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("image");
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "src", "~/images/delete.png");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "class", "svelte-1tg21t3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(stackLayout, "id", "delete-view");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(stackLayout, "col", "1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(stackLayout, "class", "delete-view svelte-1tg21t3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout, "columns", "*,auto");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout, "backgroundcolor", "red");
			dispose = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(stackLayout, "tap", ctx.doDelete);
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, gridLayout, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(gridLayout, stackLayout);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, image);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(gridLayout);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
			}

			dispose();
		}
	};
}

function create_fragment(ctx) {
	var page, actionBar, gridLayout1, gridLayout0, textField, image, activityIndicator, current, dispose;

	var if_block = (ctx.listLoaded) && create_if_block(ctx);

	return {
		c() {
			page = document.createElementNS("http://www.w3.org/2000/xmlns", "page");
			actionBar = document.createElementNS("http://www.w3.org/2000/xmlns", "actionBar");
			gridLayout1 = document.createElementNS("http://www.w3.org/2000/xmlns", "gridLayout");
			gridLayout0 = document.createElementNS("http://www.w3.org/2000/xmlns", "gridLayout");
			textField = document.createElementNS("http://www.w3.org/2000/xmlns", "textField");
			image = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("image");
			if (if_block) if_block.c();
			activityIndicator = document.createElementNS("http://www.w3.org/2000/xmlns", "activityIndicator");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(actionBar, "title", "Groceries");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField, "text", ctx.grocery);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField, "hint", "Enter a grocery item");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField, "col", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField, "class", "svelte-1tg21t3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "src", "~/images/add.png");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "col", "1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "class", "svelte-1tg21t3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout0, "row", "0");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout0, "columns", "*, auto");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout0, "class", "add-bar svelte-1tg21t3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(activityIndicator, "busy", ctx.isLoading);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(activityIndicator, "row", "1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(activityIndicator, "horizontalalignment", "center");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(activityIndicator, "verticalalignment", "center");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(gridLayout1, "rows", "auto, *");

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(textField, "textChange", ctx.textChange_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(image, "tap", ctx.doAdd)
			];
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, page, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(page, actionBar);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(page, gridLayout1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(gridLayout1, gridLayout0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(gridLayout0, textField);
			ctx.textField_binding(textField);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(gridLayout0, image);
			if (if_block) if_block.m(gridLayout1, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(gridLayout1, activityIndicator);
			current = true;
		},

		p(changed, ctx) {
			if (!current || changed.grocery) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField, "text", ctx.grocery);
			}

			if (ctx.listLoaded) {
				if (if_block) {
					if_block.p(changed, ctx);
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(gridLayout1, activityIndicator);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}

			if (!current || changed.isLoading) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(activityIndicator, "busy", ctx.isLoading);
			}
		},

		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},

		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(page);
			}

			ctx.textField_binding(null);
			if (if_block) if_block.d();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

    let itemTemplate;
    let isLoading = false;
    let groceryList = [];
    let grocery = "";
    let groceryInput;
    let listLoaded = false;

    Object(svelte__WEBPACK_IMPORTED_MODULE_5__["onMount"])(async () => {
        //load
        $$invalidate('isLoading', isLoading = true);
        try {
            let items = await Object(_shared_listService__WEBPACK_IMPORTED_MODULE_4__["fetchItems"])();
            $$invalidate('isLoading', isLoading = false);
            $$invalidate('listLoaded', listLoaded = true);
            $$invalidate('groceryList', groceryList = items)
        } catch (error) {
            console.log(error)
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"])("There was an error fetching your items");
            $$invalidate('listLoaded', listLoaded = true);
            $$invalidate('isLoading', isLoading = false);
            $$invalidate('groceryList', groceryList = []);
        }
    });

    const doAdd = () => {
        if (grocery.trim() === "") {
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"])({
                message: "Enter a grocery item",
                okButtonText: "OK"
            });
            return;
        }
        groceryInput.nativeView.dismissSoftInput();

        try {
            let item = Object(_shared_listService__WEBPACK_IMPORTED_MODULE_4__["addItem"])(grocery)
            $$invalidate('groceryList', groceryList = [...groceryList, item])
            $$invalidate('grocery', grocery = "");
        } catch (error) {
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"])({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
        }
    }

    let onSwipeCellStarted = (args) => {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    let doDelete = (args) => {
        var item = args.view.bindingContext;
        if (groceryList.indexOf(item) < 0) return;
        try {
            Object(_shared_listService__WEBPACK_IMPORTED_MODULE_4__["deleteItem"])(item)
            $$invalidate('groceryList', groceryList = groceryList.filter(i => i != item));
        } catch (error) {
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"])({
                message: "An error occurred while removing the item from your list.",
                okButtonText: "OK"
            });
        }
    }

	function textField_binding($$value) {
		svelte_internal__WEBPACK_IMPORTED_MODULE_0__["binding_callbacks"][$$value ? 'unshift' : 'push'](() => {
			$$invalidate('groceryInput', groceryInput = $$value);
		});
	}

	const textChange_handler = (e) => $$invalidate('grocery', grocery = e.value);

	return {
		isLoading,
		groceryList,
		grocery,
		groceryInput,
		listLoaded,
		doAdd,
		onSwipeCellStarted,
		doDelete,
		textField_binding,
		textChange_handler
	};
}

class List extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1tg21t3-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


      
      
      if (module && module.hot) {
        const { applyHmr } = _Users_isakoc_svShopApp_node_modules_svelte_loader_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_7__;
        List = applyHmr({
          m: module,
          id: "\"app/views/List.svelte\"",
          hotOptions: {"native":true},
          Component: List,
          ProxyAdapter: _Users_isakoc_svShopApp_node_modules_svelte_hmr_runtime_svelte_native_proxy_adapter_native_js__WEBPACK_IMPORTED_MODULE_8__["default"],
          compileData: {"vars":[{"name":"Template","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false},{"name":"ListViewViewType","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false},{"name":"alert","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"fetchItems","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"addItem","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"deleteItem","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"onMount","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"fade","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false},{"name":"itemTemplate","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":true},{"name":"isLoading","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"groceryList","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"grocery","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"groceryInput","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"listLoaded","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"doAdd","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false},{"name":"onSwipeCellStarted","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":true},{"name":"doDelete","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":true}]}
        });
      }
			/* harmony default export */ __webpack_exports__["default"] = (List);
		
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./views/Login.svelte":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/svelte/internal/index.mjs");
/* harmony import */ var _shared_loginService_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/loginService.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/svelte-native/index.js");
/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svelte_native__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _List_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./views/List.svelte");
/* harmony import */ var _Users_isakoc_svShopApp_node_modules_svelte_loader_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/svelte-loader/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_isakoc_svShopApp_node_modules_svelte_hmr_runtime_svelte_native_proxy_adapter_native_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/svelte-hmr/runtime/svelte-native/proxy-adapter-native.js");
/* app/views/Login.svelte generated by Svelte v3.12.1 */






function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-p1ly0z-style';
	style.textContent = "FlexboxLayout.svelte-p1ly0z{justify-content:center;align-items:center;background-size:cover;background-image:url(\"~/images/background.jpg\")}StackLayout.svelte-p1ly0z{width:300;padding:10 16;background-color:#f0f0f0}Image.svelte-p1ly0z{margin-bottom:20;height:70}Button.svelte-p1ly0z,TextField.svelte-p1ly0z{margin-bottom:10}.btn-primary.svelte-p1ly0z{background-color:#CB1D00;color:white;margin-left:0;margin-right:0}TextField.svelte-p1ly0z{placeholder-color:#C4AFB4;color:black}";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var page, flexboxLayout, stackLayout, image, textField0, textField1, button0, button0_text_value, button1, button1_text_value, dispose;

	return {
		c() {
			page = document.createElementNS("http://www.w3.org/2000/xmlns", "page");
			flexboxLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "flexboxLayout");
			stackLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "stackLayout");
			image = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["svg_element"])("image");
			textField0 = document.createElementNS("http://www.w3.org/2000/xmlns", "textField");
			textField1 = document.createElementNS("http://www.w3.org/2000/xmlns", "textField");
			button0 = document.createElementNS("http://www.w3.org/2000/xmlns", "button");
			button1 = document.createElementNS("http://www.w3.org/2000/xmlns", "button");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "src", "~/images/logo.png");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(image, "class", "svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "hint", "Email Address");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "text", ctx.email);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "keyboardtype", "email");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "autocorrect", "false");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "autocapitalizationtype", "none");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "class", "input input-border svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField1, "hint", "Password");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField1, "secure", "true");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField1, "text", ctx.password);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField1, "class", "input input-border svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "text", button0_text_value = ctx.isLoggingIn ? 'Sign in' : 'Sign up');
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "class", "btn btn-primary svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "text", button1_text_value = ctx.isLoggingIn ? 'Sign up' : 'Back to login');
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "class", "svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(stackLayout, "class", "svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(flexboxLayout, "class", "svelte-p1ly0z");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(page, "actionbarhidden", true);

			dispose = [
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(textField0, "textChange", ctx.textChange_handler),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(textField1, "textChange", ctx.textChange_handler_1),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button0, "tap", ctx.submit),
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["listen"])(button1, "tap", ctx.toggleDisplay)
			];
		},

		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, page, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(page, flexboxLayout);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(flexboxLayout, stackLayout);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, image);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, textField0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, textField1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, button0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, button1);
		},

		p(changed, ctx) {
			if (changed.email) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField0, "text", ctx.email);
			}

			if (changed.password) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(textField1, "text", ctx.password);
			}

			if ((changed.isLoggingIn) && button0_text_value !== (button0_text_value = ctx.isLoggingIn ? 'Sign in' : 'Sign up')) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button0, "text", button0_text_value);
			}

			if ((changed.isLoggingIn) && button1_text_value !== (button1_text_value = ctx.isLoggingIn ? 'Sign up' : 'Back to login')) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(button1, "text", button1_text_value);
			}
		},

		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d(detaching) {
			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(page);
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["run_all"])(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

    let email = ""
    let password = ""
    let isLoggingIn = true;

    const submit = () => { isLoggingIn ? doSignIn() : doRegister() }

    const toggleDisplay = () => { $$invalidate('isLoggingIn', isLoggingIn = !isLoggingIn) }

    const doSignIn = async () => {
        try {
            await Object(_shared_loginService_ts__WEBPACK_IMPORTED_MODULE_1__["login"])(email, password)
        } catch (e) {
            console.log(e);
            await Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"])({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            throw Error("login failed")
        }
        Object(svelte_native__WEBPACK_IMPORTED_MODULE_3__["navigate"])({ page: _List_svelte__WEBPACK_IMPORTED_MODULE_4__["default"] });
    }

    const doRegister = async () => {
        try {
            await Object(_shared_loginService_ts__WEBPACK_IMPORTED_MODULE_1__["register"])(email, password)
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"])("Your account was successfully created.")
        } catch (error) {
            Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"])({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
            });
        }
    }

	const textChange_handler = (e) => $$invalidate('email', email = e.value);

	const textChange_handler_1 = (e) => $$invalidate('password', password = e.value);

	return {
		email,
		password,
		isLoggingIn,
		submit,
		toggleDisplay,
		textChange_handler,
		textChange_handler_1
	};
}

class Login extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-p1ly0z-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}


      
      
      if (module && module.hot) {
        const { applyHmr } = _Users_isakoc_svShopApp_node_modules_svelte_loader_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_5__;
        Login = applyHmr({
          m: module,
          id: "\"app/views/Login.svelte\"",
          hotOptions: {"native":true},
          Component: Login,
          ProxyAdapter: _Users_isakoc_svShopApp_node_modules_svelte_hmr_runtime_svelte_native_proxy_adapter_native_js__WEBPACK_IMPORTED_MODULE_6__["default"],
          compileData: {"vars":[{"name":"login","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"register","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"alert","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"navigate","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"List","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"email","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"password","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"isLoggingIn","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true},{"name":"submit","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false},{"name":"toggleDisplay","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":true,"writable":false},{"name":"doSignIn","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false},{"name":"doRegister","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false}]}
        });
      }
			/* harmony default export */ __webpack_exports__["default"] = (Login);
		
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvbGlzdFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2xvZ2luU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi92aWV3cy9MaXN0LnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi92aWV3cy9Mb2dpbi5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7O0FDM0JBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLFVBQVUsbUJBQU8sQ0FBQyw4RkFBdUY7O0FBRXpHO0FBQ0EsY0FBYyxRQUFTLGNBQWMsNEJBQTRCLGlCQUFpQixHQUFHOztBQUVyRixDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlELEtBQUs7QUFDTCxDOzs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7RUFJRTtBQUVGLE9BQU8sRUFBRSxZQUFZLEVBQW9CLE1BQU0sNEVBQWdCO0FBQy9ELE9BQU8sR0FBRyxNQUFPLHNCQUFzQixDQUFDO0FBQ3hDLE9BQU8sUUFBUSxNQUFNLG9DQUF3QztBQUV6QztBQUVwQiwrQ0FBaUQ7QUFDakQsaUJBQWlCO0FBQ2pCLGNBQXdDO0FBR2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ0QjtBQUFBLDhDQUFlO0lBQ1gsTUFBTSxFQUFFLDBCQUEwQjtJQUNsQyxNQUFNLEVBQUUsZUFBZTtJQUN2QixhQUFhLEVBQUUsc0VBQXNFO0lBQ3JGLEtBQUssRUFBRyxJQUFjO0NBQ3pCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNrQjtBQUNlO0FBQ3JCO0FBQ0M7QUFFMUMsSUFBSSxPQUFPLEdBQUcsK0NBQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLCtDQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztBQUVqRSxJQUFNLFVBQVUsR0FBRzs7OztvQkFDVixxQkFBTSxTQUFTLENBQUMsRUFBRSxDQUFDOztnQkFBM0IsSUFBSSxHQUFJLFNBQW1CO2dCQUUvQixzQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLElBQUksUUFDdkI7d0JBQ0ksSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO3dCQUNsQixFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUc7cUJBQ2xCLENBQUMsRUFKcUIsQ0FJckIsQ0FDTCxFQUFDOzs7S0FDTCxDQUFDO0FBRUssSUFBTSxPQUFPLEdBQUcsVUFBTyxPQUFPOzs7O29CQUN0QixxQkFBTSxTQUFTLENBQUMsRUFBRSxFQUFFO29CQUMzQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDakIsSUFBSSxFQUFFLE9BQU87cUJBQ2hCLENBQUM7aUJBQ0wsQ0FBQzs7Z0JBTEUsSUFBSSxHQUFHLFNBS1Q7Z0JBQ0Ysc0JBQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUM7OztLQUMxQztBQUdNLElBQU0sVUFBVSxHQUFHLFVBQWdCLFdBQVc7Ozs7d0JBQ2pELHFCQUFNLGFBQWEsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEVBQUUsRUFBRTt3QkFDdEMsTUFBTSxFQUFFLFFBQVE7cUJBQ25CLENBQUM7O29CQUZGLFNBRUU7Ozs7O0NBQ0wsQ0FBQztBQUVGLFNBQVMsZ0JBQWdCO0lBQ3JCLE9BQU87UUFDSCxjQUFjLEVBQUUsa0JBQWtCO1FBQ2xDLGVBQWUsRUFBRSxTQUFTLEdBQUcsK0NBQU0sQ0FBQyxLQUFLO0tBQzVDO0FBQ0wsQ0FBQztBQUVELFNBQWUsYUFBYSxDQUFDLFlBQVksRUFBRSxZQUFvQztJQUFwQyxnREFBb0M7Ozs7OztvQkFDdkUsR0FBRyxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7b0JBQzdCLE9BQU8seUJBQVEsWUFBWSxLQUFFLE9BQU8sd0JBQU8sZ0JBQWdCLEVBQUUsR0FBSyxZQUFZLENBQUMsT0FBTyxJQUFFO29CQUM3RSxxQkFBTSxvRUFBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7O29CQUFwQyxRQUFRLEdBQUcsU0FBeUI7eUJBR3BDLFNBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUF0Qix3QkFBc0I7Ozs7b0JBRWxCLHFCQUFNLG1GQUE2QixFQUFFOztvQkFBckMsU0FBcUMsQ0FBQzs7OztvQkFFdEMsOERBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSwyREFBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDN0Msc0JBQU87d0JBRUEscUJBQU0sb0VBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDOztvQkFBcEMsUUFBUSxHQUFHLFNBQXlCLENBQUM7OztvQkFHekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7d0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDcEM7b0JBQ0Qsc0JBQU8sUUFBUSxFQUFDOzs7O0NBQ25CO0FBRUQsU0FBZSxTQUFTLENBQUMsWUFBWSxFQUFFLFlBQW9DO0lBQXBDLGdEQUFvQzs7Ozs7d0JBQ3hELHFCQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDOztvQkFBMUQsUUFBUSxHQUFHLFNBQStDO29CQUN2RCxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFO3dCQUE1QixzQkFBTyxTQUFxQixFQUFDOzs7O0NBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNrQjtBQUUvQyxJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUV2QixTQUFTLDZCQUE2QjtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQzlCLCtDQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixJQUFJLENBQUMsa0JBQWtCO1FBQUUsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUU5RCxPQUFPLG9FQUFLLENBQUMsK0NBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLCtDQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRTtRQUM3RCxNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFO0tBQzlCLENBQUM7U0FDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2xCLElBQUksQ0FBQyxVQUFVLFFBQVE7UUFDdEIsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUN4QiwrQ0FBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLEtBQUssQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7SUFDbkQsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDNUUsT0FBTyw2QkFBNkIsRUFBRSxDQUFDO0FBQ3pDLENBQUM7QUFBQSxDQUFDO0FBRUssU0FBUyxRQUFRLENBQUMsS0FBYSxFQUFFLFFBQWdCO0lBQ3RELElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDdkIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztLQUN4RjtJQUVELE9BQU8sb0VBQUssQ0FBQywrQ0FBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsK0NBQU0sQ0FBQyxNQUFNLEVBQUU7UUFDcEQsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQztRQUNGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRTtLQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFBQSxDQUFDO0FBRUYsU0FBUyxnQkFBZ0I7SUFDdkIsT0FBTztRQUNMLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsZUFBZSxFQUFFLCtDQUFNLENBQUMsYUFBYTtLQUN0QztBQUNILENBQUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxRQUFRO0lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNsQztJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQytCNEIseUVBQWdCLENBQUMsUUFBUTs7Ozs7Ozs7OztRQUt6Qix5RUFBZ0IsQ0FBQyxhQUFhOzs7Ozs7Ozs7Ozs7OzBGQVA3QixXQUFXOzs7eUhBQTBDLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBQXZFLFdBQVc7Ozs7Ozs7Ozs7OytOQUNTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7OE5BQWpCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzR0FHbkIsSUFBSSxDQUFDLElBQUk7Ozs7Ozs7Ozs7O3NFQUFULElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUtVLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQVY5RCxVQUFVOzs7Ozs7Ozs7Ozs7O3VGQUpPLE9BQU87Ozs7Ozs7Ozs7K0ZBcUJGLFNBQVM7Ozs7Ozs7NEZBckJZO3FGQUVMLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBRjFCLE9BQU87OztXQUl4QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQWlCWSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbEdROztJQUVoRCxJQUFJLFlBQVksQ0FBQztJQUNqQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDdEIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixJQUFJLFlBQVksQ0FBQztJQUNqQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7O0lBRXZCLHNEQUFPLENBQUMsWUFBWTs7a0NBRWhCLFNBQVMsR0FBRyxLQUFJLENBQUM7UUFDakIsSUFBSTtZQUNBLElBQUksS0FBSyxHQUFHLE1BQU0sc0VBQVUsRUFBRSxDQUFDO3NDQUMvQixTQUFTLEdBQUcsTUFBSyxDQUFDO3VDQUNsQixVQUFVLEdBQUcsS0FBSSxDQUFDO3dDQUNsQixXQUFXLEdBQUcsTUFBSztTQUN0QixDQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbEIseUVBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO3VDQUNoRCxVQUFVLEdBQUcsS0FBSSxDQUFDO3NDQUNsQixTQUFTLEdBQUcsTUFBSyxDQUFDO3dDQUNsQixXQUFXLEdBQUcsR0FBRSxDQUFDO1NBQ3BCO0tBQ0osQ0FBQyxDQUFDOztJQUVILE1BQU0sS0FBSyxHQUFHLE1BQU07UUFDaEIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLHlFQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBQ0QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztRQUUzQyxJQUFJO1lBQ0EsSUFBSSxJQUFJLEdBQUcsbUVBQU8sQ0FBQyxPQUFPLENBQUM7d0NBQzNCLFdBQVcsR0FBRyxDQUFDLEdBQUcsV0FBVyxFQUFFLElBQUksRUFBQztvQ0FDcEMsT0FBTyxHQUFHLEdBQUUsQ0FBQztTQUNoQixDQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1oseUVBQUssQ0FBQztnQkFDRixPQUFPLEVBQUUsc0RBQXNEO2dCQUMvRCxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7U0FDTjtLQUNKOztJQUVELElBQUksa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLEtBQUs7UUFDL0IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakQsV0FBVyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDckIsV0FBVyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDNUQ7O0lBRUQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUs7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDcEMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPO1FBQzFDLElBQUk7WUFDQSxzRUFBVSxDQUFDLElBQUksQ0FBQzt3Q0FDaEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUMsQ0FBQztTQUNwRCxDQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1oseUVBQUssQ0FBQztnQkFDRixPQUFPLEVBQUUsMkRBQTJEO2dCQUNwRSxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFDLENBQUM7U0FDTjtLQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZDN0I4QyxLQUFLOzs7Ozs7O3dGQUVJLFFBQVE7OzBHQUV4QyxXQUFXLEdBQUcsU0FBUyxHQUFHLFNBQVM7OzBHQUNuQyxXQUFXLEdBQUcsU0FBUyxHQUFHLGVBQWU7Ozs7eUZBVjdDLElBQUk7Ozs2RkFLK0M7NkZBRVk7dUZBRWEsTUFBTTt1RkFDeEIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7eUZBTDVDLEtBQUs7Ozs7eUZBRUksUUFBUTs7O2lGQUV4QyxXQUFXLEdBQUcsU0FBUyxHQUFHLFNBQVM7Ozs7aUZBQ25DLFdBQVcsR0FBRyxTQUFTLEdBQUcsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQS9DakM7O0lBRWhDLElBQUksS0FBSyxHQUFHLEVBQUU7SUFDZCxJQUFJLFFBQVEsR0FBRyxFQUFFO0lBQ2pCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7SUFFdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLFdBQVcsR0FBRyxRQUFRLEVBQUUsR0FBRyxVQUFVLEVBQUUsRUFBRTs7SUFFaEUsTUFBTSxhQUFhLEdBQUcsTUFBTSw4QkFBRSxXQUFXLEdBQUcsQ0FBQyxZQUFXLEVBQUU7O0lBRTFELE1BQU0sUUFBUSxHQUFHLFlBQVk7UUFDekIsSUFBSTtZQUNBLE1BQU0scUVBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO1NBQy9CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSx5RUFBSyxDQUFDO2dCQUNSLE9BQU8sRUFBRSwrQ0FBK0M7Z0JBQ3hELFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztZQUNILE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUM5QjtRQUNELDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsb0RBQUksRUFBRSxDQUFDLENBQUM7S0FDNUI7O0lBRUQsTUFBTSxVQUFVLEdBQUcsWUFBWTtRQUMzQixJQUFJO1lBQ0EsTUFBTSx3RUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDL0IseUVBQUssQ0FBQyx3Q0FBd0MsQ0FBQztTQUNsRCxDQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1oseUVBQUssQ0FBQztvQkFDRSxPQUFPLEVBQUUsc0RBQXNEO29CQUMvRCxZQUFZLEVBQUUsSUFBSTthQUN6QixDQUFDLENBQUM7U0FDTjtLQUNKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9zaGFyZWQvY29uZmlnLnRzXCI6IFwiLi9zaGFyZWQvY29uZmlnLnRzXCIsXG5cdFwiLi9zaGFyZWQvbGlzdFNlcnZpY2UudHNcIjogXCIuL3NoYXJlZC9saXN0U2VydmljZS50c1wiLFxuXHRcIi4vc2hhcmVkL2xvZ2luU2VydmljZS50c1wiOiBcIi4vc2hhcmVkL2xvZ2luU2VydmljZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkFjdGlvbkJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCJdKTtcblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5cbmltcG9ydCB7IHN2ZWx0ZU5hdGl2ZSwgRG9tVHJhY2VDYXRlZ29yeSB9IGZyb20gXCJzdmVsdGUtbmF0aXZlXCI7XG5pbXBvcnQgQXBwIGZyb20gIFwiLi92aWV3cy9Mb2dpbi5zdmVsdGVcIjtcbmltcG9ydCBMaXN0VmlldyBmcm9tIFwic3ZlbHRlLW5hdGl2ZS1uYXRpdmVzY3JpcHQtdWkvbGlzdHZpZXdcIlxuXG5MaXN0Vmlldy5yZWdpc3RlcigpO1xuXG4vL2ltcG9ydCAqIGFzIHRyYWNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RyYWNlXCJcbi8vdHJhY2UuZW5hYmxlKCk7XG4vL3RyYWNlLmFkZENhdGVnb3JpZXMoRG9tVHJhY2VDYXRlZ29yeSk7XG5cblxuc3ZlbHRlTmF0aXZlKEFwcCwge30pO1xuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYXBpVXJsOiBcImh0dHBzOi8vYmFhcy5raW52ZXkuY29tL1wiLFxuICAgIGFwcEtleTogXCJraWRfSHlIb1RfUkVmXCIsXG4gICAgYXBwVXNlckhlYWRlcjogXCJCYXNpYyBhMmxrWDBoNVNHOVVYMUpGWmpvMU1Ua3hNREpsWldGaE16UTBNek15T0RGak4yTXlPRE0zTUdRNU9USXpNUVwiLFxuICAgIHRva2VuOiAgbnVsbCBhcyBzdHJpbmdcbn07IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIlxuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9mZXRjaFwiO1xuaW1wb3J0IHsgZ2V0VG9rZW5Gcm9tQ2FjaGVkQ3JlZGVudGlhbHMgfSBmcm9tICcuL2xvZ2luU2VydmljZSdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcInN2ZWx0ZS1uYXRpdmVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vdmlld3MvTG9naW4uc3ZlbHRlXCI7XG5cbnZhciBiYXNlVXJsID0gY29uZmlnLmFwaVVybCArIFwiYXBwZGF0YS9cIiArIGNvbmZpZy5hcHBLZXkgKyBcIi9Hcm9jZXJpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGRhdGEgID0gYXdhaXQganNvbk9yRGllKFwiXCIpO1xuICAgIFxuICAgIHJldHVybiBkYXRhLm1hcChncm9jZXJ5ID0+IChcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogZ3JvY2VyeS5OYW1lLFxuICAgICAgICAgICAgaWQ6IGdyb2NlcnkuX2lkXG4gICAgICAgIH0pXG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRJdGVtID0gYXN5bmMgKGdyb2NlcnkpID0+IHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGpzb25PckRpZShcIlwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIE5hbWU6IGdyb2NlcnlcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICByZXR1cm4geyBuYW1lOiBncm9jZXJ5LCBpZDogZGF0YS5faWQgfTtcbn1cblxuXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IGFzeW5jIGZ1bmN0aW9uIChncm9jZXJ5SXRlbSkge1xuICAgIGF3YWl0IHJlc3BvbnNlT3JEaWUoXCIvXCIgKyBncm9jZXJ5SXRlbS5pZCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIktpbnZleSBcIiArIGNvbmZpZy50b2tlblxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzcG9uc2VPckRpZShyZWxhdGl2ZV91cmwsIGZldGNoT3B0aW9uczpSZWNvcmQ8c3RyaW5nLGFueT4gPSB7fSkge1xuICAgIGxldCB1cmwgPSBiYXNlVXJsICsgcmVsYXRpdmVfdXJsO1xuICAgIGxldCBvcHRpb25zID0geyAuLi5mZXRjaE9wdGlvbnMsIGhlYWRlcnM6IHsgLi4uZ2V0Q29tbW9uSGVhZGVycygpLCAuLi5mZXRjaE9wdGlvbnMuaGVhZGVyc319XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICAgIC8vcmVmcmVzaCB0b2tlbiBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZ2V0VG9rZW5Gcm9tQ2FjaGVkQ3JlZGVudGlhbHMoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBuYXZpZ2F0ZSh7IHBhZ2U6IExvZ2luLCBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBqc29uT3JEaWUocmVsYXRpdmVfdXJsLCBmZXRjaE9wdGlvbnM6UmVjb3JkPHN0cmluZyxhbnk+ID0ge30pIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZU9yRGllKHJlbGF0aXZlX3VybCwgZmV0Y2hPcHRpb25zKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG4iLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiXG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCI7XG5cbmxldCBjYWNoZWRfY3JlZGVudGlhbHMgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5Gcm9tQ2FjaGVkQ3JlZGVudGlhbHMoKSB7XG4gIGNvbnNvbGUubG9nKFwiYWNxdWlyaW5nIHRva2VuXCIpXG4gIGNvbmZpZy50b2tlbiA9IG51bGw7XG4gIGlmICghY2FjaGVkX2NyZWRlbnRpYWxzKSB0aHJvdyBFcnJvcihcIm5vIGNhY2hlZCBjcmVkZW50aWFsc1wiKTtcblxuICByZXR1cm4gZmV0Y2goY29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIGNvbmZpZy5hcHBLZXkgKyBcIi9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogY2FjaGVkX2NyZWRlbnRpYWxzLFxuICAgICAgaGVhZGVyczogZ2V0Q29tbW9uSGVhZGVycygpXG4gIH0pXG4gIC50aGVuKGhhbmRsZUVycm9ycylcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcImdvdCB0b2tlblwiKVxuICAgIGNvbmZpZy50b2tlbiA9IGRhdGEuX2ttZC5hdXRodG9rZW47XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICBjYWNoZWRfY3JlZGVudGlhbHMgPSBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfSk7XG4gIHJldHVybiBnZXRUb2tlbkZyb21DYWNoZWRDcmVkZW50aWFscygpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKSk7XG4gIH1cblxuICByZXR1cm4gZmV0Y2goY29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIGNvbmZpZy5hcHBLZXksIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKVxuICB9KS50aGVuKGhhbmRsZUVycm9ycyk7XG59O1xuXG5mdW5jdGlvbiBnZXRDb21tb25IZWFkZXJzKCkge1xuICByZXR1cm4ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQXV0aG9yaXphdGlvblwiOiBjb25maWcuYXBwVXNlckhlYWRlclxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG4iLCI8c3ZlbHRlOm9wdGlvbnMgbmFtZXNwYWNlPVwieG1sbnNcIi8+PHNjcmlwdD5cbiAgICBpbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCJzdmVsdGUtbmF0aXZlL2NvbXBvbmVudHNcIlxuICAgIGltcG9ydCB7IExpc3RWaWV3Vmlld1R5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCJcbiAgICBpbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIlxuICAgIGltcG9ydCB7IGZldGNoSXRlbXMsIGFkZEl0ZW0sIGRlbGV0ZUl0ZW0gfSBmcm9tIFwiLi4vc2hhcmVkL2xpc3RTZXJ2aWNlXCJcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiXG4gICAgaW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS1uYXRpdmUvdHJhbnNpdGlvbnMnXG5cbiAgICBsZXQgaXRlbVRlbXBsYXRlO1xuICAgIGxldCBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcbiAgICBsZXQgZ3JvY2VyeSA9IFwiXCI7XG4gICAgbGV0IGdyb2NlcnlJbnB1dDtcbiAgICBsZXQgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gICAgb25Nb3VudChhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vbG9hZFxuICAgICAgICBpc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gYXdhaXQgZmV0Y2hJdGVtcygpO1xuICAgICAgICAgICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBsaXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdyb2NlcnlMaXN0ID0gaXRlbXNcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgeW91ciBpdGVtc1wiKTtcbiAgICAgICAgICAgIGxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBncm9jZXJ5TGlzdCA9IFtdO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBkb0FkZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBncm9jZXJ5SW5wdXQubmF0aXZlVmlldy5kaXNtaXNzU29mdElucHV0KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gYWRkSXRlbShncm9jZXJ5KVxuICAgICAgICAgICAgZ3JvY2VyeUxpc3QgPSBbLi4uZ3JvY2VyeUxpc3QsIGl0ZW1dXG4gICAgICAgICAgICBncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgb25Td2lwZUNlbGxTdGFydGVkID0gKGFyZ3MpID0+IHtcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICB2YXIgc3dpcGVWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIHZhciByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2RlbGV0ZS12aWV3Jyk7XG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IDA7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuICAgIH1cblxuICAgIGxldCBkb0RlbGV0ZSA9IChhcmdzKSA9PiB7XG4gICAgICAgIHZhciBpdGVtID0gYXJncy52aWV3LmJpbmRpbmdDb250ZXh0O1xuICAgICAgICBpZiAoZ3JvY2VyeUxpc3QuaW5kZXhPZihpdGVtKSA8IDApIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlbGV0ZUl0ZW0oaXRlbSlcbiAgICAgICAgICAgIGdyb2NlcnlMaXN0ID0gZ3JvY2VyeUxpc3QuZmlsdGVyKGkgPT4gaSAhPSBpdGVtKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlbW92aW5nIHRoZSBpdGVtIGZyb20geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbjxwYWdlPlxuICAgIDxhY3Rpb25CYXIgdGl0bGU9XCJHcm9jZXJpZXNcIj48L2FjdGlvbkJhcj5cbiAgICA8Z3JpZExheW91dCByb3dzPVwiYXV0bywgKlwiPlxuICAgICAgICA8Z3JpZExheW91dCByb3c9XCIwXCIgY29sdW1ucz1cIiosIGF1dG9cIiBjbGFzcz1cImFkZC1iYXJcIj5cbiAgICAgICAgICAgIDx0ZXh0RmllbGQgdGV4dD1cIntncm9jZXJ5fVwiIG9uOnRleHRDaGFuZ2U9XCJ7KGUpID0+IGdyb2NlcnkgPSBlLnZhbHVlfVwiIGJpbmQ6dGhpcz1cIntncm9jZXJ5SW5wdXR9XCJcbiAgICAgICAgICAgICAgICBoaW50PVwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIiBjb2w9XCIwXCIgLz5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCJ+L2ltYWdlcy9hZGQucG5nXCIgb246dGFwPVwie2RvQWRkfVwiIGNvbD1cIjFcIiAvPlxuICAgICAgICA8L2dyaWRMYXlvdXQ+XG4gICAgICAgIHsjaWYgbGlzdExvYWRlZH1cbiAgICAgICAgPHJhZExpc3RWaWV3IGl0ZW1zPVwieyBncm9jZXJ5TGlzdCB9XCIgcm93PVwiMVwiIG9uOml0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZD1cIntvblN3aXBlQ2VsbFN0YXJ0ZWR9XCJcbiAgICAgICAgICAgIHN3aXBlQWN0aW9ucz1cInRydWVcIiB0cmFuc2l0aW9uOmZhZGU9XCJ7e2R1cmF0aW9uOiAxMDAwIH19XCIgPlxuICAgICAgICAgICAgPFRlbXBsYXRlIHR5cGU9XCJ7TGlzdFZpZXdWaWV3VHlwZS5JdGVtVmlld31cIiBsZXQ6aXRlbT5cbiAgICAgICAgICAgICAgICA8Z3JpZExheW91dCBjbGFzcz1cImdyb2NlcnktbGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInAtMTVcIiB0ZXh0PVwieyBpdGVtLm5hbWUgfVwiIC8+XG4gICAgICAgICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9UZW1wbGF0ZT5cbiAgICAgICAgICAgIDxUZW1wbGF0ZSB0eXBlPVwie0xpc3RWaWV3Vmlld1R5cGUuSXRlbVN3aXBlVmlld31cIiBsZXQ6aXRlbT5cbiAgICAgICAgICAgICAgICA8Z3JpZExheW91dCBjb2x1bW5zPVwiKixhdXRvXCIgYmFja2dyb3VuZENvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdGFja0xheW91dCBpZD1cImRlbGV0ZS12aWV3XCIgY29sPVwiMVwiIG9uOnRhcD1cIntkb0RlbGV0ZX1cIiBjbGFzcz1cImRlbGV0ZS12aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwifi9pbWFnZXMvZGVsZXRlLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9UZW1wbGF0ZT5cbiAgICAgICAgPC9yYWRMaXN0Vmlldz5cbiAgICAgICAgey9pZn1cbiAgICAgICAgPGFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9XCJ7IGlzTG9hZGluZyB9XCIgcm93PVwiMVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgPC9ncmlkTGF5b3V0PlxuXG48L3BhZ2U+XG5cbjxzdHlsZT5cbiAgICAuYWRkLWJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQjFEMDA7XG4gICAgICAgIHBhZGRpbmc6IDU7XG4gICAgfVxuXG4gICAgLmFkZC1iYXIgSW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDE1O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTA7XG4gICAgfVxuXG4gICAgLmFkZC1iYXIgVGV4dEZpZWxkIHtcbiAgICAgICAgcGFkZGluZzogMTA7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBwbGFjZWhvbGRlci1jb2xvcjojZWZlZmVmO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5kZWxldGUtdmlldyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQjFEMDA7XG4gICAgICAgIHBhZGRpbmc6IDIwO1xuICAgIH1cblxuICAgIC5kZWxldGUtdmlldyBJbWFnZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBMYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgXG48L3N0eWxlPiIsIjxzdmVsdGU6b3B0aW9ucyBuYW1lc3BhY2U9XCJ4bWxuc1wiLz48c2NyaXB0PlxuICAgIGltcG9ydCB7IGxvZ2luLCByZWdpc3RlciB9IGZyb20gXCIuLi9zaGFyZWQvbG9naW5TZXJ2aWNlLnRzXCJcbiAgICBpbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIlxuICAgIGltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcInN2ZWx0ZS1uYXRpdmVcIlxuICAgIGltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3Quc3ZlbHRlXCJcblxuICAgIGxldCBlbWFpbCA9IFwiXCJcbiAgICBsZXQgcGFzc3dvcmQgPSBcIlwiXG4gICAgbGV0IGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHsgaXNMb2dnaW5nSW4gPyBkb1NpZ25JbigpIDogZG9SZWdpc3RlcigpIH1cblxuICAgIGNvbnN0IHRvZ2dsZURpc3BsYXkgPSAoKSA9PiB7IGlzTG9nZ2luZ0luID0gIWlzTG9nZ2luZ0luIH1cblxuICAgIGNvbnN0IGRvU2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIGF3YWl0IGFsZXJ0KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwibG9naW4gZmFpbGVkXCIpXG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdGUoeyBwYWdlOiBMaXN0IH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRvUmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCByZWdpc3RlcihlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiLFxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHBhZ2UgYWN0aW9uQmFySGlkZGVuPVwie3RydWV9XCI+XG4gICAgPGZsZXhib3hMYXlvdXQ+XG4gICAgICAgIDxzdGFja0xheW91dD5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCJ+L2ltYWdlcy9sb2dvLnBuZ1wiIC8+XG5cbiAgICAgICAgICAgIDx0ZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiB0ZXh0PVwie2VtYWlsfVwiIG9uOnRleHRDaGFuZ2U9XCJ7KGUpID0+IGVtYWlsID0gZS52YWx1ZX1cIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgY2xhc3M9XCJpbnB1dCBpbnB1dC1ib3JkZXJcIiAvPlxuICAgICAgICAgICAgPHRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgdGV4dD1cIntwYXNzd29yZH1cIiBvbjp0ZXh0Q2hhbmdlPVwieyhlKSA9PiBwYXNzd29yZCA9IGUudmFsdWV9XCIgY2xhc3M9XCJpbnB1dCBpbnB1dC1ib3JkZXJcIiAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIHRleHQ9XCJ7IGlzTG9nZ2luZ0luID8gJ1NpZ24gaW4nIDogJ1NpZ24gdXAnIH1cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIG9uOnRhcD1cIntzdWJtaXR9XCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdGV4dD1cInsgaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnQmFjayB0byBsb2dpbicgfVwiIG9uOnRhcD1cInt0b2dnbGVEaXNwbGF5fVwiIC8+XG5cbiAgICAgICAgPC9zdGFja0xheW91dD5cbiAgICA8L2ZsZXhib3hMYXlvdXQ+XG48L3BhZ2U+XG5cbjxzdHlsZT5cbiAgICBGbGV4Ym94TGF5b3V0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIpO1xuICAgIH1cblxuICAgIFN0YWNrTGF5b3V0IHtcbiAgICAgICAgd2lkdGg6IDMwMDtcbiAgICAgICAgcGFkZGluZzogMTAgMTY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgfVxuXG4gICAgSW1hZ2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDtcbiAgICAgICAgaGVpZ2h0OiA3MDtcbiAgICB9XG5cbiAgICBCdXR0b24sXG4gICAgVGV4dEZpZWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTA7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIFRleHRGaWVsZCB7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQzRBRkI0O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLmRhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAxMjE3O1xuICAgIH1cblxuICAgIC5kYXJrIFRleHRGaWVsZCB7XG4gICAgICAgIGNvbG9yOiAjQzRBRkI0O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9