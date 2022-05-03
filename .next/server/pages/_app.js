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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/userContext.js":
/*!********************************!*\
  !*** ./context/userContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"default\": () => (/* binding */ UserContextComp),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction UserContextComp({ children  }) {\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loadingUser , 1: setLoadingUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true) // Helpful, to update the UI accordingly.\n    ;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Listen authenticated user\n        const app = (0,_firebase_clientApp__WEBPACK_IMPORTED_MODULE_2__.createFirebaseApp)();\n        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\n        const unsubscriber = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, async (user)=>{\n            try {\n                if (user) {\n                    // User is signed in.\n                    const { uid , displayName , email , photoURL  } = user;\n                    // You could also look for the user doc in your Firestore (if you have one):\n                    // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()\n                    setUser({\n                        uid,\n                        displayName,\n                        email,\n                        photoURL\n                    });\n                } else setUser(null);\n            } catch (error) {\n            // Most probably a connection error. Handle appropriately.\n            } finally{\n                setLoadingUser(false);\n            }\n        });\n        // Unsubscribe auth listener on unmount\n        return ()=>unsubscriber()\n        ;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user: user1,\n            setUser,\n            loadingUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\context\\\\userContext.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n};\n// Custom hook that shorthands the context!\nconst useUser = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext)\n;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3VzZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNFO0FBQ2I7QUFDRTtBQUVwRCxNQUFNTyxXQUFXLGlCQUFHTCxvREFBYSxFQUFFO0FBRTNCLFNBQVNNLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUNwRCxNQUFNLEVBUFIsR0FPU0MsS0FBSSxHQVBiLEdBT2VDLE9BQU8sTUFBSVgsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsTUFBTSxFQVJSLEdBUVNZLFdBQVcsR0FScEIsR0FRc0JDLGNBQWMsTUFBSWIsK0NBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyx5Q0FBeUM7SUFBMUM7SUFFcERDLGdEQUFTLENBQUMsSUFBTTtRQUNkLDRCQUE0QjtRQUM1QixNQUFNYSxHQUFHLEdBQUdWLHNFQUFpQixFQUFFO1FBQy9CLE1BQU1XLElBQUksR0FBR1Ysc0RBQU8sQ0FBQ1MsR0FBRyxDQUFDO1FBQ3pCLE1BQU1FLFlBQVksR0FBR1YsaUVBQWtCLENBQUNTLElBQUksRUFBRSxPQUFPTCxJQUFJLEdBQUs7WUFDNUQsSUFBSTtnQkFDRixJQUFJQSxJQUFJLEVBQUU7b0JBQ1IscUJBQXFCO29CQUNyQixNQUFNLEVBQUVPLEdBQUcsR0FBRUMsV0FBVyxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBRSxHQUFHVixJQUFJO29CQUNsRCw0RUFBNEU7b0JBQzVFLHVFQUF1RTtvQkFDdkVDLE9BQU8sQ0FBQzt3QkFBRU0sR0FBRzt3QkFBRUMsV0FBVzt3QkFBRUMsS0FBSzt3QkFBRUMsUUFBUTtxQkFBRSxDQUFDO2lCQUMvQyxNQUFNVCxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3JCLENBQUMsT0FBT1UsS0FBSyxFQUFFO1lBQ2QsMERBQTBEO2FBQzNELFFBQVM7Z0JBQ1JSLGNBQWMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRixDQUFDO1FBRUYsdUNBQXVDO1FBQ3ZDLE9BQU8sSUFBTUcsWUFBWSxFQUFFO1FBQUE7S0FDNUIsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ1QsV0FBVyxDQUFDZSxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFYixJQUFJLEVBQUpBLEtBQUk7WUFBRUMsT0FBTztZQUFFQyxXQUFXO1NBQUU7a0JBQ3hESCxRQUFROzs7OztZQUNZLENBQ3hCO0NBQ0Y7QUFFRCwyQ0FBMkM7QUFDcEMsTUFBTWUsT0FBTyxHQUFHLElBQU1yQixpREFBVSxDQUFDSSxXQUFXLENBQUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnRleHQvdXNlckNvbnRleHQuanM/MjdmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVGaXJlYmFzZUFwcCB9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCB7IGdldEF1dGgsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQ29udGV4dENvbXAoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nVXNlciwgc2V0TG9hZGluZ1VzZXJdID0gdXNlU3RhdGUodHJ1ZSkgLy8gSGVscGZ1bCwgdG8gdXBkYXRlIHRoZSBVSSBhY2NvcmRpbmdseS5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIExpc3RlbiBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICBjb25zdCBhcHAgPSBjcmVhdGVGaXJlYmFzZUFwcCgpXG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxuICAgIGNvbnN0IHVuc3Vic2NyaWJlciA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBhc3luYyAodXNlcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAvLyBVc2VyIGlzIHNpZ25lZCBpbi5cbiAgICAgICAgICBjb25zdCB7IHVpZCwgZGlzcGxheU5hbWUsIGVtYWlsLCBwaG90b1VSTCB9ID0gdXNlclxuICAgICAgICAgIC8vIFlvdSBjb3VsZCBhbHNvIGxvb2sgZm9yIHRoZSB1c2VyIGRvYyBpbiB5b3VyIEZpcmVzdG9yZSAoaWYgeW91IGhhdmUgb25lKTpcbiAgICAgICAgICAvLyBjb25zdCB1c2VyRG9jID0gYXdhaXQgZmlyZWJhc2UuZmlyZXN0b3JlKCkuZG9jKGB1c2Vycy8ke3VpZH1gKS5nZXQoKVxuICAgICAgICAgIHNldFVzZXIoeyB1aWQsIGRpc3BsYXlOYW1lLCBlbWFpbCwgcGhvdG9VUkwgfSlcbiAgICAgICAgfSBlbHNlIHNldFVzZXIobnVsbClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE1vc3QgcHJvYmFibHkgYSBjb25uZWN0aW9uIGVycm9yLiBIYW5kbGUgYXBwcm9wcmlhdGVseS5cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmdVc2VyKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBVbnN1YnNjcmliZSBhdXRoIGxpc3RlbmVyIG9uIHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmVyKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciwgbG9hZGluZ1VzZXIgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG4vLyBDdXN0b20gaG9vayB0aGF0IHNob3J0aGFuZHMgdGhlIGNvbnRleHQhXG5leHBvcnQgY29uc3QgdXNlVXNlciA9ICgpID0+IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImNyZWF0ZUZpcmViYXNlQXBwIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIlVzZXJDb250ZXh0IiwiVXNlckNvbnRleHRDb21wIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmdVc2VyIiwic2V0TG9hZGluZ1VzZXIiLCJhcHAiLCJhdXRoIiwidW5zdWJzY3JpYmVyIiwidWlkIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInBob3RvVVJMIiwiZXJyb3IiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/userContext.js\n");

/***/ }),

/***/ "./firebase/clientApp.js":
/*!*******************************!*\
  !*** ./firebase/clientApp.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFirebaseApp\": () => (/* binding */ createFirebaseApp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"firebase/analytics\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_analytics__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst createFirebaseApp = ()=>{\n    const clientCredentials = {\n        apiKey: \"AIzaSyBXNvJDHRVB7mcBbG5kvtDDTRqQgUBBnbI\",\n        authDomain: \"aoe4-build-order.firebaseapp.com\",\n        projectId: \"aoe4-build-order\",\n        storageBucket: \"aoe4-build-order.appspot.com\",\n        messagingSenderId: \"463565673438\",\n        appId: \"1:463565673438:web:27fc685b2e8edfd925834f\"\n    };\n    if ((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length <= 0) {\n        const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);\n        // Check that `window` is in scope for the analytics module!\n        if (false) {}\n        return app;\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnRBcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBQ0o7QUFDMUMsTUFBTUcsaUJBQWlCLEdBQUcsSUFBTTtJQUNyQyxNQUFNQyxpQkFBaUIsR0FBRztRQUN4QkMsTUFBTSxFQUFFLHlDQUF5QztRQUNqREMsVUFBVSxFQUFFLGtDQUFrQztRQUM5Q0MsU0FBUyxFQUFFLGtCQUFrQjtRQUM3QkMsYUFBYSxFQUFFLDhCQUE4QjtRQUM3Q0MsaUJBQWlCLEVBQUUsY0FBYztRQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztLQUNuRDtJQUVELElBQUlULHFEQUFPLEVBQUUsQ0FBQ1UsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN6QixNQUFNQyxHQUFHLEdBQUdaLDJEQUFhLENBQUNJLGlCQUFpQixDQUFDO1FBQzVDLDREQUE0RDtRQUM1RCxJQUFJLEtBQTZCLEVBQUUsRUFLbEM7UUFDRCxPQUFPUSxHQUFHO0tBQ1g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlL2NsaWVudEFwcC5qcz8xNGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tICdmaXJlYmFzZS9hbmFseXRpY3MnXG5leHBvcnQgY29uc3QgY3JlYXRlRmlyZWJhc2VBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGNsaWVudENyZWRlbnRpYWxzID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCWE52SkRIUlZCN21jQmJHNWt2dEREVFJxUWdVQkJuYklcIixcbiAgICBhdXRoRG9tYWluOiBcImFvZTQtYnVpbGQtb3JkZXIuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgcHJvamVjdElkOiBcImFvZTQtYnVpbGQtb3JkZXJcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcImFvZTQtYnVpbGQtb3JkZXIuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjM1NjU2NzM0MzhcIixcbiAgICBhcHBJZDogXCIxOjQ2MzU2NTY3MzQzODp3ZWI6MjdmYzY4NWIyZThlZGZkOTI1ODM0ZlwiXG4gIH1cblxuICBpZiAoZ2V0QXBwcygpLmxlbmd0aCA8PSAwKSB7XG4gICAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChjbGllbnRDcmVkZW50aWFscylcbiAgICAvLyBDaGVjayB0aGF0IGB3aW5kb3dgIGlzIGluIHNjb3BlIGZvciB0aGUgYW5hbHl0aWNzIG1vZHVsZSFcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIEVuYWJsZSBhbmFseXRpY3MuIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9nZXQtc3RhcnRlZFxuICAgICAgaWYgKCdtZWFzdXJlbWVudElkJyBpbiBjbGllbnRDcmVkZW50aWFscykge1xuICAgICAgICBnZXRBbmFseXRpY3MoKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXBwXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwcyIsImdldEFuYWx5dGljcyIsImNyZWF0ZUZpcmViYXNlQXBwIiwiY2xpZW50Q3JlZGVudGlhbHMiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJsZW5ndGgiLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/clientApp.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/userContext */ \"./context/userContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_userContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_userContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n// Custom App to wrap it with context provider\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_userContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUVqRCw4Q0FBOEM7QUFDL0IsU0FBU0MsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILDREQUFZO2tCQUNYLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FDaEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlclByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvdXNlckNvbnRleHQnXG5cbi8vIEN1c3RvbSBBcHAgdG8gd3JhcCBpdCB3aXRoIGNvbnRleHQgcHJvdmlkZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VXNlclByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVXNlclByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/analytics":
/*!*************************************!*\
  !*** external "firebase/analytics" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/analytics");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();