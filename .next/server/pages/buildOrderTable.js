"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BuildOrderTable),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@mui/material/Table"
const Table_namespaceObject = require("@mui/material/Table");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableBody"
const TableBody_namespaceObject = require("@mui/material/TableBody");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableCell"
const TableCell_namespaceObject = require("@mui/material/TableCell");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableContainer"
const TableContainer_namespaceObject = require("@mui/material/TableContainer");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableHead"
const TableHead_namespaceObject = require("@mui/material/TableHead");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/TableRow"
const TableRow_namespaceObject = require("@mui/material/TableRow");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: external "firebase-admin"
const external_firebase_admin_namespaceObject = require("firebase-admin");
;// CONCATENATED MODULE: ./firebase/nodeApp.js

if (!external_firebase_admin_namespaceObject.apps.length) {
    external_firebase_admin_namespaceObject.initializeApp({
        credential: external_firebase_admin_namespaceObject.credential.cert({
            "project_id": "aoe4-build-order",
            "client_email": "firebase-adminsdk-s054m@aoe4-build-order.iam.gserviceaccount.com",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvdIHaebfdmk64\nzSSPQr56+uDBedanL0dzclhGUBn/OGd0T5wzXAJ+4x2SurrJK+ss5fnkDXokHVmL\n+w0YvETHZZK3AaF1p3tOWKRTfxFVtWbvhulc04ZC+sHkBdK1nlGux14Vtt5ga3yr\nFD89RYtx/6lmCD38piCj+uLP2w/mW8Z7xywBFzQm7p1YKWjs1j7DWo5HcXZ98tf8\njwBEyi9pAJzF29/5L2EV6RUthPgE5ygJZiIj5FTAIN4x6gIXOy50O1kMDu0nzPal\nU/eCYCP9f045Uj+JjJXqmq7EWTPXrpKaoZLCpg/86amxDejbKYX0/VgoBky7IvkN\nozp7ReqlAgMBAAECggEAIHiSpp0DpOivnH5kv3ml+GsRKOVUTz0N/2TgRuUApq3o\n4YrxOMUUtihwmuzhcCUnYTgPkv/WhLQE1EXqQtNm9DMNX76Ww8gy5wk7IjPAQMkx\na29fpV0FOkSfmQRl3lRWQB8n/6NIDPafjCbTXFLQT5D16Arq8+TH4ikmjDq5utMe\nxAbEBt2z6HdSewFqk4OX3BPWQz3HN1HxRZBNY+3QKlWGc90eCh05zkLNmDI9gv1G\nR3FMaMm+ToLcvZ7mr9dB1MVCpxWCK7h5/zeCjmC2Dgr51e8BqomiRjhSf5etA5Fu\nRxueiNxbIqJouBfbmAHll50yhoT/ffsKzT4E7da14QKBgQDvitpOxFxbgSq24dq4\n8DEAfqY8GtzHcN76VbrwIum27/K7WatV7fMiiG+mcrN9+ZhMbpgY/eZZS0Nhlk3A\nfOeWeZaEct/dhY6KkR/t+p23QEErS9IB1Wtkf080eBdKacVrmyduToImw9nZozlF\nNSbFRDNwt2GmST9CsmToih/AoQKBgQC7gnePxwnSie5TgP6yKZFhCdE8Sjl7XRG+\nHiz1+zceGx/mV8XC+DJUweFjDsOIAGPGPBSwWD00tXQ0o5ipXqMx0juakCLZw6G9\nw4L0kXqUEQf1KM3VRBEieoFtdMYR/dmpw8ilevyKoJsa97FzPMhaaAxcg+hwn2/6\nNYIUgLx3hQKBgGB0I8V1sc6yqxVqyhyPstuFI8Ct/Fpea5qXbKeHF16vLakcyS3X\nm4A7OeHm67l9CEM2gQ4HJnqsIJyp3fL1GHdxzBbW/qd/QM8w8o9ry5ffSp55cD2G\nxzB3RthUxuQSxQi4N99lw2iCkjTdUZE5frwN4zyuyqYfdlaP6Kvt+i0hAoGAKpZ+\nW1yEoZoMVFD3CDYiu9yD9mKRXbCMyBaIdbICGcdlXmbPFvJSVCfY7iu7Q1d7Udnx\nhP/1ntQbuZzynn1NKZKrUPatw7IIOVZ/lta39YtMuGT1IxwbnC4g2WBtYEa8ui8q\nklM1qrLBp8VcO2UxyD7bl+Op1nKP909R5SA8LhUCgYEAunAmddrZ5CbEIbTaObuc\nkNtf/smZtPeTzA2O1bO9/b3HNX2qBud/0TK76eIZTVWqqg7An9TCPti1f5LwDsRy\nQcWBEtWrEGqp2ORaD+F0flW1htQP9GV0g8ZglIzuASR9qCrBJB/Tghd3fx1pO26n\n1opfKpjhfi9wBF3gBa+UKSs=\n-----END PRIVATE KEY-----\n"
        })
    });
}
/* harmony default export */ const nodeApp = (external_firebase_admin_namespaceObject);

;// CONCATENATED MODULE: ./pages/buildOrderTable/index.js











const getAllBuildOrderData = async ()=>{
    const db = nodeApp.firestore();
    const buildOrderCollection = db.collection("aoe4_build_order");
    let rows = [];
    let allBuildOrders = await buildOrderCollection.get();
    for (const buildOrder of allBuildOrders.docs){
        rows.push(buildOrder.data());
    }
    return rows;
};
function BuildOrderTable({ data  }) {
    const { rows  } = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
        maxWidth: "lg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: " All Build Orders"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((TableContainer_default()), {
                component: (Paper_default()),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
                    sx: {
                        minWidth: 650
                    },
                    "aria-label": "simple table",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        align: "right",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        sm: true,
                                        align: "right",
                                        children: "Civ"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                            children: rows.map((row)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                    sx: {
                                        "&:last-child td, &:last-child th": {
                                            border: 0
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            component: "th",
                                            scope: "row",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/editor.html?c=${row.civ}&s=${row.url}`,
                                                children: row.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            align: "right",
                                            children: row.description
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                            sm: true,
                                            align: "right",
                                            children: row.civ
                                        })
                                    ]
                                }, row.name)
                            )
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps() {
    const rows = await getAllBuildOrderData();
    if (!rows) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data: {
                rows
            }
        }
    };
}


/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 925:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(14)));
module.exports = __webpack_exports__;

})();