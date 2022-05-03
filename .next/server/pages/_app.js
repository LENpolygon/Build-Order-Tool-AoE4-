"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 727:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ UserContextComp)
/* harmony export */ });
/* unused harmony exports UserContext, useUser */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function UserContextComp({ children  }) {
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loadingUser , 1: setLoadingUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true) // Helpful, to update the UI accordingly.
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Listen authenticated user
        const app = (0,_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__/* .createFirebaseApp */ .L)();
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);
        const unsubscriber = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, async (user)=>{
            try {
                if (user) {
                    // User is signed in.
                    const { uid , displayName , email , photoURL  } = user;
                    // You could also look for the user doc in your Firestore (if you have one):
                    // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
                    setUser({
                        uid,
                        displayName,
                        email,
                        photoURL
                    });
                } else setUser(null);
            } catch (error) {
            // Most probably a connection error. Handle appropriately.
            } finally{
                setLoadingUser(false);
            }
        });
        // Unsubscribe auth listener on unmount
        return ()=>unsubscriber()
        ;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user: user1,
            setUser,
            loadingUser
        },
        children: children
    });
};
// Custom hook that shorthands the context!
const useUser = ()=>useContext(UserContext)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ createFirebaseApp)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(500);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const createFirebaseApp = ()=>{
    const clientCredentials = {
        apiKey: "AIzaSyBXNvJDHRVB7mcBbG5kvtDDTRqQgUBBnbI",
        authDomain: "aoe4-build-order.firebaseapp.com",
        projectId: "aoe4-build-order",
        storageBucket: "aoe4-build-order.appspot.com",
        messagingSenderId: "463565673438",
        appId: "1:463565673438:web:27fc685b2e8edfd925834f"
    };
    if ((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length <= 0) {
        const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);
        // Check that `window` is in scope for the analytics module!
        if (false) {}
        return app;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(727);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_userContext__WEBPACK_IMPORTED_MODULE_1__]);
_context_userContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Custom App to wrap it with context provider
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_userContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 500:
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ 745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(484));
module.exports = __webpack_exports__;

})();