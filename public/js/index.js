import escapeHtml from './global.js';
import civilizations from '../json/civilizations.js';

//////////////////////////////////////////////////
// DEFINE menu structure
//////////////////////////////////////////////////
import headerData from '../json/headerData.js';
for (var header in headerData) {
    for (var genre in headerData[header]) {
        headerData[header][genre] = [[], [], [], []]; // add ages
    }
}

//////////////////////////////////////////////////
// READ URLSearchParams data
//////////////////////////////////////////////////
var selectedciv = null;
var usp = new URLSearchParams(window.location.search);
if (isNaN(usp.get("c"))) {
    for (let i = 0; i < civilizations.length; i++) {
        if (usp.get("c") == civilizations[i].abbr) {
            selectedciv = civilizations[i];
            break;
        }
    }
}
if (isNaN(usp.get("t")) || isNaN(usp.get("s")) || isNaN(usp.get("b"))) {
    window.location.replace(window.location.href.replace("index", "build")); // refer old index builds to new build page
}

//////////////////////////////////////////////////
// INITIALIZE
//////////////////////////////////////////////////
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"; import firebaseConfig from '../json/fs.js'; const app = initializeApp(firebaseConfig);
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"; const db = getFirestore();
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"; const auth = getAuth();
var str = "";
const loadLimit = 20;
const titleLength = 48;
const nameLength = 24;

//////////////////////////////////////////////////
// WRITE civilizations menu
//////////////////////////////////////////////////
str += "<li class=\"mobile-only\"><p>Filter Civilization:</p></li>";
for (let i = 0; i < civilizations.length; i++) {
    str += "<li";
    if (selectedciv) {
        if (civilizations[i].abbr == selectedciv.abbr) {
            str += " class=\"active\"";
        }
    }
    str += "><a href=\"index.html?c=" + civilizations[i].abbr + "\">" + civilizations[i].civilization + "</a></li>";
}
str += "<li class=\"mobile-only\"><a href=\"#\" class=\"logged-in modal-trigger\" data-target=\"modal-account\">👤 Your Account</a></li>";
str += "<li class=\"mobile-only\"><a href=\"#\" class=\"logged-out modal-trigger\" data-target=\"modal-signup\">👤 Login / Signup</a></li>";
if (selectedciv) {
    str += "<li><a href=\"index.html\">⭯ Remove Filter</a></li>";
    str += "<li class=\"mobile-only\"><a href=\"build.html?c=" + selectedciv.abbr + "\" class=\"gold\">✎ Create New Build</a></li>";
    document.getElementById("BOforCIV").href += selectedciv.abbr;
} else {
    str += "<li class=\"mobile-only\"><a href=\"build.html?c=EN\" class=\"gold\">✎ Create New Build</a></li>";
    document.getElementById("BOforCIV").href += "EN";
}
str += "<li class=\"mobile-only\"><a href=\"https://github.com/LENpolygon/Build-Order-Tool-AoE4-\">💻 View Github Page</a></li>";
str += "<li class=\"mobile-only\"><a href=\"https://ko-fi.com/lenpolygon\">💰 Support Website</a></li>";
str += "<li class=\"mobile-only\"><a href=\"https://aoe4world.com/\">🌎 AoE4World.com</a></li>";
document.getElementById("civilizationsMenu").innerHTML = str;

//////////////////////////////////////////////////
// WRITE current civ
//////////////////////////////////////////////////
if (selectedciv) {
    document.getElementById("civilizationFocus").innerHTML = selectedciv.focus;
    document.getElementById("civilizationFlag").innerHTML = "<img src=\"img/flag" + selectedciv.abbr + ".png\" onerror=\"this.src = 'assets/placeholder.png';\"></img>";
    var str = selectedciv.civilization + " ";
    for (let i = 0; i < 3; i++) {
        if (selectedciv.difficulty == i) {
            str += "<span style=\"color: #11141D\">";
        }
        str += "★";
    }
    str += "</span>";
    document.getElementById("civilizationName").innerHTML = str;
}
else {
    document.getElementById("civBox").style.visibility = "hidden";
    document.getElementById("civBox").innerHTML = "";
    document.getElementById("civBox").className = "";
}

//////////////////////////////////////////////////
// GET Popular builds from Firestore
//////////////////////////////////////////////////
async function GetPopBuilds() {
    var q;
    if (selectedciv) {
        q = query(collection(db, "Age4Builds"), where("civ", "==", selectedciv.abbr), orderBy("score", "desc"), limit(loadLimit));
    } else {
        q = query(collection(db, "Age4Builds"), orderBy("score", "desc"), limit(loadLimit));
    }
    const querySnapshot = await getDocs(q);
    var counter = 0;
    var rows = document.getElementById("popTable").rows;
    querySnapshot.forEach((doc) => {
        document.getElementById("popTable").insertRow();
        // doc.data() is never undefined for query doc snapshots
        var docId = doc.id;
        var docData = doc.data();
        var rowstring = "<td>" + (counter + 1) + "</td>";
        rowstring += "<td><img src=\"img/flag" + docData.civ + ".png\" height=\"24\" onerror=\"this.src = 'assets/placeholder.png';\"><a href=\"view.html?f=" + docId + "\"></img> " + escapeHtml(docData.title).substring(0, titleLength) + " (by " + escapeHtml(docData.user).substring(0, nameLength) + ")</a></td>";
        rows[counter + 1].innerHTML = rowstring;
        counter++;
    });
}
GetPopBuilds();

//////////////////////////////////////////////////
// GET Newest builds from Firestore
//////////////////////////////////////////////////
function timePassed(oldDate) {
    var days = Math.floor((Date.now() - oldDate) / 86400000);
    var str = "";
    if (days == 0) {
        str = "now";
    } else if (days <= 6) {
        str = days + "d"
    } else if (days <= 28) {
        str = Math.floor(days / 7) + "w"
    } else {
        str = Math.floor(days / 30) + "m"
    }
    return str;
}


//////////////////////////////////////////////////
// GET Newest builds from Firestore
//////////////////////////////////////////////////
async function GetNewBuilds() {
    var q;
    if (selectedciv) {
        //q = query(collection(db, "Age4Builds"), where("civ", "==", selectedciv.abbr), where("timestamp", ">", Date.now() - 2592000000), orderBy("timestamp", "desc"), limit(loadLimit));
        q = query(collection(db, "Age4Builds"), where("civ", "==", selectedciv.abbr), orderBy("timestamp", "desc"), limit(loadLimit));
    } else {
        //q = query(collection(db, "Age4Builds"), where("timestamp", ">", Date.now() - 2592000000), orderBy("timestamp", "desc"), limit(loadLimit));
        q = query(collection(db, "Age4Builds"), orderBy("timestamp", "desc"), limit(loadLimit));
    }
    const querySnapshot = await getDocs(q);
    var counter = 0;
    var rows = document.getElementById("newTable").rows;
    querySnapshot.forEach((doc) => {
        document.getElementById("newTable").insertRow();
        // doc.data() is never undefined for query doc snapshots
        var docId = doc.id;
        var docData = doc.data();
        var rowstring = "<td>" + timePassed(docData.timestamp) + "</td>";
        rowstring += "<td><img src=\"img/flag" + docData.civ + ".png\" height=\"24\" onerror=\"this.src = 'assets/placeholder.png';\"><a href=\"view.html?f=" + docId + "\"></img> " + escapeHtml(docData.title).substring(0, titleLength) + " (by " + escapeHtml(docData.user).substring(0, nameLength) + ")</a></td>";
        rows[counter + 1].innerHTML = rowstring;
        counter++;
    });
}
GetNewBuilds();

//////////////////////////////////////////////////
// RANDOMIZE background
//////////////////////////////////////////////////
//const backgroundOptions = ["02celebration", "03focuslongbowmen", "04lordrobertsb", "07raisedstakestwoknights", "10mongoltrebuchet", "11chinesetradecaravans", "12mongolscharging", "15paytributeb", "alarm"];
//document.getElementById("background").style.backgroundImage = "url(img/" + backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)] + ".png)";

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // sign up the user
    createUserWithEmailAndPassword(auth, email, password).then(cred => {
        return setDoc(doc(db, "users", cred.user.uid), { user: signupForm['username'].value });
    }).then(() => {
        // console.log(cred.user);
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector('#modal-account');
    M.Modal.getInstance(modal).close();
    auth.signOut();
})

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    signInWithEmailAndPassword(auth, email, password).then(cred => {
        // console.log(cred.user);
        // close the login modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})

// listen for auth status changes
auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }
})

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const setupUI = (user) => {
    if (user) {
        accountDetails.innerHTML = `<div>Logged in as ${user.email}</div>`;
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        // hide account info
        accountDetails.innerHTML = '';
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}
// setup materialize components
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});