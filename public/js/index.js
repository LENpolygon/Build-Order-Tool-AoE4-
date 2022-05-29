import civilizations from '../json/civilizations.json' assert {type: 'json'};

//////////////////////////////////////////////////
// DEFINE menu structure
//////////////////////////////////////////////////
import headerData from '../json/headerData.json' assert {type: 'json'};
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

//////////////////////////////////////////////////
// INITIALIZE
//////////////////////////////////////////////////
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"; import firebaseConfig from '../json/firebaseConfig.json' assert {type: 'json'}; const app = initializeApp(firebaseConfig); import { getFirestore, getDoc, collection, updateDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"; const db = getFirestore();
var str = "";

//////////////////////////////////////////////////
// WRITE civilizations menu
//////////////////////////////////////////////////
for (let i = 0; i < civilizations.length; i++) {
    str += "<li";
    if (selectedciv) {
        if (civilizations[i].abbr == selectedciv.abbr) {
            str += " class=\"active\"";
        }
    }
    str += "><a href=\"index.html?c=" + civilizations[i].abbr + "\">" + civilizations[i].civilization + "</a></li>";
}
document.getElementById("civilizationsMenu").innerHTML = str;

//////////////////////////////////////////////////
// WRITE current civ
//////////////////////////////////////////////////
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
str = "";

//////////////////////////////////////////////////
// RANDOMIZE background
//////////////////////////////////////////////////
const backgroundOptions = ["02celebration", "03focuslongbowmen", "04lordrobertsb", "07raisedstakestwoknights", "10mongoltrebuchet", "11chinesetradecaravans", "12mongolscharging", "15paytributeb", "alarm"];
document.getElementById("background").style.backgroundImage = "url(img/" + backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)] + ".png)";